package com.kub.demo;

import com.kub.demo.domain.note.dtos.RequestNoteDto;
import com.kub.demo.domain.note.dtos.ResponseNoteDto;
import com.kub.demo.domain.note.model.Note;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepository repo;

    public NoteService(NoteRepository repo) {
        this.repo = repo;
    }

    public List<ResponseNoteDto> getAllNotes(){
        return repo.findAll().stream().map(ResponseNoteDto::fromModel).toList();
    }

    public Note saveNote(RequestNoteDto newNote){
        return repo.save(RequestNoteDto.toModel(newNote));
    }
}
