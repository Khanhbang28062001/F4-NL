import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CourseModule { 

  constructor(
    public id: Number,
    public title: String,
    public description: String,
    public imageUrl: String,
    public subscribers: Number,
    public dateCreated: Date,
    public user_id: Number,
  ) {
  }
  
}
export var Course : CourseModule[]=[];
const data: Partial<CourseModule> = { /*...*/ };
// const userName = data['username'] as string | null; 

