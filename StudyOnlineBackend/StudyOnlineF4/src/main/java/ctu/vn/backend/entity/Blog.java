package ctu.vn.backend.entity;

import java.sql.Time;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "blog")
@Getter
@Setter
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "user_id")
    private int user_id;

    @Column(nullable = false, name = "description")
    private String descriptionBlog;

    @Column(nullable = true, name = "image_url")
    private String imageurlBlog;

    @Column(nullable = false, name = "content")
    private String contentBlog;

    @Column(nullable = true, name = "total_favorite")
    private int favoriteBlog;

    @Column(nullable = true, name = "total_comment")
    private int commentBlog;

    @Column(nullable = true, name = "date_created")
    private Time timeCreateBlog;

    public Blog() {

    }

}
