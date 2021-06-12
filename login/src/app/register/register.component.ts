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

  ngOnInit(): void {
  }

  onSubmit(postData:{name: string, email: string, pass: string, pass1:string}){
    
    this.http.post('http://localhost:3000/',postData).
    subscribe(responseData=>{
      console.log(responseData);
    })
    console.log(postData)
    
  }

}
