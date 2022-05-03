package com.quest.etna.model;

import java.util.ArrayList;
import java.util.Collection;

import com.quest.etna.config.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class JwtUserDetails implements UserDetails {



    private static final long serialVersionUID = 1L;
    private final User user;
    private String token;
    private final org.springframework.security.core.userdetails.User securityUser;

    public JwtUserDetails(User user) {
        super();
        this.user = user;
        this.securityUser = new org.springframework.security.core.userdetails.User(
                getUsername(),
                getPassword(),
                new ArrayList<>()
        );
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return this.securityUser.getAuthorities();
    }

    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        return this.user.getPassword();
    }

    @Override
    public String getUsername() {

        return this.user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {

        return true;
    }

    @Override
    public boolean isAccountNonLocked() {

        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {

        return true;
    }

    @Override
    public boolean isEnabled() {

        return true;
    }

}
