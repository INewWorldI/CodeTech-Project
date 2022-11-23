package seb.project.Codetech.question.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import seb.project.Codetech.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long>, CustomQuestionRepository {
}