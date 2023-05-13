package ctu.vn.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ctu.vn.backend.Service.BlogService;
import ctu.vn.backend.entity.Blog;
import ctu.vn.backend.entity.Message;

@RestController
@RequestMapping(path = "api/blog")
public class BlogController {

    @Autowired
    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @CrossOrigin(origins = "http://localhost:4200") //
    @GetMapping("/")
    public List<Blog> getBlog() {
        return blogService.getBlog();
    }

    @CrossOrigin(origins = "http://localhost:4200") //
    @PostMapping("/")
    public ResponseEntity<Message> addBlog (@RequestBody Blog blog) {
        blogService.save(blog);
        return ResponseEntity.ok(new Message("Them blog " + blog.getId() + " xong roi ne!!!!!"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Blog>> getUserById(@PathVariable(value = "id") Integer blogId) {
        System.out.println("!!!!!!!!!!!!!!!!!USER ID NE: " + blogId);
        Optional<Blog> blog = blogService.findById(blogId);
        return ResponseEntity.ok().body(blog);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/{id}")
    public ResponseEntity<Message> deleteBlog(@PathVariable(value = "id") Integer blogId) {
        Optional<Blog> blog = blogService.findById(blogId);
        blogService.delete(blog.get());
        return ResponseEntity.ok(new Message("Xoa blog " + blogId + " xong roi ne!!!!!"));
    }

}
