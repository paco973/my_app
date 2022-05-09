package com.quest.etna.controller;

import java.util.List;

import com.quest.etna.model.Erreur;
import com.quest.etna.model.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.quest.etna.model.User;
import com.quest.etna.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/all")
	//@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<?> getList(){
		return  new ResponseEntity(userService.getList(), HttpStatus.OK);
	}

	@GetMapping("/{name}")
	public ResponseEntity<User> getOneByName(@PathVariable("name") String name ) {
		User user = userService.getOneByName(name);
		if (user == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<User>(user , HttpStatus.OK);
	}

	@GetMapping("id/{id}")
	public ResponseEntity<User> getOneByName(@PathVariable("id") int id ) {
		User user = userService.getOneById(id);
		if (user == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<User>(user , HttpStatus.OK);
	}
	
	@PostMapping("/")
	public User createUser(@RequestBody User user ) {
		return userService.createEntity(user);
	}
}
