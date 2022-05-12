package com.quest.etna.model;

public class ProjectUserDetails {

    int id;
    String username;
    private String photo;

    public ProjectUserDetails(int id, String username, String photo){
        this.id = id;
        this.photo = photo;
        this.username = username;
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
    public String getPhoto() {
        return this.photo;
    }


}
