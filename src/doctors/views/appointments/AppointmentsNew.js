import { CRow, CCol, CCard, CCardHeader, CTable, CTableRow, CTableHead, CTableHeaderCell, CCardBody, CTableDataCell, CTableBody } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { acceptAppointmentById, getDoctorAppointment, rejectAppointmentById } from "../../../service/doctors/appointment.service";
import ErrorList from "../../../Components/Common/ErrorList";
import SuccessMsg from "../../../Components/Common/SuccessMsg";

const DoctorAppointmentNew = () => {
  const [data, setData] = useState([])
  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState('')
  const getData = async () => {
    const result = await getDoctorAppointment('new');
    setData(result.data)
  }

  const acceptAppointment = async (id) => {
    setErrors([])
    setSuccess('')
    try {
      const result = await acceptAppointmentById(id);
      setSuccess(result.data.message)
      getData()
    } catch (error) {
      setErrors(error.response.data.message)
    }
  }

  const rejectAppointment = async (id) => {
    setErrors([])
    setSuccess('')
    try {
      const result = await rejectAppointmentById(id);
      setSuccess(result.data.message)
      getData()
    } catch (error) {
      setErrors(error.response.data.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Appointment List</strong>
            </CCardHeader>
            <ErrorList errors={errors} />
            <SuccessMsg message={success} />
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">User Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Time</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{item.user.name}</CTableDataCell>
                      <CTableDataCell>{item.date}</CTableDataCell>
                      <CTableDataCell>{item.time}</CTableDataCell>
                      <CTableDataCell><small onClick={() => acceptAppointment(item._id)} className="action">Accept</small> | <small onClick={() => rejectAppointment(item._id)} className="action">Reject</small></CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default DoctorAppointmentNew