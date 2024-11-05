import {Injectable} from '@angular/core';

export enum Role {
  driver = 0,
  cooperate = 1,
  vendor = 2,
  admin = 3,
  police = 4,
  maintenance = 5

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user?: {
    user_id: number
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
    this.user = {
      user_id: 4,
      first_name: 'Vidath',
      last_name: 'Dhanushka',
      email: 'vidath@email.com',
      nic: "200045766457",
      role: Role.admin,
      username: 'admin'
    }
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
