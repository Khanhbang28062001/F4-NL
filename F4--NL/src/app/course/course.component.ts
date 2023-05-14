import { CommonService } from './../Service/common.service';
import { CourseService } from './../Service/course.service';
import { Course } from './../model/course.module';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBlogService } from '../Service/get-blog.service';
import { UserIDService } from '../Service/user-id.service';
import { UserService } from '../Service/user.service';
import { UserModule } from '../model/user.module';
import { CourseModule } from '../model/course.module';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  isDropDownOpen: boolean = false;
  isDropDownOpenNotification: boolean = false;
  isDropDownOpenBlog: boolean = false;
  public TenEmail = "bang";
  public Email = "bang-Email";
   
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
  public Login() {
    this.router.navigate(['/login-form']);
  }
  public signup() {
    this.router.navigate(['/signup-form']);
  }
  course: CourseModule = new CourseModule(1,"","","",0,new Date,0);
  public description = this.course.description;
  CourseId?: any;
  constructor(
    private getBlogService: GetBlogService,
    private route: ActivatedRoute,
    private router: Router,
    private userIdService: UserIDService,
    private userService: UserService,
    private courseService:CourseService
  ) {
    this.CourseId = this.route.snapshot.paramMap.get('id');
    console.log("id course ne",this.course.id);
    this.courseService.getCourse(this.CourseId).subscribe((data) => {
      this.course = data;
      console.log("data course",this.course)
    })
  }
  userId: Number = 0;
  User: UserModule = new UserModule(0, "", "", "", 0,"");
  
  public ngOnInit(): void {
    this.userIdService.currentUserId.subscribe(userId => this.userId = userId);
    this.userService.getUserById(this.userId).subscribe((data) => {
      this.User = data;
      console.log("Lay du lieu role id route roi ne!!!!!! " + this.User.idrole);
    })

  }
}
