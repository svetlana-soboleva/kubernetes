package com.kub.demo;

import com.kub.demo.domain.note.dtos.RequestNoteDto;
import com.kub.demo.domain.note.dtos.ResponseNoteDto;
import com.kub.demo.domain.note.model.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class Controller {

    private final NoteService service;

    public Controller(@Autowired NoteService service) {
        this.service = service;
    }

    @GetMapping("/notes")
    public ResponseEntity<List<ResponseNoteDto>> getString(){
      List<ResponseNoteDto> notes = service.getAllNotes();
      return ResponseEntity.ok().body(notes);
    }

    @PostMapping("/notes")
    public ResponseEntity<ResponseNoteDto> createNote(@RequestBody RequestNoteDto body){
        Note savedNote = service.saveNote(body);
        return ResponseEntity.ok(ResponseNoteDto.fromModel(savedNote));
    }

}
