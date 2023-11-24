package com.aviacharter.server.facade.note;

import com.aviacharter.server.dto.note.NoteRequestDto;
import com.aviacharter.server.entity.note.Note;
import com.aviacharter.server.facade.GeneralFacade;
import com.aviacharter.server.utils.DateParser;
import org.springframework.stereotype.Service;

@Service
public class NoteRequestMapper extends GeneralFacade<Note, NoteRequestDto> {
    public NoteRequestMapper() {
        super(Note.class, NoteRequestDto.class);
    }

    @Override
    protected void decorateEntity(Note entity, NoteRequestDto dto) {
        super.decorateEntity(entity, dto);

        DateParser dateParser = new DateParser();

        entity.setStartDate(dateParser.parseStringToLocalDate(dto.getStartDate()));
        entity.setDueDate(dateParser.parseStringToLocalDate(dto.getDueDate()));
        if (dto.getIsCompleted().equals("false")) entity.setCompleted(false);
        else if (dto.getIsCompleted().equals("true")) entity.setCompleted(true);
        if (dto.getIsExpired().equals("false")) entity.setExpired(false);
        else if (dto.getIsExpired().equals("true")) entity.setExpired(true);
    }
}
