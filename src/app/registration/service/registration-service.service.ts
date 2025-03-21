import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  localApiUrl = "http://localhost:5000/api/login/";
  //const devApiUrl = "https://pst-login-service.el.r.appspot.com/api/login/otp/100010001000";

  constructor(private http: HttpClient) { }


  public getOTPByAadhaarNumber(aadhaarNumber: number) {
    return this.http.post(this.localApiUrl + `otp/${aadhaarNumber}`, "");
  }

  getPasswordByOtp(otp: number, aadhaarNumber: number) {
    return this.http.post(this.localApiUrl + `password/${aadhaarNumber}/${otp}`, " ");
  }
}
