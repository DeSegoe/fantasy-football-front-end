import { Injectable } from '@angular/core';
import { Session } from './session';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private session: Session;

  constructor(private cookieService: CookieService) {
    this.session = this.createSessionFromCookie()
  }

  public getSession(): Session {
    return this.session;
  }

  public login(authenticationToken: any): boolean {
    var expiry = new Date();
    expiry.setTime(expiry.getTime() + (60 * 60 * 1000));
    this.cookieService.setCookie("login", "success", expiry);
    this.session.activeSession = true;
    return true;
  }

  private createSessionFromCookie(): Session {
    let session = new Session();
    let cookie = this.cookieService.getCookie();
    let loggedIn = cookie['login'];
    if (loggedIn)
      session.activeSession = true;
    return session;
  }
}
