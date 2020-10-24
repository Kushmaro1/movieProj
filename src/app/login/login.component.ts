import { Component, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName="admin";
  password="admin";
  valid=false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  secured=true;
  submited(data){
    if (data.pass==this.password&&data.user==this.userName) {
      console.log("works")
      this.router.navigateByUrl('secured')
      }
      else {
        this.valid=true
      }
  

  }
  closeAlert(){
    this.valid=false
  }

}
