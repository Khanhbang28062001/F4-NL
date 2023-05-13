package ctu.vn.backend.entity;

import javax.persistence.*;

import org.springframework.data.relational.core.mapping.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "user")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int userid;

    @Column(nullable = false, name = "username")
    private String username;

    @Column(nullable = false, name = "password")
    private String password;

    @Column(nullable = false, name = "email")
    private String email;

    @Column(nullable = false, name ="role_id")
    private int idrole;
    
    @Column(nullable = false, name = "img_user")
    private String imguser;

    // @ManyToOne(fetch=FetchType.LAZY)
    // @JoinColumn(name = "role_id" ,insertable = false, updatable = false)
    // private RoleId roleId;

    // public Object getPassword() {
    //     return null;
    // }

}
