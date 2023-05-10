import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-user',
  templateUrl: './homepage-user.component.html',
  styleUrls: ['./homepage-user.component.css']
})
export class HomepageUserComponent {

  isDropDownOpen: boolean = false;
  isDropDownOpenNotification: boolean = false;
  isDropDownOpenBlog: boolean = false;
  public TenEmail = "bang";
  public Email = "bang-Email";

  constructor(private router:Router){}
   
  public Login(){
    this.router.navigate(['/login-form']);
  }
  public signup(){
    this.router.navigate(['/signup-form']);
  }
  openNavProfile(): void{
    this.isDropDownOpen = !this.isDropDownOpen;
    this.isDropDownOpenNotification= false;
    this.isDropDownOpenBlog= false;
  }
  openNavNotification(): void{
    this.isDropDownOpenNotification= !this.isDropDownOpenNotification;
    this.isDropDownOpen = false;
    this.isDropDownOpenBlog= false;
  }
  openNavBlog(): void{
    this.isDropDownOpenBlog= !this.isDropDownOpenBlog;
    this.isDropDownOpen = false;
    this.isDropDownOpenNotification= false;
  }

}