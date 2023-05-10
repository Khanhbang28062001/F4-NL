import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetBlogService } from '../Service/get-blog.service';
import { BlogModelModule } from '../model/blog-model/blog-model.module';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: BlogModelModule = new BlogModelModule(1, 2, "", "", "", 2, 3, new Date);
  public description = this.blog.descriptionBlog;
  blogId?: any;
  constructor(private getBlogService: GetBlogService, private route: ActivatedRoute) {
    this.blogId = this.route.snapshot.paramMap.get('id');
    console.log("id blog ne",this.blog.id);
    this.getBlogService.getSubmitBlog(this.blogId).subscribe((data) => {
      this.blog = data;
    })
  }
  ngOnInit(): void {
    this.blogId = this.route.snapshot.paramMap.get('id');
    console.log("id blog ne",this.blog.id);
    this.getBlogService.getSubmitBlog(this.blogId).subscribe((data) => {
      this.blog = data;
    })
  }

  isDropDownOpen: boolean = false;
  isDropDownOpenNotification: boolean = false;
  isDropDownOpenBlog: boolean = false;
  public TenEmail = "bang";
  public Email = "bang-Email";


  openNavProfile(): void {
    this.isDropDownOpen = !this.isDropDownOpen;
    this.isDropDownOpenNotification = false;
    this.isDropDownOpenBlog = false;
  }
  openNavNotification(): void {
    this.isDropDownOpenNotification = !this.isDropDownOpenNotification;
    this.isDropDownOpen = false;
    this.isDropDownOpenBlog = false;
  }
  openNavBlog(): void {
    this.isDropDownOpenBlog = !this.isDropDownOpenBlog;
    this.isDropDownOpen = false;
    this.isDropDownOpenNotification = false;
  }

}