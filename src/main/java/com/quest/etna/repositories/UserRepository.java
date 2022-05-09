package com.quest.etna.repositories;

import com.quest.etna.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository< User,Integer> {

    @Query(value = "SELECT n FROM User n WHERE n.username = :username")
    public Optional<User> findByUsername(String username);

    @Query(value = "SELECT n FROM User n WHERE n.username = :username")
    public User findByName(String username);

    @Query(value = "SELECT n FROM User n WHERE n.email = :email")
    public User findByEmail(String email);

    @Query("SELECT n FROM User n WHERE n.username = :username and n.password = :password" )
    public Optional<User> findByUsernameAndPassword(String username, String password);

    boolean existsUserByUsername(String username);
    List<User> findAll();
}
