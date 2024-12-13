import { CRow, CCol, CCard, CCardHeader, CTable, CTableRow, CTableHead, CTableHeaderCell, CCardBody, CTableDataCell, CTableBody } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { getUserAppointment } from "../../../service/users/appointment.service";

const Appointments = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    const result = await getUserAppointment();
    setData(result.data)
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
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Doctor Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Time</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{item.doctor.name}</CTableDataCell>
                    <CTableDataCell>{item.date}</CTableDataCell>
                    <CTableDataCell>{item.time}</CTableDataCell>
                    <CTableDataCell>{item.status}</CTableDataCell>
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

export default Appointments