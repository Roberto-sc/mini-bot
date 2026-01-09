package com.xumtech.chatbot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xumtech.chatbot.model.Question;

public interface QuestionRepository extends JpaRepository<Question, Long>{
    
    

}
