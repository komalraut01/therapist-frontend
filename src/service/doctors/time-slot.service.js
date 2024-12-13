import UserHTTPService from "../user-http.service"

const httpService = new UserHTTPService('doctor')

export const getTimeSlots = async () => {
    return await httpService.get('doctors/time-slot')
}

export const getTimeSlotsByDoctorIdForDay = async (_id, day ) => {
    return await httpService.get(`doctors/${_id}/time-slot/${day}`)
}

export const deleteScheduleById = async (id) => {
    return await httpService.delete(`doctors/time-slot/${id}`)
}

export const addScheduleById = async (data) => {
    return await httpService.post(`doctors/time-slot`, data)
}

export const updateScheduleById = async (id, data) => {
    return await httpService.put(`doctors/time-slot/${id}`, data)
}

