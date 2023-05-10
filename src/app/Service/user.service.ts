import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModule } from '../model/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient,) { }

  private REST_API_SERVER = 'http://127.0.0.1:8080/api/user/';
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public AddUser(payload: any): Observable< any > {
    const url = `${this.REST_API_SERVER}`;
    return this.httpClient.post<any> (url,  payload ,this.httpOptions);
  }
  public CheckLogin (payload: any ): Observable< UserModule  > {
    const url = `${this.REST_API_SERVER}login`;
    return this.httpClient.post<UserModule> (url,payload,this.httpOptions);
  }
  public getUserById(idUser:Number ): Observable< UserModule  > {
    const url = `${this.REST_API_SERVER}${idUser}`;
    return this.httpClient.get<UserModule> (url,this.httpOptions);
  }

}



