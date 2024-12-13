import UserHTTPService from "../user-http.service"

const httpService = new UserHTTPService('admin')

export const getAdminAppointment = async(type) => {
    return await httpService.get(`admins/appointments/list/${type}`)
}
