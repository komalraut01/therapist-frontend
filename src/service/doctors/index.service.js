import BaseService from "../base.service";
const baseService = new BaseService()

export const getDoctors = async() => {
    return await baseService.get('doctors/list')
}

export const updateTimeSlot = async(day, index, data) => {
    return await baseService.put(`doctors/time-slot/${day}/${index}`, data)
}