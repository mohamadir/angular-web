import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  isLogged: boolean


  constructor(private loginService: LoginService) { }

  ngOnInit() {


    console.log('ContentComponent', this.isLogged)
  }

}
