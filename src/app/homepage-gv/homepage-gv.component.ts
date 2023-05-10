import { Component } from '@angular/core';
import { UserIDService } from '../Service/user-id.service';
import { UserService } from '../Service/user.service';
import { UserModule } from '../model/user.module';

@Component({
  selector: 'app-homepage-gv',
  templateUrl: './homepage-gv.component.html',
  styleUrls: ['./homepage-gv.component.css']
})
export class HomepageGvComponent {
  isDropDownOpen: boolean = false;
  isDropDownOpenNotification: boolean = false;
  isDropDownOpenBlog: boolean = false;
  public TenEmail = "bang";
  public Email = "bang-Email";
   
  openNavProfile(): void{
    this.isDropDownOpen = !this.isDropDownOpen;
  }
  openNavNotification(): void{
    this.isDropDownOpenNotification= !this.isDropDownOpenNotification;
  }
  openNavBlog(): void{
    this.isDropDownOpenBlog= !this.isDropDownOpenBlog;
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
      console.log("user gv data:" + data.username);
    })
    console.log("Lay du lieu user gv roi ne!!!!!!" + this.User);

  }


}
