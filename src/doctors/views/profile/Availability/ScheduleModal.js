import React, { useState, useEffect } from 'react'
import { CModal, CRow, CCard, CModalBody } from '@coreui/react'
import ErrorList from '../../../../Components/Common/ErrorList'
import { convertHours12to24 } from '../../../../utils/hours-converter.service'
import { addScheduleById, updateScheduleById } from '../../../../service/doctors/time-slot.service'

const ScheduleModal = (props) => {
  const [newSchedule, setNewSchedule] = useState({ from_time: 9, to_time: 12, days: [] })
  const [errors, setErrors] = useState([])
  const handleSelect = (e) => {
    setNewSchedule({ ...newSchedule, [e.target.name]: parseInt(e.target.value) })
  }

  const handleCheck = (e) => {
    const days = newSchedule.days
    const day = parseInt(e.target.value)
    if (e.target.checked) {
      days.push(day)
    } else {
      days.pop(day)
    }
    setNewSchedule({ ...newSchedule, days: days })
  }

  useEffect(() => {
    if (props.mode === 'Edit') {
      const from_time = convertHours12to24(props.schedule.from_time)
      const to_time = convertHours12to24(props.schedule.to_time)
      setNewSchedule({
        from_time: parseInt(from_time),
        to_time: parseInt(to_time),
        days: props.schedule.days,
      })
    }
  }, [props.schedule])

  const handleNewScheduleSubmit = async (e) => {
    setErrors([])
    e.preventDefault()
    try {
      if (props.mode === 'Edit') {
        await updateScheduleById(props.schedule._id, newSchedule)
      } else {
        await addScheduleById(newSchedule)
        setNewSchedule({ from_time: 9, to_time: 12, days: [] })
      }
      props.setIsScheduleModalOpen(false)
    } catch (error) {
      setErrors(error.response.data.message)
    }
  }

  return (
    <CModal visible={props.isScheduleModalOpen}>
      <CRow id="provider-available">
        <div className="model">
          {/* <div className="modal-dialog"> */}
          <CCard className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.mode} Schedule</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => props.setIsScheduleModalOpen(false)}
                aria-label="Close"
              />
            </div>
            <CModalBody className="popup-wrapper">
              <ErrorList errors={errors} />
              <form id="add-schedule">
                <div className="row mb-3 align-item-center">
                  <div className="col-12 ">
                    <label className="form-label">Select Time</label>
                  </div>
                  <div className="row align-item-center">
                    <div className="col-5 col-sm-4 col-lg-4">
                      <div className="form-input-group">
                        <i className="fas fa-clock input-icon" />
                        <select
                          className="form-select"
                          name="from_time"
                          onChange={handleSelect}
                          defaultValue={newSchedule.from_time}
                        >
                          <option value="5">5 AM</option>
                          <option value="6">6 AM</option>
                          <option value="7">7 AM</option>
                          <option value="8">8 AM</option>
                          <option value="9">9 AM</option>
                          <option value="10">10 AM</option>
                          <option value="11">11 AM</option>
                          <option value="12">12 AM</option>
                          <option value="13">1 PM</option>
                          <option value="14">2 PM</option>
                          <option value="15">3 PM</option>
                          <option value="16">4 PM</option>
                          <option value="17">5 PM</option>
                          <option value="18">6 PM</option>
                          <option value="19">7 PM</option>
                          <option value="20">8 PM</option>
                          <option value="21">9 PM</option>
                          <option value="22">10 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-1 col-sm-1 col-lg-1 p-0 text-center">
                      <span className="form-label">To</span>
                    </div>
                    <div className="col-5 col-sm-4 col-lg-4 ">
                      <div className="form-input-group">
                        <i className="fas fa-clock input-icon" />
                        <select
                          className="form-select"
                          name="to_time"
                          onChange={handleSelect}
                          defaultValue={newSchedule.to_time}
                        >
                          <option value="5">5 AM</option>
                          <option value="6">6 AM</option>
                          <option value="7">7 AM</option>
                          <option value="8">8 AM</option>
                          <option value="9">9 AM</option>
                          <option value="10">10 AM</option>
                          <option value="11">11 AM</option>
                          <option value="12">12 AM</option>
                          <option value="13">1 PM</option>
                          <option value="14">2 PM</option>
                          <option value="15">3 PM</option>
                          <option value="16">4 PM</option>
                          <option value="17">5 PM</option>
                          <option value="18">6 PM</option>
                          <option value="19">7 PM</option>
                          <option value="20">8 PM</option>
                          <option value="21">9 PM</option>
                          <option value="22">10 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-item-center">
                  <div className="col-12 ">
                    <label className="form-label mb-1">Select Days</label>
                  </div>
                  <div className="col-12 d-flex">
                    <div className="form-check form-check-inline ">
                      <label className="form-check-label " htmlFor="Checkbox1">
                        Mo
                      </label>
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id="Checkbox1"
                        defaultValue="1"
                        onChange={handleCheck}
                        defaultChecked={newSchedule.days.includes(1) ? true : false}
                      />
                    </div>
                    <div className="form-check form-check-inline ">
                      <label className="form-check-label " htmlFor="Checkbox2">
                        Tu
                      </label>
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id="Checkbox2"
                        defaultValue="2"
                        onChange={handleCheck}
                        defaultChecked={newSchedule.days.includes(2) ? true : false}
                      />
                    </div>
                    <div className="form-check form-check-inline ">
                      <label className="form-check-label " htmlFor="Checkbox3">
                        We
                      </label>
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id="Checkbox3"
                        defaultValue="3"
                        onChange={handleCheck}
                        defaultChecked={newSchedule.days.includes(3) ? true : false}
                      />
                    </div>
                    <div className="form-check form-check-inline ">
                      <label className="form-check-label " htmlFor="Checkbox4">
                        Th
                      </label>
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id="Checkbox4"
                        defaultValue="4"
                        onChange={handleCheck}
                        defaultChecked={newSchedule.days.includes(4) ? true : false}
                      />
                    </div>
                    <div className="form-check form-check-inline ">
                      <label className="form-check-label " htmlFor="Checkbox5">
                        Fr
                      </label>
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id="Checkbox5"
                        defaultValue="5"
                        onChange={handleCheck}
                        defaultChecked={newSchedule.days.includes(5) ? true : false}
                      />
                    </div>
                    <div className="form-check form-check-inline ">
                      <label className="form-check-label " htmlFor="Checkbox6">
                        Sa
                      </label>
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id="Checkbox6"
                        defaultValue="6"
                        onChange={handleCheck}
                        defaultChecked={newSchedule.days.includes(6) ? true : false}
                      />
                    </div>
                    <div className="form-check form-check-inline ">
                      <label className="form-check-label " htmlFor="Checkbox7">
                        Su
                      </label>
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id="Checkbox7"
                        defaultValue="0"
                        onChange={handleCheck}
                        defaultChecked={newSchedule.days.includes(0) ? true : false}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-submit mx-0"
                  onClick={handleNewScheduleSubmit}
                >
                  Save Changes
                </button>
              </form>
            </CModalBody>
          </CCard>
          {/* </div> */}
        </div>
      </CRow>
    </CModal>
  )
}

export default ScheduleModal
