package com.aviacharter.server.dto.note;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NoteRequestDto {

    private String startDate;
    private String dueDate;
    private String taskDescription;
    private String isExpired;
    private String isCompleted;

    @Override
    public String toString() {
        return "NoteRequestDto{" +
                "startDate='" + startDate + '\'' +
                ", dueDate='" + dueDate + '\'' +
                ", taskDescription='" + taskDescription + '\'' +
                ", isExpired=" + isExpired +
                ", isCompleted=" + isCompleted +
                '}';
    }
}
