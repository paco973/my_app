package com.quest.etna.service;

import com.quest.etna.model.Erreur;
import com.quest.etna.model.Skill;
import com.quest.etna.repositories.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillService {

    @Autowired
    SkillRepository skillRepository;


    public SkillService(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    public ResponseEntity<?> createSkill(Skill skill) {
        skillRepository.save(skill);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(skill);
    }


    public ResponseEntity<?> update(Skill entity) {
        Optional<Skill> skill = skillRepository.findById(entity.getId());
        if (skill.isPresent()) {
            Skill skillFound = skill.get();
            skillFound.setName(entity.getName());
            skillFound.setDescription(entity.getDescription());
            skillFound.setupdated_date(entity.getupdated_date());
            skillFound.setDescription(entity.getDescription());
            skillRepository.save(skillFound);
        }
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(skill);
    }

    public ResponseEntity<?> delete(int id) {
        Optional<Skill> skill = skillRepository.findById(id);
        if (skill.isPresent()) {
            Skill skillFound = skill.get();
            skillRepository.delete(skillFound);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(skill);
        }
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new Erreur("La compétence n'a pas été trouver"));
    }

    public ResponseEntity<?> getByID(int id) {
        Optional<Skill> skill = skillRepository.findById(id);
        if (skill.isPresent()) {
            Skill skillFound = skill.get();
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(skillFound);
        }


        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new Erreur("La compétence n'a pas été trouver"));
    }


}
