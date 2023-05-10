import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [CommonModule],
  // providers: [{ provide: Number, useValue: 0 }]
})
export class UserModule {

  constructor(
    public userid: Number,
    public username: String,
    public password: String,
    public email: String,
    public idrole: Number,
    public imguser:String,
  ) {
  }
  
}
export var blog : UserModule[]=[];
const data: Partial<UserModule> = { /*...*/ };
const userName = data['username'] as string | null; 