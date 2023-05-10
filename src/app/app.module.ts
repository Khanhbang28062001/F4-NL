import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { CourseComponent } from './course/course.component';
import { KeepStudyComponent } from './keep-study/keep-study.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PostsDraftsComponent } from './posts-drafts/posts-drafts.component';
import { PostsPublicComponent } from './posts-public/posts-public.component';
import { ProfileComponent } from './profile/profile.component';
import { SecurityComponent } from './security/security.component';
import { SettingAccountComponent } from './setting-account/setting-account.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { StudyRouteComponent } from './study-route/study-route.component';
import { StudyRouteBeComponent } from './study-route-be/study-route-be.component';
import { StudyRouteFeComponent } from './study-route-fe/study-route-fe.component';
import { WriteBlogComponent } from './write-blog/write-blog.component';
import { HomePageStComponent } from './home-page-st/home-page-st.component';
import { HomepageGvComponent } from './homepage-gv/homepage-gv.component';
import { HomepageUserComponent } from './homepage-user/homepage-user.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { GetBlogService } from './Service/get-blog.service';
import { UserModule } from './model/user.module';
import { StudyComponent } from './study/study.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    AdminComponent,
    BlogComponent,
    BookmarkComponent,
    CourseComponent,
    KeepStudyComponent,
    LoginFormComponent,
    PostsDraftsComponent,
    PostsPublicComponent,
    ProfileComponent,
    SecurityComponent,
    SettingAccountComponent,
    SignupFormComponent,
    StudyRouteComponent,
    StudyRouteBeComponent,
    StudyRouteFeComponent,
    WriteBlogComponent,
    HomePageStComponent,
    HomepageGvComponent,
    HomepageUserComponent,
    BlogDetailComponent,
    StudyComponent,

    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  
    

    
  ],
  providers: [GetBlogService],

  bootstrap: [AppComponent]
})
export class AppModule { }
