package com.quest.etna.model;


import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false, unique = true)
    private String name;

    @ManyToMany
    private List<Project> projects = new ArrayList<>();

    @CreationTimestamp
    LocalDateTime creation_date;

    @UpdateTimestamp
    LocalDateTime updated_date;


	public Tag(){

	}

	public Tag(String name){
		this.name = name;
		this.updated_date = LocalDateTime.now();
		this.creation_date = LocalDateTime.now();;

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	public LocalDateTime getCreation_date() {
		return creation_date;
	}

	public void setCreation_date() {
		this.creation_date = LocalDateTime.now();;
	}

	public LocalDateTime getUpdated_date() {
		return updated_date;
	}

	public void setUpdated_date(LocalDateTime updated_date) {
		this.updated_date = LocalDateTime.now();;
	}
    
    


}
