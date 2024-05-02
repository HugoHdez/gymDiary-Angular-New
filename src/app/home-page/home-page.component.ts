import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  username: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserName();
  }

  async getUserName() {
    const userData = await this.userService.getDoc();
    if (userData){
      this.username = userData.username;
    }
  }
}
