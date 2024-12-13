import { CCard, CCardHeader, CCol, CRow, CInputGroup, CButton, CFormInput, CCardBody, CForm, CFormTextarea } from "@coreui/react"
import React, { useEffect, useState } from "react"
import ErrorList from "../../../Components/Common/ErrorList"
import SuccessMsg from "../../../Components/Common/SuccessMsg"
import { getDoctorProfile, updateDoctorProfile, uploadProfilePicture } from "../../../service/doctors/auth.service"
import AvailabilityList from "./Availability/AvailabilityList"
import ScheduleModal from "./Availability/ScheduleModal"
import { getTimeSlots } from "../../../service/doctors/time-slot.service"

const DoctorProfile = () => {
    const [errors, setErrors] = useState([])
    const [schedules, setSchedules] = useState([])
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)
    const openModal = () => {
        setIsScheduleModalOpen(true)
    }

    const [success, setSuccess] = useState('')
    const [data, setData] = useState({
        email: '',
        name: '',
        specialist: '',
        address: '',
        password: ''
    })

    const getData = async () => {
        const result = await getDoctorProfile();
        setData(result.data)
    }

    const handleChange = ({ target }) => {
        data[target.name] = target.value
        const temp = Object.assign({}, data)
        setData(temp)
    }

    useEffect(() => {
        getData()
    }, [])

    const getProviderSchedule = async () => {
        try {
          const result = await getTimeSlots()
          setSchedules(result.data)
        } catch (error) {
          setErrors(error.response.data.message)
        }
      }
    
      useEffect(() => {
        getProviderSchedule()
      }, [isScheduleModalOpen])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors([])
        setSuccess('')
        try {
            const result = await updateDoctorProfile(data);
            setSuccess(result.data.message)
        } catch (error) {
            setErrors(error.response.data.message)
        }
    }

    const handleFileChange = async (e) => {
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        await uploadProfilePicture(formData)
    }

    return (
        <>
            <CRow className="px-2">
                <CCol xs={8}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <strong>Update Profile</strong>
                        </CCardHeader>
                        <CCardBody>
                            <ErrorList errors={errors} />
                            <SuccessMsg message={success} />
                            <CForm onSubmit={handleSubmit}>
                                <CInputGroup className="mb-3">
                                    <CFormInput
                                        placeholder="Name"
                                        aria-label="Name"
                                        aria-describedby="basic-addon1"
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange} />
                                </CInputGroup>
                                <CInputGroup className="mb-3">
                                    <CFormInput
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="basic-addon1"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange} />
                                </CInputGroup>
                                <CInputGroup className="mb-3">
                                    <CFormInput placeholder="Specialist" autoComplete="specialist" name="specialist" onChange={handleChange} value={data.specialist} />
                                </CInputGroup>
                                <CInputGroup className="mb-3">
                                    <CFormTextarea placeholder="Address" name="address" onChange={handleChange}>{data.address}</CFormTextarea>
                                </CInputGroup>
                                <CButton type="submit" color="secondary" variant="outline" id="button-addon1">
                                    Save
                                </CButton>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CRow className="px-2">
                <CCol xs={8}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <strong>Update Profile Pic</strong>
                        </CCardHeader>
                        <CCardBody>
                                <CInputGroup className="mb-3">
                                    <CFormInput
                                        placeholder="Name"
                                        aria-label="Name"
                                        aria-describedby="basic-addon1"
                                        name="name"
                                        type="file"
                                        onChange={handleFileChange} />
                                </CInputGroup>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            <CRow className="px-2">
                <CCol xs={8}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <strong>Time Slot</strong>
                        </CCardHeader>
                        <CRow className="row mb-3 text-end">
                            <CCol className="">
                                <a
                                    href="#myModal"
                                    onClick={openModal}
                                    className="btn btn-primary mx-0"
                                    data-toggle="modal"
                                >
                                    Add Schedule
                                </a>
                            </CCol>
                        </CRow>
                        <CCardBody>
                            {schedules.map((schedule, index) => {
                                return (
                                    <AvailabilityList
                                        schedule={schedule}
                                        key={index}
                                        index={index}
                                        getProviderSchedule={getProviderSchedule}
                                        setErrors={setErrors}
                                    />
                                )
                            })}
                        </CCardBody>
                        <ScheduleModal
                            setIsScheduleModalOpen={setIsScheduleModalOpen}
                            isScheduleModalOpen={isScheduleModalOpen}
                            setErrors={setErrors}
                            mode="New"
                        />
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default DoctorProfile
