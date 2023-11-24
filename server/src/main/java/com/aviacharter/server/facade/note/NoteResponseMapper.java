package com.aviacharter.server.facade.note;

import com.aviacharter.server.dto.note.NoteResponseDto;
import com.aviacharter.server.entity.note.Note;
import com.aviacharter.server.facade.GeneralFacade;
import com.aviacharter.server.utils.DateParser;
import org.springframework.stereotype.Service;

@Service
public class NoteResponseMapper extends GeneralFacade<Note, NoteResponseDto> {
    public NoteResponseMapper() {
        super(Note.class, NoteResponseDto.class);
    }

    @Override
    protected void decorateDto(NoteResponseDto dto, Note entity) {
        super.decorateDto(dto, entity);

        DateParser dateParser = new DateParser();

        dto.setStartDate(dateParser.parseLocalDateToString(entity.getStartDate()));
        dto.setDueDate(dateParser.parseLocalDateToString(entity.getDueDate()));
        dto.setTaskExpired(entity.getIsExpired());
        dto.setTaskCompleted(entity.getIsCompleted());
    }
}
