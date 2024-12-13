import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ScheduleModal from './ScheduleModal'
import { deleteScheduleById } from '../../../../service/doctors/time-slot.service'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'
import { CRow } from '@coreui/react'

const AvailabilityList = ({ schedule, index, getProviderSchedule, setErrors }) => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)
  const deleteSchedule = async (e) => {
    if (window.confirm('Are you sure you want to delete this schedule ?')) {
      e.preventDefault()
      try {
        await deleteScheduleById(schedule._id)
        getProviderSchedule()
      } catch (error) {
        setErrors(error.response.data.message)
      }
    } else {
      return false
    }
  }

  useEffect(() => {
    getProviderSchedule()
  }, [isScheduleModalOpen])

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row align-item-center">
            <div className="col-10">
              <i className="fa fa-clock card-icon" />
              <div className="card-content d-inline">
                <label className="card-label">{schedule.from_time}</label>
                <span className="card-label">{' '}To{' '}</span>
                <label className="card-label">{schedule.to_time}</label>
              </div>
            </div>
            <CRow className="col-2 text-end">
              <button
                className="btn col-6"
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Edit"
                onClick={() => setIsScheduleModalOpen(true)}
              >
                <CIcon icon={cilPencil} className="me-2" />
              </button>
              <button
                className="btn col-6"
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Delete"
                onClick={deleteSchedule}
              >
                <CIcon icon={cilTrash} className="me-2" />
              </button>
            </CRow>
            <div className="card-group col-12 align-item-center">
              <i className="fa fa-calendar-alt card-icon" />
              <div className="card-content d-inline">
                {schedule.days.map((day, index) => {
                  const Days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
                  return (
                    <label key={index} className="card-label d-inline">
                      {Days[day]}{' '}
                    </label>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScheduleModal
        setIsScheduleModalOpen={setIsScheduleModalOpen}
        isScheduleModalOpen={isScheduleModalOpen}
        setErrors={setErrors}
        schedule={schedule}
        index={index}
        mode="Edit"
      />
    </>
  )
}

AvailabilityList.propTypes = {
  schedule: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  getProviderSchedule: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
}

export default AvailabilityList
