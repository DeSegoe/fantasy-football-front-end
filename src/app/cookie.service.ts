import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  constructor() { }

  getCookie(): any {
    let cookieObject = {};
    let cookie = document.cookie;
    if (cookie) {
      let contents = cookie.split(";");
      if (contents) {
        for (let i=0;i<contents.length;i++) {
          let item = contents[i];
          if (item) {
            let cookieContent = item.split("=");
            if (cookieContent && cookieContent.length > 0) {
              cookieObject[cookieContent[0]] = cookieContent[1];
            }
          }
        }
      }
    }

    return cookieObject;
  }

  public setCookie(cookieName: string, cookieValue: string, expiryTime: Date) {
    var expires = "expires=" + expiryTime.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }
}
