package com.kub.demo;

import com.kub.demo.domain.note.dtos.RequestNoteDto;
import com.kub.demo.domain.note.dtos.ResponseNoteDto;
import com.kub.demo.domain.note.model.Note;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteNote(@RequestBody int id){
        Long noteId = (long) id;
        service.deleteNoteById(noteId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/notes/{id}")
    public ResponseEntity<ResponseNoteDto> updateNote( @RequestBody ResponseNoteDto updatedNote){
        Note note = service.updateNote(updatedNote);
        return ResponseEntity.ok(ResponseNoteDto.fromModel(note));
    }

}


