import axios from "axios";
import * as tokenService from "./token.service";

export default class BaseService {
  BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
  _accessToken = null;
  _accessTokenKey = null;
  _headers = {};

  async get(endpoint, options = {}) {
    Object.assign(options, this._getCommonOptions())
    return axios.get(`${this.BASE_URL}/${endpoint}`, options)
      .catch((error) => this._handleHttpError(error));
  }

  async post(endpoint, data, options = {}) {
    Object.assign(options, this._getCommonOptions())
    return axios.post(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error) => this._handleHttpError(error));
  }

  async put(endpoint, data, options = {}) {
    Object.assign(options, this._getCommonOptions())
    return axios.put(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error) => this._handleHttpError(error));
  }

  async delete(endpoint, options = {}) {
    Object.assign(options, this._getCommonOptions())
    return axios.delete(`${this.BASE_URL}/${endpoint}`, options)
      .catch((error) => this._handleHttpError(error));
  }

  _handleHttpError(error) {
    const { status } = error.response

    console.log(error)

    if (status !== 401) {
      throw error
    } else {
      return this._handle401(error)
    }
  }

  _handle401(error) {
    if (
      window.location.pathname.search('/user-login') > -1 ||
      window.location.pathname.search('/doctor-login') > -1 ||
      window.location.pathname.search('/admin-login') > -1
    ) {
      throw error
    } else {
      if (this.userType === 'user') window.location = '/user-login'
      else if (this.userType === 'doctor') {
        window.location = '/doctor-login'
      } else if (this.userType === 'admin') {
        window.location = '/admin-login'
      }
      throw new Error('No user type specified')
    }
  }

  _getCommonOptions() {
    const token = this.loadToken()
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    } else {
      return {}
    }
  }

  saveToken(accessToken) {
    this._accessToken = accessToken;
    tokenService.saveToken(this._accessTokenKey, accessToken);
  }

  loadToken() {
    const token = tokenService.getToken(this._accessTokenKey);
    this._accessToken = token;
    return token;
  }


  addHeader(key, value) {
    this._headers = Object.assign(this._headers, { [key]: value });
    return this;
  }

  getHeaders() {
    return this._headers;
  }

  get accessToken() {
    return this._accessToken ? this._accessToken : this.loadToken();
  }

} 