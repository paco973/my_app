package com.quest.etna.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity

public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    @Column(columnDefinition = "text")
    private String body;
    @Column()
    private String value;

    @ManyToOne
    @JoinColumn(name = "id_user", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "id_project", nullable = false)
    private Project project;

    @CreationTimestamp
    LocalDateTime creation_date;

    @UpdateTimestamp
    LocalDateTime updated_date;

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
        ;
    }

}
