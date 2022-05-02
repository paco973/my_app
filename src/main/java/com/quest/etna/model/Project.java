package com.quest.etna.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Entity
public class Project {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    @Column
    private String title;
    @Column(columnDefinition = "text")
    private String description;
    @Column(columnDefinition = "text")
    private String demo_link;
    @Column(columnDefinition = "text")
    private String source_link;
    @Column(columnDefinition = "float")
    private Float vote_ratio;
    @Column(columnDefinition = "integer")
    private int vote_total;
    @Column(columnDefinition = "text")
    private String image;

    @ManyToOne
    @JoinColumn(name="id_user", nullable=false)
    private User user;

    @ManyToMany(mappedBy = "projects")
    private List<Tag> tags = new ArrayList<>();

    @OneToMany(mappedBy="project")
    private Set<Review> reviews;

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
        this.updated_date = LocalDateTime.now();;
    }
}
