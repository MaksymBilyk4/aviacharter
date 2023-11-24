package com.aviacharter.server.controller;

import com.aviacharter.server.dto.note.NoteRequestDto;
import com.aviacharter.server.dto.note.NoteResponseDto;
import com.aviacharter.server.entity.note.Note;
import com.aviacharter.server.facade.note.NoteRequestMapper;
import com.aviacharter.server.facade.note.NoteResponseMapper;
import com.aviacharter.server.service.NoteService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("${api.version}/notes")
public class NoteController {

    private final NoteService noteService;
    private final NoteRequestMapper requestMapper;
    private final NoteResponseMapper responseMapper;

    @GetMapping("/all")
    public List<NoteResponseDto> findAll() {
        return noteService.findAll().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/expired")
    public List<NoteResponseDto> findAllExpiredNotes() {
        return noteService.findAllExpiredNotes().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }


    @GetMapping("/completed")
    public List<NoteResponseDto> findAllCompleted() {
        return noteService.findAllCompletedNotes().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/notCompletedAndNotExpired")
    public List<NoteResponseDto> findNotCompletedAndNotExpiredNotes() {
        return noteService.findNotCompletedAndNotExpiredNotes().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public NoteResponseDto findById (
            @PathVariable Long id
    ) {
        return responseMapper.convertToDto(noteService.findById(id));
    }

    @PostMapping
    public NoteResponseDto create(
            @RequestBody NoteRequestDto requestDto
    ) {
        Note note = requestMapper.convertToEntity(requestDto);
        return responseMapper.convertToDto(noteService.create(note));
    }

    @PutMapping("/complete")
    public NoteResponseDto completeNote(
            @RequestParam Long id
    ) {
        return responseMapper.convertToDto(noteService.completeNote(id));
    }

    @PutMapping("/{id}")
    public NoteResponseDto update(
            @RequestBody NoteRequestDto requestDto,
            @PathVariable Long id
    ) {
        Note note = requestMapper.convertToEntity(requestDto);
        return responseMapper.convertToDto(noteService.update(note, id));
    }

    @DeleteMapping("/{id}")
    public void deleteById (
            @PathVariable Long id
    ) {
        noteService.deleteById(id);
    }

}
