import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CourseModule } from '../model/course.module';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private REST_API_SERVER = 'http://127.0.0.1:8080/api/course/';
  private currentCourseSubject: BehaviorSubject<CourseModule | null> = new BehaviorSubject<CourseModule | null>(null);
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) { }

  getCourse(courseId: number): Observable<CourseModule> {
    const courseUrl = `${this.REST_API_SERVER}${courseId}`;
    return this.httpClient.get<CourseModule>(courseUrl);
  }

  getCourses(): Observable<CourseModule[]> {
    return this.httpClient.get<CourseModule[]>(this.REST_API_SERVER);
  }

  searchCourses(keyword: string): Observable<CourseModule[]> {
    const searchUrl = `${this.REST_API_SERVER}search/${keyword}`;
    return this.httpClient.get<CourseModule[]>(searchUrl);
  }

  getCurrentCourse(): Observable<CourseModule | null> {
    return this.currentCourseSubject.asObservable();
  }

  setCurrentCourse(course: CourseModule): void {
    this.currentCourseSubject.next(course);
  }

  public addCourses(payload: any ): Observable< any > {
    const url = `${this.REST_API_SERVER}`;
    return this.httpClient.post<any> (url,  payload ,this.httpOptions);
  }

}
