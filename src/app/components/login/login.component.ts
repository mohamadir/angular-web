import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string
  password: string

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.getLogged()) {
      this.router.navigate([''])
    }
  }

  onLogin() {
    this.loginService.login({ email: this.email, password: this.password }).subscribe(data => {
      this.loginService.setLogged(true)
      this.loginService.setUser(data.user)
      console.log(this.loginService.getUser())
      this.router.navigate([''])
    }, error => console.log('oops', error)
    );

  }

}
