package com.quest.etna.controller;


import com.quest.etna.model.*;
import com.quest.etna.repositories.UserRepository;
import com.quest.etna.service.SkillService;
import com.quest.etna.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/tags")
public class TagController {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final TagService tagService;


    public TagController(UserRepository userRepository, TagService tagService) {
        this.userRepository = userRepository;
        this.tagService = tagService;
    }

    @PostMapping(value="/tag")
    public ResponseEntity<?> addtag(@RequestBody Tag tag) {
        try {
            if (ProjectController.userDetailsCon(userRepository)) return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new Erreur("Utilisateur non autorisé"));
            return this.tagService.createTag(tag);
        }
        catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Erreur("Mauvaise requête"));
        }
    }


    @DeleteMapping("/tag/{id}")
    ResponseEntity<?> removeTagById(@PathVariable int id){
        try {
            if (ProjectController.userDetailsCon(userRepository)) return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new Erreur("Utilisateur non autorisé"));
            return tagService.delete(id);
        }
        catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Erreur("Mauvaise requête"));
        }
    }

    @GetMapping("/tag/{id}")
    ResponseEntity<?> getSkillByID(@PathVariable int id) {
        try {
            return tagService.delete(id);
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Erreur("Mauvaise requête"));
        }
    }
}
