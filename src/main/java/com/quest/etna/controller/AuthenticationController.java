package com.quest.etna.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.quest.etna.config.AuthService;
import com.quest.etna.config.JwtTokenUtil;
import com.quest.etna.config.JwtUserDetailsService;
import com.quest.etna.config.PasswordEncoderS;
import com.quest.etna.model.Erreur;
import com.quest.etna.model.JwtUserDetails;
import com.quest.etna.model.User;
import com.quest.etna.model.UserDetails;
import com.quest.etna.repositories.UserRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Optional;


@RestController
public class AuthenticationController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    private AuthenticationManager authentificationManager;

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private PasswordEncoderS passwordEncoderS;

    @PostMapping("/register")
//    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity register(@RequestBody User user) throws Exception {


        String username = user.getUsername();
        String email = user.getEmail();

        //400
        if (username == null || user.getPassword() == null) {

            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Erreur("La requête n'est pas valide"));
        }

        //409
        else if (userRepository.findByUsername(username).isPresent()) {

            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(new Erreur("Le nom d'utilisateur est déjà utilisé, Veillez utiliser un nouveau"));
        }
        //201
        else {

            User user1 = new User(username, email, passwordEncoderS.passwordEncoder().encode(user.getPassword()));

            userRepository.save(user1);

            authService.setupUser(user.getUsername(),
                    user.getPassword());

            String token = authService.getValidToken();
            UserDetails userDetails = new UserDetails(user1, token);
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(userDetails);
        }
    }


    @PostMapping("/me")
    ResponseEntity<?> authenticate(@RequestBody User user) {
        try {

            authService.setupUser(user.getUsername(),
                    user.getPassword());

            String token = authService.getValidToken();
            User user2 = userRepository.findByName(user.getUsername());

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new UserDetails(user2, token));
        } catch (Exception ex) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(new Erreur(ex.getMessage()));
        }
    }


    @GetMapping("/getme")
    ResponseEntity<?> getMe() {
        try {
            String token = authService.getValidToken();
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(new UserDetails(getUser(this.userRepository), token));
        } catch (Exception ex) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(new Erreur(ex.getMessage()));
        }
    }

    static User getUser(UserRepository userRepository) {
        JwtUserDetails userDetails = (JwtUserDetails) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        String userName = userDetails.getUsername();
        Optional<User> user = userRepository.findByUsername(userName);
        return user.get();
    }
}
