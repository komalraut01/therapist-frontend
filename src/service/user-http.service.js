import BaseService from './base.service'

export default class UserHTTPService extends BaseService {
  constructor(userType) {
    //this.routerStore = routerStore
    if (!userType) {
      throw new Error('No user type specified during HTTP Service initialization')
    }
    super()
    this.userType = userType
    this._accessTokenKey = this.generateTokenKeyName(this.userType)
  }

  generateTokenKeyName(userType) {
    if (userType === 'admin') return 'adminAccessToken'
    else if (userType === 'user') return 'userAccessToken'
    else if (userType === 'doctor') return 'doctorAccessToken'
    else throw new Error('Unknown user type detected ' + userType + ' generating token key name')
  }
}
