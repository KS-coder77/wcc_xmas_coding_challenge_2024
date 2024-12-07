
import questions from "../questions";
import { React, useState } from "react";
import { Button, Card, CardContent, Typography, Box, TextField } from "@mui/material";
import ScoreCard from "../score/ScoreCard";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const { question, answer } = questions[currentQuestion];
    function loadNextQuestion() {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
        setUserInput("");
    }
    const resetQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowScore(false);
    };
    const handleSubmit = () => {
        if (userInput === answer) {
            setScore(score + 1);
        }
        setTimeout(() => loadNextQuestion(), 1000);
    };
    return (
        <div className="quiz-container">
            {showScore ? (
                <ScoreCard score={score} totalQuestions={questions.length} onTryAgain={resetQuiz} />

            ) : (
                <div>
                    <Box sx={{ maxWidth: 600, margin: "20px auto", textAlign: "center" }}>
                        <Card className="quiz-card">
                            <CardContent>
                                <Typography variant="h4" className="quiz-title" gutterBottom>
                                    Math Master Quiz 🧮
                                </Typography>
                                <Typography variant="h8" className="question-count">Question {currentQuestion + 1}/{questions.length}</Typography>
                                <Typography variant="h6" className="quiz-question">
                                    {question}
                                </Typography>
                                <TextField
                                    label="Your answer"
                                    variant="outlined"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    fullWidth
                                    className="quiz-input" />
                                <Button
                                    variant="Contained"
                                    color="primary"
                                    onClick={handleSubmit}
                                    className="quiz-button"
                                    disabled={!userInput.trim()}>
                                    Submit </Button> <br></br>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
            )
            }
        </div>
    );
} export default Quiz;