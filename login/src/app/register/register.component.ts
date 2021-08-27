import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private http: HttpClient) { }
showPassword : boolean=false
showPassword1 : boolean=false
isValid =false
  ngOnInit(): void {
  }

  onSubmit(postData:{name: string, email: string, pass: string, pass1:string}){
    
    this.http.post('http://localhost:3000/',postData).
    subscribe(responseData=>{
      this.isValid=responseData as boolean
      console.log(responseData)
    })
    
  }

  showPass(){
    this.showPassword=!this.showPassword
  }

  showPass1(){
    this.showPassword1=!this.showPassword1
  }
}
