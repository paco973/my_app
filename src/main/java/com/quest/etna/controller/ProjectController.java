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

    @PostMapping(value="/")
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

            return projectService.delete(id);
        }
        catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Erreur(ex.getMessage()));
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getList(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(projectService.getAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Erreur(e.getMessage()));

        }

    }

    @GetMapping("/project/{id}")
    ResponseEntity<?> getSkillByID(@PathVariable int id) {
        try {
            return projectService.getByID(id);
        } catch (Exception ex) {

            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new Erreur("Mauvaise requête"));
        }
    }

    @PostMapping("/addreview/{id}")
    ResponseEntity<?>addreview(@RequestBody Review review, @PathVariable int id)
    {
        review.setUser(getUser(userRepository));
        return projectService.addReview(review, id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateProject(@RequestBody Project project,  @PathVariable int id ) {

        return projectService.update(project, id);
    }

}
