package com.aviacharter.server.dto.note;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NoteResponseDto {

    private Long id;
    private String startDate;
    private String dueDate;
    private String taskDescription;
    private boolean isTaskExpired;
    private boolean isTaskCompleted;

    @Override
    public String toString() {
        return "NoteResponseDto{" +
                "id=" + id +
                ", startDate='" + startDate + '\'' +
                ", dueDate='" + dueDate + '\'' +
                ", taskDescription='" + taskDescription + '\'' +
                ", isExpired=" + isTaskExpired +
                ", isCompleted=" + isTaskCompleted +
                '}';
    }
}
