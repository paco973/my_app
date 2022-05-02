package com.quest.etna.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Skill")
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    @Column
    private String name;
    @Column(columnDefinition = "text")
    private String description;

    @ManyToOne
    @JoinColumn(name = "id_user", nullable = false)
    private User user;

    @CreationTimestamp
    LocalDateTime creation_date;

    @UpdateTimestamp
    LocalDateTime updated_date;

    public Skill() {
    }

    public Skill(String name, String description) {
        this.name = name;
        this.description = description;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return this.id;
    }


    public void setDescription(String description){
        this.description = description;
    }

    public String getDescription(){
        return this.description;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDateTime getcreation_date() {
        return creation_date;
    }

    public void setcreation_date(LocalDateTime creation_date) {
        this.creation_date = creation_date;
    }

    public LocalDateTime getupdated_date() {
        return updated_date;
    }

    public void setupdated_date(LocalDateTime updated_date) {
        this.updated_date = updated_date;
    }

    public void update_date() {
        this.updated_date = LocalDateTime.now();

    }
}
