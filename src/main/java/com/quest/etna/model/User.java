package com.quest.etna.model;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.type.StringNVarcharType;


@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    @Column(nullable = false, unique = true)
    String username;

    @Column(nullable = false)
    String password;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(columnDefinition = "varchar(100) default 'Paris'")
    private String location;

    @Column(columnDefinition = "varchar(255)")
    private String title;

    @Column(columnDefinition = "text")
    private String bio;

    @Column(columnDefinition = "text")
    private String photo;


    @Enumerated(EnumType.STRING)
    @Column(name = "role", columnDefinition = "varchar(255) default 'ROLE_USER'")
    private UserRole role = UserRole.ROLE_USER;

    LocalDateTime creation_date;

    @UpdateTimestamp
    // @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    LocalDateTime updated_date;

    @OneToMany(mappedBy = "user")
    private Set<Skill> skills = new HashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<Review> reviews = new HashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<Project> projects = new HashSet<>();


    public User() {
    }

    public User(String username, String email, String password) {
        this.username = username.substring(0, 1).toUpperCase() + username.substring(1).toLowerCase();
        this.password = password;
        this.creation_date = LocalDateTime.now();
        this.email = email;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public Set getSkills() {
        return this.skills;
    }

    public Set getProjects() {
        return this.projects;
    }

    public String getLocation() {
        return this.location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPhoto() {
        return this.photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getBio() {
        return this.bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public UserRole getRole() {
        return role;
    }


    public void setRole(UserRole role) {
        this.role = role;
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


    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }
}
