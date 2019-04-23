import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Blog';
  isLogged: boolean = false
  constructor(private loginService: LoginService) {

  }
  ngOnInit() {
    this.isLogged = this.loginService.getLogged()
    if (this.isLogged) {
      this
    }
  }
}
