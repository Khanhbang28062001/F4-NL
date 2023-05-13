package ctu.vn.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import ctu.vn.backend.DAO.UserRepository;
import ctu.vn.backend.entity.User;

@Service
public class UserService {
    @Autowired
    @Qualifier("userRepository")
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUser() {
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return user.get();
        } else {
            // Throw exception or return null depending on your requirements
            throw new RuntimeException("User not found with id " + id);
        }
    }

    public Optional<User> findById(Integer userId) {
        return userRepository.findById(userId);
    }

    public void save(User user) {
        System.out.println(user);
        userRepository.save(user);
    }

    public void delete(User user) {
        userRepository.delete(user);
    }

    // public Optional<User> findUserByUsername(String username) {
    // return userRepository.findByUsername(username);
    // }
    public User findUserByUsername(String username, String password) throws NullPointerException {
        Optional<User> userOptional = userRepository.findByUsername(username, password);
        System.out.println("000000000000000000000000000000000000000000");
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (password.equals(user.getPassword())) {
                System.out.println("|||||||||||||||||||||||||||||||||||||||||");
                return user;

            }
        }
        return null;
    }

}