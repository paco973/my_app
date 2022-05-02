package com.quest.etna.controller;

import com.quest.etna.model.JwtUserDetails;
import com.quest.etna.model.Skill;
import com.quest.etna.model.User;
import com.quest.etna.model.UserRole;
import com.quest.etna.repositories.UserRepository;
import com.quest.etna.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class SkillController {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final SkillService skillService;


    public SkillController(UserRepository userRepository, SkillService skillService) {
        this.userRepository = userRepository;
        this.skillService = skillService;
    }

    @PostMapping(value="/skill")
    public ResponseEntity<?> addskill(@RequestBody Skill skill) {
        try {
            JwtUserDetails userDetails = (JwtUserDetails) SecurityContextHolder.getContext()
                    .getAuthentication().getPrincipal();
            String userName = userDetails.getUsername();
            Optional<User> user = userRepository.findByUsername(userName);
//            if (user.get().getRole() == UserRole.ROLE_USER )
//                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//                        .body(new Erreur("Utilisateur non habilité"));
            skill.setUser(user.get());

            return this.skillService.createBook(skill);
        }
        catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Error("Mauvaise requête"));
        }
    }


    @DeleteMapping("/skill/{id}")
    ResponseEntity<?> removeBooksById(@PathVariable int id){
        try {
            JwtUserDetails userDetails = (JwtUserDetails) SecurityContextHolder.getContext()
                    .getAuthentication().getPrincipal();
            String userName = userDetails.getUsername();
            Optional<User> user = userRepository.findByUsername(userName);
//            if (user.get().getRole() == UserRole.ROLE_USER )
//                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//                        .body(new Error("Utilisateur non habilité"));
            return skillService.delete(id);
        }
        catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Error("Mauvaise requête"));
        }
    }
}
