import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserIDService } from '../Service/user-id.service';
import { UserService } from '../Service/user.service';
import { UserModule } from '../model/user.module';

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


  public Login() {
    this.router.navigate(['/login-form']);
  }
  public signup() {
    this.router.navigate(['/signup-form']);
  }
  openNavProfile(): void {
    this.isDropDownOpen = !this.isDropDownOpen;
    this.isDropDownOpenNotification = false;
    this.isDropDownOpenBlog = false;
  }
  openNavNotification(): void {
    this.isDropDownOpenNotification = !this.isDropDownOpenNotification;
    this.isDropDownOpen = false;
    this.isDropDownOpenBlog = false;
  }
  openNavBlog(): void {
    this.isDropDownOpenBlog = !this.isDropDownOpenBlog;
    this.isDropDownOpen = false;
    this.isDropDownOpenNotification = false;
  }
  constructor(private userIdService: UserIDService,
    private userService: UserService,
    private router: Router

  ) { }

  userId: Number = 0;
  User: UserModule = new UserModule(0, "", "", "", 0,"");
  ngOnInit(): void {
    // this.userId =this.userIdService.getCurrentUserId();
    this.userIdService.currentUserId.subscribe(userId => this.userId = userId);
    console.log(this.userId);
    this.userService.getUserById(this.userId).subscribe((data) => {
      this.User = data;
      console.log("user gv data:" + data.username);
    })
    console.log("Lay du lieu user gv roi ne!!!!!!" + this.User);

  }

}