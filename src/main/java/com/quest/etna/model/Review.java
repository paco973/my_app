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


	public Review(String body){
		this.body = body;
		this.creation_date = LocalDateTime.now();
		this.updated_date = LocalDateTime.now();
	}

	public Review() {

	}
	public ProjectUserDetails getUserDetails() {
		return new ProjectUserDetails(this.user.getId(), this.user.getUsername(), this.user.getPhoto() );
	}
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}


//	public User getUser() {
//		return user;
//	}

	public void setUser(User user) {
		this.user = user;
	}

//	public Project getProject() {
//		return project;
//	}

	public void setProject(Project project) {
		this.project = project;
	}

	public LocalDateTime getCreation_date() {
		return creation_date;
	}

	public void setCreation_date(LocalDateTime creation_date) {
		this.creation_date = creation_date;
	}

	public LocalDateTime getUpdated_date() {
		return updated_date;
	}

	public void setUpdated_date(LocalDateTime updated_date) {
		this.updated_date = updated_date;
	}
    

    /*public LocalDateTime getcreation_date() {
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
    }*/

}
