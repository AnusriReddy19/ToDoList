package com.todolist.todolist.controller;

import com.todolist.todolist.model.ToDo;
import com.todolist.todolist.model.Users;
import com.todolist.todolist.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:5173")
public class ToDoController {
    @Autowired
    private ToDoService toDoService;

        @GetMapping("/{userId}")
    public ResponseEntity<List<ToDo>> getToDoListForUser(@PathVariable String userId)
    {
       return ResponseEntity.ok(toDoService.getToDoList(userId));
    }

    @PutMapping
    public ResponseEntity<Void> putToDoListForUser(@RequestBody Users users)
    {
        toDoService.putToDoList(users);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{userId}/{taskName}")
    public ResponseEntity<Void> deleteToDoListForUser(@PathVariable String userId, @PathVariable String taskName)
    {
        toDoService.deleteToDoList(userId,taskName);
        return ResponseEntity.noContent().build();
    }
}
