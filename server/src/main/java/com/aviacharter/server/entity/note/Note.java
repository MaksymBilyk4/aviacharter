package com.aviacharter.server.entity.note;

import com.aviacharter.server.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "notes")
public class Note extends BaseEntity {

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "due_date", nullable = false)
    private LocalDate dueDate;

    @Column(name = "task_descr", nullable = false)
    private String taskDescription;

    @Column(name = "is_expired", nullable = false)
    boolean isExpired;

    @Column(name = "is_completed", nullable = false)
    boolean isCompleted;
    @Override
    public String toString() {
        return "Note{" +
                "startDate=" + startDate +
                ", dueDate=" + dueDate +
                ", taskDescription='" + taskDescription + '\'' +
                ", isExpired=" + isExpired +
                ", isCompleted=" + isCompleted +
                '}';
    }

    public boolean getIsExpired() {
        return isExpired;
    }

    public boolean getIsCompleted() {
        return isCompleted;
    }
}
