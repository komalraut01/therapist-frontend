import { CRow, CCol, CCard, CCardHeader, CTable, CTableRow, CTableHead, CTableHeaderCell, CCardBody, CTableDataCell, CTableBody } from "@coreui/react";
import React, { useEffect, useState } from "react";
import ErrorList from "../../../Components/Common/ErrorList";
import SuccessMsg from "../../../Components/Common/SuccessMsg";
import { getDoctors } from "../../../service/doctors/index.service";
import { activateDoctorById, deactivateDoctorById } from "../../../service/admins/doctors.service";

const AdminDoctorList = () => {
  const [data, setData] = useState([])
  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState('')
  const getData = async () => {
    const result = await getDoctors();
    setData(result.data)
  }

  const activateDoctor = async (id) => {
    setErrors([])
    setSuccess('')
    try {
      const result = await activateDoctorById(id);
      setSuccess(result.data.message)
      getData()
    } catch (error) {
      setErrors(error.response.data.message)
    }
  }

  const deactivateDoctor = async (id) => {
    setErrors([])
    setSuccess('')
    try {
      const result = await deactivateDoctorById(id);
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
                    <CTableHeaderCell scope="col">Specialty</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{item.name}</CTableDataCell>
                      <CTableDataCell>{item.email}</CTableDataCell>
                      <CTableDataCell>{item.specialist}</CTableDataCell>
                      <CTableDataCell>
                        {
                            item.status == 1 ? (
                                <small onClick={() => deactivateDoctor(item._id)} className="action">Deactivate</small>
                            ) : (
                                <small onClick={() => activateDoctor(item._id)} className="action">Activate</small>
                            )
                        }
                        </CTableDataCell>
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

export default AdminDoctorList