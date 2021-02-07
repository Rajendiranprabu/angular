import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: any;
  constructor(private http: HttpClient) {

    this.token = window.sessionStorage.getItem('token');
  }
  isUserLoggedIn() {
    if (this.token) {
      return true;
    }
    return false;
  }
  loginUser(formData: any): Observable<any> {
    console.log(formData);
    return this.http.post<any>("http://localhost:5000/login", formData).
      pipe(tap(res => this.token = res))
      .pipe(tap(res => window.sessionStorage.setItem('token', this.token)))


  }


}

