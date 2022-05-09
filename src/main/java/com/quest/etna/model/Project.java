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

    @ManyToMany(mappedBy = "projects", fetch = FetchType.EAGER)
    private List<Tag> tags = new ArrayList<>();

    @OneToMany(mappedBy="project")
    private Set<Review> reviews;

    @CreationTimestamp
    private LocalDateTime creation_date;

    @UpdateTimestamp
    private LocalDateTime updated_date;

	public Project(String title, String description, String demo_link, String source_link, String image){
		this.title = title;
		this.description = description;
		this.image = image;
		this.source_link = source_link;
		this.demo_link = demo_link;
		this.updated_date = LocalDateTime.now();
		this.creation_date = LocalDateTime.now();;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDemo_link() {
		return demo_link;
	}

	public void setDemo_link(String demo_link) {
		this.demo_link = demo_link;
	}

	public String getSource_link() {
		return source_link;
	}

	public void setSource_link(String source_link) {
		this.source_link = source_link;
	}

	public Float getVote_ratio() {
		return vote_ratio;
	}

	public void setVote_ratio(Float vote_ratio) {
		this.vote_ratio = vote_ratio;
	}

	public int getVote_total() {
		return vote_total;
	}

	public void setVote_total(int vote_total) {
		this.vote_total = vote_total;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	public Set<Review> getReviews() {
		return reviews;
	}

	public void setReviews(Set<Review> reviews) {
		this.reviews = reviews;
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




}
