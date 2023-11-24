package com.aviacharter.server.repository;

import com.aviacharter.server.entity.note.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
    @Query("SELECT n FROM Note n WHERE n.isExpired = true AND n.isCompleted = false")
    List<Note> findExpiredNotes();

    @Query("SELECT  n FROM Note n WHERE n.isCompleted = true")
    List<Note> findCompletedNotes();

    @Query("SELECT n FROM Note n WHERE n.isCompleted = false AND n.isExpired = false ")
    List<Note> findNotCompletedAndNotExpiredNotes();
}
