package ctu.vn.backend.Service;

import ctu.vn.backend.DAO.BlogRepository;
import ctu.vn.backend.entity.Blog;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlogService {
    private final BlogRepository blogRepository;

    @Autowired
    public BlogService(BlogRepository blogRepository) {

        this.blogRepository = blogRepository;

    }

    public List<Blog> getBlog() {
        return blogRepository.findAll();
    }

    public Blog getBlogById(int id) {
        Optional<Blog> blog = blogRepository.findById(id);
        if (blog.isPresent()) {
            return blog.get();
        } else {
            // Throw exception or return null depending on your requirements
            throw new RuntimeException("Blog not found with id " + id);
        }
    }

    // public Users deleteUserById(int id) {
    // Optional<Users> user = usersRepository.findById(id);
    // if (user.isPresent()) {
    // return user.get();
    // } else {
    // // Throw exception or return null depending on your requirements
    // throw new RuntimeException("User not found with id " + id);
    // }
    // }
    public Optional<Blog> findById(Integer blogId) {
        return blogRepository.findById(blogId);
    }

    public void save(Blog blog) {
        System.out.println(blog);
        blogRepository.save(blog);
    }

    public void delete(Blog blog) {
        blogRepository.delete(blog);
    }

}