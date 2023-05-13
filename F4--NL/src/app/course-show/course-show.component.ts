import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../Service/course.service';
import { CourseModule } from '../model/course.module';

@Component({
  selector: 'app-course-show',
  templateUrl: './course-show.component.html',
  styleUrls: ['./course-show.component.css']
})
export class CourseShowComponent implements OnInit {
  courses: CourseModule[] = [];
  

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleCourseDetails();
    });
  }

  handleCourseDetails() {
    const theCourseId: number = +this.route.snapshot.paramMap.get('id')!;

    this.courseService.getCourses().subscribe(
      data => {
        
        this.courses=data;
        
      }
    )
  }
}
