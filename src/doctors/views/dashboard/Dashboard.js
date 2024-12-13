import React, { useEffect, useState } from 'react'
import { CCard, CCol, CRow } from '@coreui/react'
import { getDoctorAppointment } from '../../../service/doctors/appointment.service'

const DoctorDashboard = () => {
  const [totalAppointment, setTotalAppointment] = useState(0)
  const [newAppointment, setNewAppointment] = useState(0)

  const getData = async () => {
    let result = await getDoctorAppointment('all')
    setTotalAppointment(result.data.length)
    result = await getDoctorAppointment('new')
    setNewAppointment(result.data.length)
  }

  useEffect(()=> {
    getData()
  }, [])
  return (
    <>
      <CCard className="mb-4">
        <CCol xs={12} md={6} xl={6}>
          <CRow>
            <CCol xs={6}>
              <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                <div className="text-body-secondary text-truncate small">Total Appointments</div>
                <div className="fs-5 fw-semibold">{totalAppointment}</div>
              </div>
            </CCol>
            <CCol xs={6}>
              <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                <div className="text-body-secondary text-truncate small">New Appointments</div>
                <div className="fs-5 fw-semibold">{newAppointment}</div>
              </div>
            </CCol>
          </CRow>
        </CCol>
      </CCard>
    </>
  )
}

export default DoctorDashboard
