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
@RequestMapping("/projects")
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
    public ResponseEntity<?> addProject(@RequestBody Project project) {
        try {
            return this.projectService.createProject(project, getUser(userRepository));
        }
        catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Erreur("Mauvaise requête"));
        }
    }

    static boolean userDetailsCon(UserRepository userRepository) {
        JwtUserDetails userDetails = (JwtUserDetails) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        String userName = userDetails.getUsername();
        Optional<User> user = userRepository.findByUsername(userName);
        if (user.get().getRole() == UserRole.ROLE_USER )
            return true;
        return false;
    }

    static User getUser(UserRepository userRepository) {
        JwtUserDetails userDetails = (JwtUserDetails) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        String userName = userDetails.getUsername();
        Optional<User> user = userRepository.findByUsername(userName);
        return user.get();
    }


    @DeleteMapping("/project/{id}")
    ResponseEntity<?> removeProjectById(@PathVariable int id){
        try {
            JwtUserDetails userDetails = (JwtUserDetails) SecurityContextHolder.getContext()
                    .getAuthentication().getPrincipal();
            String userName = userDetails.getUsername();
            Optional<User> user = userRepository.findByUsername(userName);
            if (user.get().getRole() == UserRole.ROLE_USER )
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new Erreur("Utilisateur non autorisé"));
            return projectService.delete(id);
        }
        catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Erreur("Mauvaise requête"));
        }
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<Project> getList(@RequestParam(defaultValue="0") Integer page , @RequestParam(defaultValue="5") Integer limit){
        return projectService.getAll();
    }

    @GetMapping("/project/{id}")
    ResponseEntity<?> getSkillByID(@PathVariable int id) {
        try {
            return projectService.delete(id);
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Erreur("Mauvaise requête"));
        }
    }

}
