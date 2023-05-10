import { BlogComponent } from 'src/app/blog/blog.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogModelModule } from '../model/blog-model/blog-model.module';


@Injectable({
  providedIn: 'root'

})
export class GetBlogService {
  getBlogById(blogId: number) {
    throw new Error('Method not implemented.');
  }
  private REST_API_SERVER = 'http://127.0.0.1:8080/api/blog/';
  // private idBlog = ;
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient,
    ) { }

  public getSubmitBlog( idBlog:number ): Observable< BlogModelModule > {
    const url = `${this.REST_API_SERVER}${idBlog}`;
    return this.httpClient.get<BlogModelModule> (url,this.httpOptions);
    
  }


  
  public getAllSubmitBlog(): Observable< BlogModelModule[] > {
    const url = `${this.REST_API_SERVER}`;
    return this.httpClient.get<BlogModelModule[]> (url,this.httpOptions);
    
  }
  
}
