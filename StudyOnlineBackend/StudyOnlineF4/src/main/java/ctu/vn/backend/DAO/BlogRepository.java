package ctu.vn.backend.DAO;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ctu.vn.backend.entity.Blog;

@Repository

@Qualifier("BlogRepository")
public interface BlogRepository extends JpaRepository<Blog, Integer> {

    public default Blog getBlogById(int id) {
        Optional<Blog> blog = findById(id);
        if (blog.isPresent()) {
            return blog.get();
        } else {
            throw new RuntimeException("Blog not found with id " + id);
        }
    }

}

