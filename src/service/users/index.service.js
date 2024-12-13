import BaseService from "../base.service";
const baseService = new BaseService()

export const getUsers = async() => {
    return await baseService.get('users/list')
}