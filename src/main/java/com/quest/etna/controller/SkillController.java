package com.quest.etna.controller;

import com.quest.etna.model.*;
import com.quest.etna.repositories.UserRepository;
import com.quest.etna.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/skills")
public class SkillController {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final SkillService skillService;


    public SkillController(UserRepository userRepository, SkillService skillService) {
        this.userRepository = userRepository;
        this.skillService = skillService;
    }

    @PostMapping(value = "/skill")
    public ResponseEntity<?> addskill(@RequestBody Skill skill) {
        try {
            JwtUserDetails userDetails = (JwtUserDetails) SecurityContextHolder.getContext()
                    .getAuthentication().getPrincipal();
            String userName = userDetails.getUsername();
            Optional<User> user = userRepository.findByUsername(userName);


            User user1 = user.get();
            skill.setUser(user1);

            return this.skillService.createSkill(skill);
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Erreur("Mauvaise requête"));
        }
    }


    @DeleteMapping("/skill/{id}")
    ResponseEntity<?> removeSkillById(@PathVariable int id) {
        try {
            return skillService.delete(id);
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Erreur("Mauvaise requête"));
        }
    }


    @GetMapping("/skill/{id}")
    ResponseEntity<?> getSkillByID(@PathVariable int id) {
        try {
            return skillService.delete(id);
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Erreur("Mauvaise requête"));
        }
    }
}
