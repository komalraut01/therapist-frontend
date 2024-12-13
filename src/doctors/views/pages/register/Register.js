import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import ErrorList from '../../../../Components/Common/ErrorList'
import { useNavigate } from 'react-router-dom'
import { registerDoctor } from '../../../../service/doctors/auth.service'

const DoctorRegister = () => {
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    name: '',
    specialist: '',
    address: '',
    password: ''
  });
  const handleChange = ({ target }) => {
    data[target.name] = target.value
    const temp = Object.assign({}, data)
    setData(temp)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([])
    try {
      const result = await registerDoctor(data);
      alert(result.data.message)
      navigate('/doctor-login')
    } catch (error) {
      setErrors(error.response.data.message)
    }

  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
            <ErrorList errors={errors} />
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="name" autoComplete="name" name="name" onChange={handleChange} value={data.name} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" name="email" onChange={handleChange} value={data.email} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Specialist" autoComplete="specialist" name="specialist" onChange={handleChange} value={data.specialist} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormTextarea placeholder="Address" name="address" onChange={handleChange}>{data.address}</CFormTextarea>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      name="password"
                      onChange={handleChange}
                      value={data.password}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default DoctorRegister
