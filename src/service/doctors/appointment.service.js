import UserHTTPService from "../user-http.service"

const httpService = new UserHTTPService('doctor')

export const getDoctorAppointment = async(type) => {
    return await httpService.get(`appointments/doctors/list/${type}`)
}

export const acceptAppointmentById = async(id) => {
    return await httpService.get(`appointments/accept/${id}`)
}

export const rejectAppointmentById = async(id) => {
    return await httpService.get(`appointments/reject/${id}`)
}
