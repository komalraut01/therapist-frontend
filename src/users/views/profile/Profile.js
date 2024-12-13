import { CCard, CCardHeader, CCol, CRow, CInputGroup, CButton, CFormInput, CCardBody, CForm } from "@coreui/react"
import React, { useEffect, useState } from "react"
import ErrorList from "../../../Components/Common/ErrorList"
import SuccessMsg from "../../../Components/Common/SuccessMsg"
import { getUserProfile, updateUserProfile } from "../../../service/users/auth.service"

const UserProfile = () => {
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState('')
    const [data, setData] = useState({
        name: '',
        email: ''
    })

    const getData = async () => {
        const result = await getUserProfile();
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors([])
        setSuccess('')
        try {
          const result = await updateUserProfile(data);
          setSuccess(result.data.message)
        } catch (error) {
          setErrors(error.response.data.message)
        }
      }

    return (
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
                                onChange={handleChange}
                            />
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                            <CFormInput
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                            />
                        </CInputGroup>
                        <CButton type="submit" color="secondary" variant="outline" id="button-addon1">
                            Dave
                        </CButton>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default UserProfile
