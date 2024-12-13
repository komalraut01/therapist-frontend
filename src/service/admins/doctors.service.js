import UserHTTPService from "../user-http.service"

const httpService = new UserHTTPService('admin')

export const activateDoctorById = async(id) => {
    return await httpService.get(`admins/doctor/${id}/activate`)
}

export const deactivateDoctorById = async(id) => {
    return await httpService.get(`admins/doctor/${id}/deactivate`)
}