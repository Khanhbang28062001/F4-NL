import { blog, BlogModelModule } from './../model/blog-model/blog-model.module';
import { Component, EventEmitter, Output } from '@angular/core';
// import { BlogModelModule } from '../model/blog-model/blog-model.module';
import { GetBlogService } from '../Service/get-blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserIDService } from '../Service/user-id.service';
import { UserService } from '../Service/user.service';
import { UserModule } from '../model/user.module';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  isDropDownOpen: boolean = false;
  isDropDownOpenNotification: boolean = false;
  isDropDownOpenBlog: boolean = false;
  public TenEmail = "bang";
  public Email = "bang-Email";
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

  blogs: BlogModelModule[] = [];
  public blogId!: Number;
  constructor(
    private getBlogService: GetBlogService,
    private route: ActivatedRoute,
    private router: Router,
    private userIdService: UserIDService,
    private userService: UserService
  ) { }

  userId: Number = 0;
  User: UserModule = new UserModule(0, "", "", "", 0);

  public ngOnInit(): void {
    this.getBlogService.getAllSubmitBlog().subscribe((data) => {
      this.blogs = data;
      console.log("blog ne", this.blogs)
    })
    this.userIdService.currentUserId.subscribe(userId => this.userId = userId);
    this.userService.getUserById(this.userId).subscribe((data) => {
      this.User = data;
      console.log("Lay du lieu role id route roi ne!!!!!! " + this.User.idrole);
    })
  }





}