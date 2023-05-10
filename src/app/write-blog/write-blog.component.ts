import { HttpServerService } from './../Service/http-server.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from './../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBlogService } from '../Service/get-blog.service';
import { UserIDService } from '../Service/user-id.service';
import { UserService } from '../Service/user.service';
import { UserModule } from '../model/user.module';


@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent implements OnInit {
  isDropDownOpen: boolean = false;
  isDropDownOpenNotification: boolean = false;
  isDropDownOpenBlog: boolean = false;
  public TenEmail = "bang";
  public Email = "bang-Email";
  //
  public user_id = 2;
  public description = "";
  public content = "";

  //
  public formData = this.formBuilder.group({
    user_id: [2],
    description: ['', Validators.required],
    content: ['', Validators.required],
    // (so truong du lieu trong ban)
  });
  userId: Number = 0;
  User: UserModule = new UserModule(0, "", "", "", 0);

  constructor(
    private common: CommonService,
    private formBuilder: FormBuilder,
    private httpServerService: HttpServerService,
    private getBlogService: GetBlogService,
    private route: ActivatedRoute,
    private router: Router,
    private userIdService: UserIDService,
    private userService: UserService
  ) { }
  public submitBlog(): void {

    this.common.sendData(this.formData.value);
    this.httpServerService.postSubmitBlog(this.formData.value).subscribe((data) => {
      console.log('postSubmitBlog', data)
    }
    );
    this.formData.value.description = "";
    this.content = '';
    this.httpServerService.getSubmitBlog();

  }
  public ngOnInit(): void {
    const payload = this.formData.value;

    this.httpServerService.getSubmitBlog().subscribe((data) => {
      // console.log('getSubmitBlog', data)
      console.log("Lay du lieu user blog roi ne!!!!!! " + this.User.idrole);
    })
    this.userIdService.currentUserId.subscribe(userId => this.userId = userId);
    this.userService.getUserById(this.userId).subscribe((data) => {
      this.User = data;
      console.log("Lay du lieu user blog roi ne!!!!!! " + this.User.idrole);
    })
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

}
