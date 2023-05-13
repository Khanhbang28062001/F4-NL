package ctu.vn.backend.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import ctu.vn.backend.DAO.UserRepository;
import ctu.vn.backend.Service.UserService;
import ctu.vn.backend.entity.Message;
import ctu.vn.backend.entity.User;

@RestController
@RequestMapping(path = "api/user")
public class UserController {

    @Autowired
    private final UserService userService;
    @Autowired
    private final UserRepository userRepository;

    @Autowired
    public UserController(@Qualifier("userRepository") UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:4200") //
    @GetMapping("/")
    public List<User> getUser() {
        return userService.getUser();
    }

    @CrossOrigin(origins = "http://localhost:4200") //
    @PostMapping("/")
    public ResponseEntity<Message> addUser(@RequestBody User user) {
        userService.save(user);
        return ResponseEntity.ok(new Message("Them nguoi dung id " + user.getUserid() + " xong roi ne!!!!!"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id}")
    public ResponseEntity<Optional<User>> getUserById(@PathVariable(value = "id") Integer userId) {
        System.out.println("!!!!!!!!!!!!!!!!!USER ID NE!!!!!!!!!!!!!!!!!: " + userId);
        // System.out.println("**************password nè : "+ User.;
        Optional<User> User = userService.findById(userId);
        return ResponseEntity.ok().body(User);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/{id}")
    public ResponseEntity<Message> deletetUser(@PathVariable(value = "id") Integer userId) {
        Optional<User> user = userService.findById(userId);
        userService.delete(user.get());
        return ResponseEntity.ok(new Message("Xoa user " + userId + " xong roi ne!!!!!"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password");

        User user = userService.findUserByUsername(username, password);
        System.out.println(username +" PPPPPP "+ password);
        System.out.println("///////////////////////////////////////"+user);
        try {
            if (password.equals(user.getPassword())) {
                System.out.println(username);
                return ResponseEntity.ok().body(user);
            }
        } catch (NullPointerException e) {
            Message message = new Message("Thông tin đăng nhập không chính xác!!!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Thông tin đăng nhập không chính xác!!!");
        }

        // System.out.println(username);
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
