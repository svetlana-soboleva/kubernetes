package com.kub.demo.domain.note.dtos;

import com.kub.demo.domain.note.model.Note;

public record ResponseNoteDto(Long id, String text, String date) {

    public static ResponseNoteDto fromModel(Note note){
        return new ResponseNoteDto(note.getId(), note.getText(), note.getDate());

    }
}
