package com.kub.demo.domain.note.dtos;

import com.kub.demo.domain.note.model.Note;

import java.util.Date;

public record RequestNoteDto (String text) {

    public static Note toModel (RequestNoteDto dto){
        Note note = new Note();

        note.setDate(new Date().toString());
        note.setText(dto.text);
        return note;
    }
}
