package com.kub.demo.domain.note.dtos;

import com.kub.demo.domain.note.model.Note;

import java.util.Date;

public record RequestNoteDto (String title, String text, String date, String color) {

    public static Note toModel (RequestNoteDto dto){
        Note note = new Note();

        note.setDate(dto.date);
        note.setTitle(dto.title);
        note.setText(dto.text);
        note.setColor(dto.color);
        return note;
    }
}
