import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(postData:{email:string, pass:string}){
    this.http.get('http://localhost:3000/').
    subscribe(response=>{
      console.log(response);
    })
    console.log(postData)
  }

}
