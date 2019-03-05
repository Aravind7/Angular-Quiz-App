import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : LoginserviceService, private routes: Router) { }
  msg;
  ngOnInit() {
  }

  check(uname: string, p : string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.routes.navigate(['/quiz']);
    }
    else{
this.msg ='Invalid username or password';
    }
  }

}
