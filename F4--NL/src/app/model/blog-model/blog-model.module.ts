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
  public description: String;
  public image_url: String;
  public content: String;
  public total_favorite: Number;
  public total_comment: Number;
  public date_created: Date;
  constructor(id: Number, 
    user_id: Number, 
    description: String, 
    image_url: String,
    content: String,
    total_favorite: Number,
    total_comment: Number,
    date_created: Date) {
      this.id=id;
      this.user_id=user_id;
      this.description=description;
      this.image_url=image_url;
      this.content=content;
      this.total_favorite=total_favorite;
      this.total_comment=total_comment;
      this.date_created=date_created;

  }

}
export var blog : BlogModelModule[]=[];