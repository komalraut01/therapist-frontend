import UserHTTPService from "../user-http.service"

const httpService = new UserHTTPService('admin')

export const loginAdmin = async(data) => {
    const result = await httpService.post('admins/login', data)
    httpService.saveToken(result.data.token)
}

export const getAdminProfile = async() => {
    return await httpService.get('admins/profile')
}