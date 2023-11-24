package com.aviacharter.server.service;

import com.aviacharter.server.entity.note.Note;
import com.aviacharter.server.repository.NoteRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class NoteService implements BaseService<Note> {

    private final NoteRepository noteRepository;

    @Override
    public List<Note> findAll() {
        return noteRepository.findAll();
    }

    @Override
    public Page<Note> findAllPageable(int size, int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber, size);
        return noteRepository.findAll(pageable);
    }

    @Override
    public Note findById(Long id) {
        return noteRepository.findById(id).orElse(null);
    }

    @Override
    public Note update(Note obj, Long id) {
        Note note = findById(id);

        System.out.println("Service note obj -> " + obj);

        note.setStartDate(obj.getStartDate());
        note.setDueDate(obj.getDueDate());
        note.setTaskDescription(obj.getTaskDescription());
        note.setExpired(obj.getIsExpired());
        note.setCompleted(obj.getIsCompleted());

        return noteRepository.save(note);
    }

    @Override
    public Note create(Note obj) {
        return noteRepository.save(obj);
    }

    @Override
    public void deleteById(Long id) {
        noteRepository.deleteById(id);
    }

    public List<Note> findAllExpiredNotes () {
        return noteRepository.findExpiredNotes();
    }

    public List<Note> findAllCompletedNotes() {
        return noteRepository.findCompletedNotes();
    }

    public Note completeNote(Long id) {
        Note note = findById(id);
        note.setCompleted(true);
        return noteRepository.save(note);
    }

    public List<Note> findNotCompletedAndNotExpiredNotes() {
        return noteRepository.findNotCompletedAndNotExpiredNotes();
    }
}
