import { CRow, CCol, CCard, CCardHeader, CTable, CTableRow, CTableHead, CTableHeaderCell, CCardBody, CTableDataCell, CTableBody } from "@coreui/react";
import React, { useEffect, useState } from "react";
import ErrorList from "../../../Components/Common/ErrorList";
import SuccessMsg from "../../../Components/Common/SuccessMsg";
import { getUsers } from "../../../service/users/index.service";

const AdminUserList = () => {
  const [data, setData] = useState([])
  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState('')
  const getData = async () => {
    const result = await getUsers();
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
              <strong>Doctors List</strong>
            </CCardHeader>
            <ErrorList errors={errors} />
            <SuccessMsg message={success} />
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{item.name}</CTableDataCell>
                      <CTableDataCell>{item.email}</CTableDataCell>
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

export default AdminUserList