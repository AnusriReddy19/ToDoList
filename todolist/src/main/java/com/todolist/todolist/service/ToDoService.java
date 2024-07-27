package com.todolist.todolist.service;

import com.todolist.todolist.model.ToDo;
import com.todolist.todolist.model.Users;
import com.todolist.todolist.repository.ToDoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ToDoService {
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    private ToDoRepo toDoRepo;

    public List<ToDo> getToDoList(String userId)
    {
       Optional<Users> optionalUser = toDoRepo.findById(Integer.parseInt(userId));
       if (optionalUser.isPresent())
       {
           return optionalUser.get().getTasks();
       }

       return null;
    }

    public void putToDoList(Users users)
    {

        Optional<Users> existingUser = toDoRepo.findByUserName(users.getUserName());
        if (existingUser.isPresent()) {
            List<ToDo> userOldTasks = existingUser.get().getTasks();
            userOldTasks.add(users.getTasks().get(0));
            users.setTasks(userOldTasks);
            users.setUserId(existingUser.get().getUserId());
            toDoRepo.save(users);
        } else {
            users.setUserId(sequenceGeneratorService.generateSequence(Users.SEQUENCE_NAME));
            toDoRepo.save(users);
        }


    }

    public void deleteToDoList(String userId,String taskName)
    {
        Optional<Users> optionalUsers = toDoRepo.findById(Integer.parseInt(userId));
        Users user = optionalUsers.get();
        List<ToDo> toDoList = user.getTasks();

        toDoList.removeIf((ToDo toDo) -> toDo.getToDoTask().equals(taskName));

        user.setTasks(toDoList);
        toDoRepo.save(user);
    }
}
