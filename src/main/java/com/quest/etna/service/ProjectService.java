package com.quest.etna.service;

import com.quest.etna.model.*;
import com.quest.etna.repositories.ProjectRopository;
import com.quest.etna.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    @Autowired
    ProjectRopository projectRopository;

    @Autowired
    ReviewRepository reviewRepository;


    public ProjectService(ProjectRopository projectRopository, ReviewRepository reviewRepository) {
        this.projectRopository = projectRopository;
        this.reviewRepository = reviewRepository;
    }

    public ResponseEntity<?> createProject(Project project, User user) {

        project.setUser(user);
        projectRopository.save(project);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(project);
    }

    public List<Project> getAll() {
        return (List<Project>) projectRopository.findAll();
    }

    public ResponseEntity<?> update( Project entity,int id) {
        Optional<Project> project = projectRopository.findById(id);

        if (project.isPresent()) {
            Project projectFound = project.get();
            projectFound.setTitle(entity.getTitle());
            projectFound.setImage(entity.getImage());
            projectFound.setDemo_link(entity.getDemo_link());
            projectFound.setSource_link(entity.getSource_link());
            projectFound.setDescription(entity.getDescription());

            projectRopository.save(projectFound);

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(projectFound);
        }
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(new Erreur("Le project n'a pas été trouver"));
    }

    public ResponseEntity<?> delete(int id) {
        Optional<Project> project = projectRopository.findById(id);
        if (project.isPresent()) {
            Project projectFound = project.get();
            projectRopository.delete(projectFound);

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body("ok");
        }


        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new Erreur("Le project n'a pas été trouver"));

    }

    public ResponseEntity<?> getByID(int id) {
        Optional<Project> project = projectRopository.findById(id);
        if (project.isPresent()) {
            Project projectFound = project.get();
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(projectFound);
        }

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new Erreur("Le project n'a pas été trouver"));
    }

    public ResponseEntity<?> addReview(Review review, int id) {
        Optional<Project> project = projectRopository.findById(id);
        if (project.isPresent()) {
            Project projectFound = project.get();

          review.setProject(projectFound);
            reviewRepository.save(review);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body("ok");
        }

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new Erreur("Le project n'a pas été trouver"));
    }


}
