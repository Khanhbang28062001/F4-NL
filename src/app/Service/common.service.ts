
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private content = '';

  


  constructor( ) { }

  public getData(): any{
    return this.content;
  }
  public setData(content:any): void{
    this.content = content;
  }
  public sendData(content:any): void{
    console.log('Da gui len service:', content);
  }

  

}
