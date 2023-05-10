import { TestBed } from '@angular/core/testing';

import { GetBlogService } from './get-blog.service';

describe('GetBlogService', () => {
  let service: GetBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
