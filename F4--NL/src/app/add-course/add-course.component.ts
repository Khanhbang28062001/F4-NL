import { CommonService } from './../Service/common.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBlogService } from '../Service/get-blog.service';
import { UserIDService } from '../Service/user-id.service';
import { UserService } from '../Service/user.service';
import { UserModule } from '../model/user.module';
import { CourseService } from '../Service/course.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpServerService } from '../Service/http-server.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  public title = "";
  public description = "";
  public imageUrl = "";
  public subscribers = 0;
  public user_id = 0;
  public errorMessage: string | undefined;

  public formData = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    subscribers: [0],
    user_id : [2]
  });
  common: any;
 
  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private userIdService: UserIDService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private httpServerService: HttpServerService,
    private CommonService: CommonService,
  ) {
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

  public addCourse(): void {

    this.CommonService.sendData(this.formData.value);
    this.courseService.addCourses(this.formData.value).subscribe((data) => {
      console.log('postSubmitBlog', data)
    }
    );
    this.httpServerService.getSubmitBlog();

  }
}
