package ctu.vn.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.relational.core.mapping.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "role_id")
@Getter
@Setter
public class RoleId {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private int roleId;

    @Column(nullable = false, name = "role_name")
    private String RoleName;

    // @OneToMany(cascade = CascadeType.ALL, mappedBy = "roleId")
    // private Set<User> User;

}
