import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name == "" || user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined || user.birth == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validatebusiness(businessuser) {
    if(businessuser.name == "" || businessuser.name == undefined || businessuser.email == undefined || businessuser.username == undefined || businessuser.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
}
