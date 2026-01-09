package com.xumtech.chatbot.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.xumtech.chatbot.dto.ChatResponse;
import com.xumtech.chatbot.model.Question;
import com.xumtech.chatbot.repository.QuestionRepository;

@Service
public class ChatBotService {
    
    private final QuestionRepository repository;

    public ChatBotService (QuestionRepository repository){
        this.repository=repository;
    }

    public ChatResponse processMessage(String userMessage){

        List<Question> questions = repository.findAll();

        return new ChatResponse(userMessage, questions.stream()
                .filter(q -> userMessage.toLowerCase().contains(q.getQuestion().toLowerCase()))
                .map(Question::getAnswer)
                .findFirst()
                .orElse("Lo siento, no entendí tu consulta"));
    }
}
