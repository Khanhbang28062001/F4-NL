import { Component } from '@angular/core';
import { UserIDService } from '../Service/user-id.service';
import { UserService } from '../Service/user.service';
import { UserModule } from '../model/user.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private userIdService: UserIDService,
    private userService: UserService
  ) { }

  userId: Number = 0;
  User: UserModule = new UserModule(0, "", "", "", 0,"");

  ngOnInit(): void {
    // this.userId =this.userIdService.getCurrentUserId();
    this.userIdService.currentUserId.subscribe(userId => this.userId = userId);
    console.log(this.userId);
    this.userService.getUserById(this.userId).subscribe((data) => {
      this.User = data;
      console.log("user data:" + data.username);
    })
    console.log("Lay du lieu user roi ne!!!!!!" + this.User);

  }
}
