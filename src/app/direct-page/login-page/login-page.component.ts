import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  ngOnInit(): void {
    console.log('LoginPageComponent OnInit');
  }
  
}
