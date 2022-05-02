package com.quest.etna.repositories;


import com.quest.etna.model.Skill;
import com.quest.etna.model.Tag;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends CrudRepository<Tag, Integer> {
    @Query("SELECT tag FROM Tag tag WHERE tag.name=:name" )
    public List<Skill> findByName(String name);
}
