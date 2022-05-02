package com.quest.etna.repositories;

import com.quest.etna.model.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRopository extends CrudRepository<Project, Integer> {

}
