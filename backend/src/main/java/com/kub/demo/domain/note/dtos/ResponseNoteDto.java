package com.kub.demo.domain.note.dtos;

import com.kub.demo.domain.note.model.Note;

public record ResponseNoteDto(Long id, String title, String text, String date, String color) {

    public static ResponseNoteDto fromModel(Note note){
        return new ResponseNoteDto(note.getId(), note.getTitle(), note.getText(), note.getDate(), note.getColor());

    }
}
