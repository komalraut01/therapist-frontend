import UserHTTPService from "../user-http.service"

const httpService = new UserHTTPService('user')

export const loginUser = async(data) => {
    const result = await httpService.post('users/login', data)
    httpService.saveToken(result.data.token)
}

export const registerUser = async(data) => {
    return await httpService.post('users/register', data)
}

export const getUserProfile = async() => {
    return await httpService.get('users/profile')
}

export const updateUserProfile = async(data) => {
    return await httpService.put('users/profile', data)
}