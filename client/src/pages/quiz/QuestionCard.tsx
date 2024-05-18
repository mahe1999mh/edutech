// QuestionCard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { H4 } from '../../components/Typography';

const QuestionCard = ({ question, onNext, onAnswer }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNextClick = () => {
        onAnswer(selectedOption);
        onNext();
        setSelectedOption('');
    };

    return (
        <>
            <Card sx={{ m: 2 }}>
                <H4 sx={{ p: 1 }}>{question.question}</H4>
            </Card>
            <Card sx={{ display: "flex", flexDirection: "column", gap: "10px", m: 2 }}>
                <CardContent>
                    <FormControl component="fieldset">
                        <RadioGroup value={selectedOption} onChange={handleChange}>
                            {question.options.map((option, index) => (
                                <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                            ))}
                        </RadioGroup>
                    </FormControl>

                </CardContent>
                <Button disabled={!selectedOption} variant="contained" color="primary" onClick={handleNextClick}>Next</Button>
            </Card>
        </>
    );
};

export default QuestionCard;
