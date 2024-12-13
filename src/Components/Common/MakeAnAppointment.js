import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { getDoctors } from "../../service/doctors/index.service";
import { createAppointment } from "../../service/users/appointment.service";
import ErrorList from "./ErrorList";
import SuccessMsg from "./SuccessMsg";
import { getTimeSlotsByDoctorIdForDay } from "../../service/doctors/time-slot.service";
import { convertHours24to12 } from "../../utils/hours-converter.service";

export default function MakeAnAppointment({ open, setOpen }) {
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState('')
    const [data, setData] = useState({
        doctor: '',
        date: '',
        time: '',
        text: '',
    })
    const [timeSlots, setTimeSlots] = useState([])

    const handleChange = ({ target }) => {
        data[target.name] = target.value
        const temp = Object.assign({}, data)
        setData(temp)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const [doctors, setDoctors] = useState([])

    const getData = async () => {
        const result = await getDoctors()
        setDoctors(result.data)
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      setErrors([])
      setSuccess('')
      try {
        const result = await createAppointment(data);
        setSuccess(result.data.message)
      } catch (error) {
        setErrors(error.response.data.message)
      }
    }



    const handleDateChange = async ({ target }) => {
        data.date = target.value
        data.time = ''
        const temp = Object.assign({}, data)
        setData(temp)
        if (data.doctor) {
            const result = await getTimeSlotsByDoctorIdForDay(data.doctor, new Date(target.value).getDay())
            setTimeSlots(result.data)
        }
        
    }

    const handleDoctorChange = async ({ target }) => {
        data.doctor = target.value
        data.time = ''
        const temp = Object.assign({}, data)
        setData(temp)
        if (data.date) {
            const result = await getTimeSlotsByDoctorIdForDay(target.value, new Date(data.date).getDay())
            setTimeSlots(result.data)
        }
        
    }
    useEffect(() => {
        getData()
    }, [open])

    return (
        <Modal
            className="modal-appointment"
            onClose={handleClose}
            open={open}
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalRequestLabel">Make an Appointment</h5>
                        <button type="button" className="close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <ErrorList errors={errors} />
                    <SuccessMsg message={success} />
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <select className="form-control" id="doctor" placeholder="Doctor" name="doctor" onChange={handleDoctorChange}>
                                    <option value="">Select Doctor</option>
                                    {doctors.map((doctor, index) => (
                                        <option selected={data.doctor == doctor._id ? true : false} key={index} value={doctor._id}>{doctor.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">

                                        <input value={data.date} onChange={handleDateChange} type="date" name="date" className="form-control appointment_date" placeholder="Date" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <select className="form-control" id="time" placeholder="time" name="time" onChange={handleChange}>
                                    <option value="">Select Time Slot</option>
                                    {timeSlots.map((timeSlot, index) => (
                                        <option selected={data.time == convertHours24to12(timeSlot) ? true : false} key={index} value={convertHours24to12(timeSlot)}>{convertHours24to12(timeSlot)}</option>
                                    ))}
                                </select>
                                </div>
                            </div>


                            <div className="form-group">

                                <textarea onChange={handleChange} name="text" id="appointment_message" className="form-control" cols="30" rows="10" placeholder="Message">
                                    {data.text}
                                </textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Make an Appointment" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </Modal>
    )
}