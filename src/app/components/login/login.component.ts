import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResult } from 'src/app/models/AuthResult';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! :FormGroup;
  authResult! :AuthResult;

  constructor(
    private authService :AuthService,
    private formBuilder: FormBuilder,
    private route:Router
    ) { 
      localStorage.clear();
    }

  Login = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }

  authenticate(){
    if(this.Login.valid) {
      this.authService.authenticate(
        this.Login.value
      ).subscribe({
        next: (res) => {
          this.authResult = res;
          localStorage.setItem('token', this.authResult.tokenData.jwtToken);
          this.route.navigate(['']);
        },
        error: (err) => {
          alert(err.message);
        }
      })
    }
  }

}
