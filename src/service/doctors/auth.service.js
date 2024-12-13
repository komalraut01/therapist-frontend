import UserHTTPService from "../user-http.service"

const httpService = new UserHTTPService('doctor')

export const loginDoctor = async (data) => {
    const result = await httpService.post('doctors/login', data)
    httpService.saveToken(result.data.token)
}

export const registerDoctor = async (data) => {
    return await httpService.post('doctors/register', data)
}

export const getDoctorProfile = async() => {
    return await httpService.get('doctors/profile')
}

export const updateDoctorProfile = async(data) => {
    return await httpService.put('doctors/profile', data)
}

export const uploadProfilePicture = async(data) => {
    return await httpService.put('doctors/profile-pic', data)
}