package com.todolist.todolist.repository;


import com.todolist.todolist.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ToDoRepo extends MongoRepository<Users,Integer> {
    Optional<Users> findByUserName(String userName);

}
