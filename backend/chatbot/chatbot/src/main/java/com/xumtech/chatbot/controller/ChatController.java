package com.xumtech.chatbot.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xumtech.chatbot.dto.ChatRequest;
import com.xumtech.chatbot.dto.ChatResponse;
import com.xumtech.chatbot.service.ChatBotService;

@RestController
@RequestMapping("api/chatbot")
public class ChatController {
    
    private final ChatBotService chatbotService;

    public ChatController(ChatBotService chatbotService) {
        this.chatbotService = chatbotService;
    }

    public ResponseEntity<ChatResponse> chat(@RequestBody ChatRequest request){
        return ResponseEntity.ok(
            chatbotService.processMessage(request.getMessage())
        );
    }


}
