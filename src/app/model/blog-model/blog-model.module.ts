import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BlogModelModule {
  public id: Number;
  public user_id: Number;
  public descriptionBlog: String;
  public imageurlBlog: String;
  public contentBlog: String;
  public favoriteBlog: Number;
  public commentBlog: Number;
  public timeCreateBlog: Date;
  constructor(id: Number, 
    user_id: Number, 
    descriptionBlog: String, 
    imageurlBlog: String,
    contentBlog: String,
    favoriteBlog: Number, 
    commentBlog: Number, 
    timeCreateBlog: Date) {
      this.id=id;
      this.user_id=user_id;
      this.descriptionBlog=descriptionBlog;
      this.imageurlBlog=imageurlBlog;
      this.contentBlog=contentBlog;
      this.favoriteBlog=favoriteBlog;
      this.commentBlog=commentBlog;
      this.timeCreateBlog=timeCreateBlog;

  }

}
export var blog : BlogModelModule[]=[];