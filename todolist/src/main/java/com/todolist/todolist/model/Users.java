package com.todolist.todolist.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Document(collection = "Users")
public class Users
{
    public static final String SEQUENCE_NAME = "user_sequence";

    @Id
    private Integer userId;
    private String userName;
    private List<ToDo> tasks;
}
