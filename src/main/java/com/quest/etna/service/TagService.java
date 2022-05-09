package com.quest.etna.service;

import com.quest.etna.model.Erreur;
import com.quest.etna.model.Project;
import com.quest.etna.model.Tag;
import com.quest.etna.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TagService {

    @Autowired
    TagRepository tagRepository;


    public TagService(TagRepository tagRepository){
        this.tagRepository = tagRepository;
    }

    public ResponseEntity<?> createTag(Tag tag) {
        tagRepository.save(tag);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(tag);
    }


    public ResponseEntity<?> update(int id, Tag entity) {
        Optional<Tag> tag = tagRepository.findById(id);
        if (tag.isPresent()) {
            Tag tagFound = tag.get();
            tagFound.setName(entity.getName());
            tagFound.setUpdated_date(entity.getUpdated_date());
            tagRepository.save(tagFound);

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(tagFound);
        }
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("Found");
    }

    public ResponseEntity<?> delete(int id) {
        Optional<Tag> tag = tagRepository.findById(id);
        if (tag.isPresent()){
            Tag tagFound = tag.get();
            tagRepository.delete(tagFound);

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body("ok");
        }


        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new Erreur("Le tag n'a pas été trouver"));

    }

    public ResponseEntity<?> getByID(int id) {
        Optional<Tag> tag = tagRepository.findById(id);
        if (tag.isPresent()) {
            Tag tagFound = tag.get();
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(tagFound);
        }

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new Erreur("Le tag n'a pas été trouver"));
    }



}
