// Quiz.js
import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import QuestionCard from './QuestionCard';

const questions = [
    {
        id: 1,
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4',
    },
    {
        id: 2,
        question: 'What is the capital of France?',
        options: ['London', 'Madrid', 'Paris', 'Berlin'],
        answer: 'Paris',
    },
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (answer) => {
        setUserAnswers([...userAnswers, { questionId: questions[currentQuestion].id, answer }]);
    };

    const handleNext = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleSubmit = () => {
        // Implement your logic for handling submission, e.g., calculating score
        console.log('User answers:', userAnswers);
        setShowResult(true);
    };

    const calculateScore = () => {
        let score = 0;
        userAnswers.forEach((userAnswer) => {
            const question = questions.find((q) => q.id === userAnswer.questionId);
            if (question.answer === userAnswer.answer) {
                score++;
            }
        });
        return score;
    };

    return (
        <Container>
            {!showResult && currentQuestion < questions.length ? (
                <QuestionCard
                    question={questions[currentQuestion]}
                    onNext={handleNext}
                    onAnswer={handleAnswer}
                />
            ) : (
                <div>
                    <p>Quiz completed!</p>
                    {!showResult && <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>}
                    {showResult && (
                        <div>
                            <p>Your score: {calculateScore()} / {questions.length}</p>
                            {/* You can display more details about the user's performance here */}
                        </div>
                    )}
                </div>
            )}
        </Container>
    );
};

export default Quiz;
