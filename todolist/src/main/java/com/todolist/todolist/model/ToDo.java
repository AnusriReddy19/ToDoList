package com.todolist.todolist.model;

import lombok.Data;

import java.util.Date;

@Data
public class ToDo {

    private String toDoTask;
    private String toDoDescription;

    private Date toDoCreated;
    private Date toDoDeadline;

    public ToDo() {
        this.toDoCreated = new Date();
    }
}
