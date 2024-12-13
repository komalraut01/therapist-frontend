import * as tokenService from './token.service'

export const getTokenKey = (type) => {
  let tokenKey = ''
  if (type === 'admin') {
    tokenKey = 'adminAccessToken'
  } else if (type === 'user') {
    tokenKey = 'userAccessToken'
  } else if (type === 'doctor') {
    tokenKey = 'doctorAccessToken'
  } else {
    throw new Error('Invalid user type specified')
  }
  return tokenKey
}

export const isLoggedIn = (type) => {
  const tokenName = getTokenKey(type);
  const token = tokenService.getToken(tokenName)
  if (token) {
    return true
  } else return false
}

export const logout = (type) => {
    tokenService.removeToken(getTokenKey(type))
}
