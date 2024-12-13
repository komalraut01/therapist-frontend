import UserHTTPService from "../user-http.service"

const httpService = new UserHTTPService('user')

export const getUserAppointment = async() => {
    return await httpService.get('appointments/users/list')
}

export const createAppointment = async(data) => {
    return await httpService.post('appointments', data)
}