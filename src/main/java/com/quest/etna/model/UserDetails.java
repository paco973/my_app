package com.quest.etna.model;

public class UserDetails {

    private User user;
    private String teken;
    public UserDetails(){
    }
    public UserDetails(User user, String token){
        this.teken = token;
        this.user = user;
    }

    public UserDetails(User user) {
        this.user = user;
    }

    public User getUser(){return this.user;}
    public String getTeken(){return  this.teken;}
}
