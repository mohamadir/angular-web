import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private loggedInStatus: boolean = false
  private user: any
  constructor(private httpClient: HttpClient) {
    console.log('Constructor', localStorage.getItem('isLogged'));
  }
  isLoggedInt() {
    return JSON.parse(localStorage.getItem('isLogged') || 'false')
  }

  setUser(user) {
    this.user = user
  }
  setLogged(isLogged) {
    localStorage.setItem('isLogged', `${isLogged}`)
    this.loggedInStatus = isLogged
  }
  getUser() {
    return this.user
  }
  getLogged() {
    this.loggedInStatus = JSON.parse(localStorage.getItem('isLogged') || 'false')
    if (this.loggedInStatus) {
      this.user = JSON.parse(localStorage.getItem('user'))
    }
    return this.loggedInStatus
  }

  login(user) {
    console.log(user)
    return this.httpClient.post('http://localhost:8002/api/users/login', user);

  }
}
