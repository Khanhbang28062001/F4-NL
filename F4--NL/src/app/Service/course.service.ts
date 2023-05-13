import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../common/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://127.0.0.1:8080/api/course/';
  private currentCourseSubject: BehaviorSubject<Course | null> = new BehaviorSubject<Course | null>(null);
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) { }

  getCourse(courseId: number): Observable<Course> {
    const courseUrl = `${this.baseUrl}${courseId}`;
    return this.httpClient.get<Course>(courseUrl);
  }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl);
  }

  searchCourses(keyword: string): Observable<Course[]> {
    const searchUrl = `${this.baseUrl}search/${keyword}`;
    return this.httpClient.get<Course[]>(searchUrl);
  }

  getCurrentCourse(): Observable<Course | null> {
    return this.currentCourseSubject.asObservable();
  }

  setCurrentCourse(course: Course): void {
    this.currentCourseSubject.next(course);
  }

  public addCourses(payload: any): Observable< any > {
    const url = `${this.baseUrl}`;
    return this.httpClient.post<any> (url,  payload ,this.httpOptions);
  }
}
