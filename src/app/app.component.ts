import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { BlogComponent } from './blog/blog.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { CourseComponent } from './course/course.component';
import { HomePageStComponent } from './home-page-st/home-page-st.component';
import { KeepStudyComponent } from './keep-study/keep-study.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PostsDraftsComponent } from './posts-drafts/posts-drafts.component';
import { PostsPublicComponent } from './posts-public/posts-public.component';
import { ProfileComponent } from './profile/profile.component';
import { SecurityComponent } from './security/security.component';
import { SettingAccountComponent } from './setting-account/setting-account.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { StudyRouteBeComponent } from './study-route-be/study-route-be.component';
import { StudyRouteFeComponent } from './study-route-fe/study-route-fe.component';
import { StudyRouteComponent } from './study-route/study-route.component';
import { WriteBlogComponent } from './write-blog/write-blog.component';
import { HomepageGvComponent } from './homepage-gv/homepage-gv.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'add-course', component: AddCourseComponent},
  { path: 'bookmark', component: BookmarkComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'course', component: CourseComponent},
  { path: 'keep-study', component: KeepStudyComponent},
  { path: 'login-form', component: LoginFormComponent},
  { path: 'posts-drafts', component: PostsDraftsComponent},
  { path: 'posts-public', component: PostsPublicComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'security', component: SecurityComponent},
  { path: 'setting-account', component: SettingAccountComponent},
  { path: 'signup-form', component: SignupFormComponent},
  { path: 'study-route', component: StudyRouteComponent},
  { path: 'study-route-be', component: StudyRouteBeComponent},
  { path: 'study-route-fe', component: StudyRouteFeComponent},
  { path: 'write-blog', component: WriteBlogComponent},
  { path: 'home-page-st', component:HomePageStComponent },
  { path: 'homepage-gv', component:HomepageGvComponent },
  { path: 'admin', component:AdminComponent}
  

];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'F4--NL';
  isDropDownOpen: boolean = false;
  isDropDownOpenNotification: boolean = false;
  isDropDownOpenBlog: boolean = false;
  public TenEmail = "bang";
  public Email = "bang-Email";

  constructor(){}
   
  openNavProfile(): void{
    this.isDropDownOpen = !this.isDropDownOpen;
  }
  openNavNotification(): void{
    this.isDropDownOpenNotification= !this.isDropDownOpenNotification;
  }
  openNavBlog(): void{
    this.isDropDownOpenBlog= !this.isDropDownOpenBlog;
  }

}

