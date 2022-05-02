package com.quest.etna.repositories;


import com.quest.etna.model.Skill;
import com.quest.etna.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SkillRepository extends CrudRepository<Skill, Integer> {
    @Query("SELECT skill FROM Skill skill WHERE skill.name=:name" )
    public List<Skill> findByName(String name);
}
