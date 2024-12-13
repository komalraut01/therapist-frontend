import React, {useState, useEffect} from 'react'
import { CCard, CCol, CRow } from '@coreui/react'
import { getAdminAppointment } from '../../../service/admins/appointments.service'
import { getUsers } from '../../../service/users/index.service'
import { getDoctors } from '../../../service/doctors/index.service'


const AdminDashboard = () => {
  const [totalAppointment, setTotalAppointment] = useState(0)
  const [newAppointment, setNewAppointment] = useState(0)
  const [totalDoctors, setTotalDoctors] = useState(0)
  const [totalUser, setTotalUser] = useState(0)

  const getData = async () => {
    let result = await getAdminAppointment('all')
    setTotalAppointment(result.data.length)
    result = await getAdminAppointment('new')
    setNewAppointment(result.data.length)
    result = await getDoctors()
    setTotalDoctors(result.data.length)
    result = await getUsers()
    setTotalUser(result.data.length)
  }

  useEffect(()=> {
    getData()
  }, [])
  return (
    <>
      <CCard className="mb-4">
      <CCol xs={12} md={6} xl={12}>
          <CRow>
            <CCol xs={3}>
              <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                <div className="text-body-secondary text-truncate small">Total Appointments</div>
                <div className="fs-5 fw-semibold">{totalAppointment}</div>
              </div>
            </CCol>
            <CCol xs={3}>
              <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                <div className="text-body-secondary text-truncate small">New Appointments</div>
                <div className="fs-5 fw-semibold">{newAppointment}</div>
              </div>
            </CCol>
            <CCol xs={3}>
              <div className="border-start border-start-4 border-start-primary py-1 px-3 mb-3">
                <div className="text-body-secondary text-truncate small">Total Doctors</div>
                <div className="fs-5 fw-semibold">{totalDoctors}</div>
              </div>
            </CCol>
            <CCol xs={3}>
              <div className="border-start border-start-4 border-start-secondary py-1 px-3 mb-3">
                <div className="text-body-secondary text-truncate small">Total Users</div>
                <div className="fs-5 fw-semibold">{totalUser}</div>
              </div>
            </CCol>
          </CRow>
        </CCol>
      </CCard>
    </>
  )
}

export default AdminDashboard
