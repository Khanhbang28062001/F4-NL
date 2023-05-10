import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBlogService } from '../Service/get-blog.service';
import { UserIDService } from '../Service/user-id.service';
import { UserService } from '../Service/user.service';
import { UserModule } from '../model/user.module';

@Component({
  selector: 'app-keep-study',
  templateUrl: './keep-study.component.html',
  styleUrls: ['./keep-study.component.css']
})
export class KeepStudyComponent {
  public isAddNote: boolean = false;
  public name = "VerticalModal_closing__qkFM7";
  public TimeGhiChu = "TimeNote";
  public contentNote="";
  public NoiDungGhiChu = "Nội dung ghi chú...";
  public ButtonDisabled = "Button_disabled__1cmvp";
  public note ="";



  openNote(): void{
    this.name = "";
    this.isAddNote = !this.isAddNote;

  }
  closeNote(): void{
    this.name = "VerticalModal_closing__qkFM7";

  }

  addContent(): void {
  
      this.NoiDungGhiChu ="";
      this.unBlockAddNote( this.ButtonDisabled);
      
  }
  addNoteInTime(): void {
    this.isAddNote = !this.isAddNote;
    

  }
  closeAddNote(): void {
    this.isAddNote = !this.isAddNote;
    if (this.isAddNote === false){
      this.NoiDungGhiChu ="Nội dung ghi chú..."
    }
  
  }
  unBlockAddNote(ButtonDisabled:any){
    if (this.contentNote!=""){
      this.ButtonDisabled ="";
    }
  }
  addNote(): void{
      
    //  if (this.contentNote!="")
    // this.unBlockAddNote( this.ButtonDisabled);
     console.log(this.contentNote);
    // else{
      
    //   return;
    // }
    
    
  }

  constructor(
    private getBlogService: GetBlogService,
    private route: ActivatedRoute,
    private router: Router,
    private userIdService: UserIDService,
    private userService: UserService
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

}
