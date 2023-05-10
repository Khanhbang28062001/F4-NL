import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBlogService } from '../Service/get-blog.service';
import { BlogModelModule } from '../model/blog-model/blog-model.module';
import { UserIDService } from '../Service/user-id.service';
import { UserService } from '../Service/user.service';
import { UserModule } from '../model/user.module';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: BlogModelModule = new BlogModelModule(1, 2, "", "", "", 2, 3, new Date);
  public description = this.blog.descriptionBlog;
  blogId?: any;
  constructor(private getBlogService: GetBlogService,
    private router: Router,
    private route: ActivatedRoute,
    private userIdService: UserIDService,
    private userService: UserService) {
    this.blogId = this.route.snapshot.paramMap.get('id');
    console.log("id blog ne",this.blog.id);
    this.getBlogService.getSubmitBlog(this.blogId).subscribe((data) => {
      this.blog = data;
    })
  }
  userId: Number = 0;
  User: UserModule = new UserModule(0, "", "", "", 0,"");

  ngOnInit(): void {
    this.blogId = this.route.snapshot.paramMap.get('id');
    console.log("id blog ne",this.blog.id);
    this.getBlogService.getSubmitBlog(this.blogId).subscribe((data) => {
      this.blog = data;
    })
    this.userIdService.currentUserId.subscribe(userId => this.userId = userId);
    this.userService.getUserById(this.userId).subscribe((data) => {
      this.User = data;
      console.log("Lay du lieu role id route roi ne!!!!!! " + this.User.idrole);
    })
  }
  public Login() {
    this.router.navigate(['/login-form']);
  }
  public signup() {
    this.router.navigate(['/signup-form']);
  }

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

}