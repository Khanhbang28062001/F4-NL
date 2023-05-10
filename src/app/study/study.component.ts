import { Component } from '@angular/core';
import { UserIDService } from '../Service/user-id.service';
import { UserService } from '../Service/user.service';
import { UserModule } from '../model/user.module';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent {
  isDropDownOpen: boolean = false;
  isDropDownOpenNotification: boolean = false;
  isDropDownOpenBlog: boolean = false;
  public TenEmail = "bang";
  public Email = "bang-Email";
  router: any;
  UserIDService: any;



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
    private userService: UserService
  ) { }

  userId: Number = 0;
  User: UserModule = new UserModule(0, "", "", "", 0);

  ngOnInit(): void {
    // this.userId =this.userIdService.getCurrentUserId();
    this.userIdService.currentUserId.subscribe(userId => this.userId = userId);
    console.log(this.userId);
    this.userService.getUserById(this.userId).subscribe((data) => {
      this.User = data;
      console.log("user data:" + data.username);
    })
    console.log("Lay du lieu user roi ne!!!!!!" + this.User.idrole);

  }
}
