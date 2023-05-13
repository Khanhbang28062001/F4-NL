package ctu.vn.backend.DAO;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ctu.vn.backend.entity.User;

@Repository
@Qualifier("UserRepository")
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT u FROM User u WHERE u.username = :username and u.password = :password")
    Optional<User> findByUsername(@Param("username") String username, @Param("password") String password)
            throws NullPointerException;

}