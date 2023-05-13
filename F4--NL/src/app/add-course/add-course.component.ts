import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBlogService } from '../Service/get-blog.service';
import { UserIDService } from '../Service/user-id.service';
import { UserService } from '../Service/user.service';
import { UserModule } from '../model/user.module';
import { CourseService } from '../Service/course.service';
import { FormBuilder, Validators } from '@angular/forms';

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
    title: ['', [Validators.required, Validators.maxLength(30)]],
    description: ['', [Validators.required, Validators.email]],
    imageUrl: ['', [Validators.required, Validators.minLength(6)]],
    subscribers: [0],
    user_id : [2]
  });
 
  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private userIdService: UserIDService,
    private userService: UserService,
    private formBuilder: FormBuilder
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

  addCourse() {
    this.courseService.addCourses(this.formData).subscribe((data) => {
      console.log('UserService', data);
    });
  }
}
