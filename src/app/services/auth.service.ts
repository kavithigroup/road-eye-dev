import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user?: {
    user_id: null
    first_name: string
    last_name: string
    email: string
    nic: string
    role: number
    username: string
  }

  constructor() {

  }

  getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }

  updatesSession() {
    try {
      let c = this.getCookie("road-eye-user")
      if (c) {
        if (c.startsWith('"'))
          c = c.substr(1, c.length - 2)
        this.user = JSON.parse(atob(c)) || null
        console.log(this.user)
      }
    } catch (e) {
      console.log(e)
    }
  }
}
