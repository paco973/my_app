package com.quest.etna.controller;

import com.quest.etna.model.*;
import com.quest.etna.repositories.ProjectRopository;
import com.quest.etna.repositories.UserRepository;
import com.quest.etna.service.ProjectService;
import com.quest.etna.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ProjectController {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final ProjectService projectService;


    public ProjectController(UserRepository userRepository, ProjectService projectService) {
        this.userRepository = userRepository;
        this.projectService = projectService;
    }

    @PostMapping(value="/project")
    public ResponseEntity<?> addProject(@RequestBody List<Tag> tags, Project project) {
        try {
            JwtUserDetails userDetails = (JwtUserDetails) SecurityContextHolder.getContext()
                    .getAuthentication().getPrincipal();
            String userName = userDetails.getUsername();
            Optional<User> user = userRepository.findByUsername(userName);
            if (user.get().getRole() == UserRole.ROLE_USER )
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new Error("Utilisateur non habilité"));
            return this.projectService.createProject(project, tags);
        }
        catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Error("Mauvaise requête"));
        }
    }


    @DeleteMapping("/project/{id}")
    ResponseEntity<?> removeTagById(@PathVariable int id){
        try {
            JwtUserDetails userDetails = (JwtUserDetails) SecurityContextHolder.getContext()
                    .getAuthentication().getPrincipal();
            String userName = userDetails.getUsername();
            Optional<User> user = userRepository.findByUsername(userName);
            if (user.get().getRole() == UserRole.ROLE_USER )
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new Error("Utilisateur non habilité"));
            return projectService.delete(id);
        }
        catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Error("Mauvaise requête"));
        }
    }

}
