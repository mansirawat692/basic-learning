import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { ɵallowSanitizationBypassAndThrow } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isValid:boolean = false
  errorMsg = '';
  constructor(private http:HttpClient, private route :Router) { }

  ngOnInit(): void {
  }
  showPassword: boolean = false;


  onSubmit(postData:{email:string, pass:string}){
    this.http.post('http://localhost:3000/login',postData).
    subscribe(res=>{
      this.isValid=res as boolean
      if(res)
      {
        // route/navigate dusre component pe
       this.errorMsg = ''
        this.route.navigate(['/dashboard'])
      }
      else{
      
        this.errorMsg = "Invalid Credentials"
      }
      console.log("response"+this.isValid)
    })
  }

  showPass(){
    this.showPassword=!this.showPassword
    console.log(this.showPassword)
  }
  
}
