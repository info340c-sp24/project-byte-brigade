import React, { useState } from 'react';
import questions from './questions';

const QuizControl = () => {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [result, setResult] = useState(null);

    const handleChange = (questionIndex, answerValue) => {
        setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answerValue });
    };

    const calculateResult = () => {
        let result = '';

        questions.forEach((_, index) => {
            const answer = selectedAnswers[index] || '0';
            result += answer;
        });

        return result;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = calculateResult();
        displayResult(result);
    };

    const displayResult = (result) => {
        const hike = getHikeForResult(result);
        setResult(hike);
    };

    const getHikeForResult = (result) => {
        const hikeMap = {
            '32121': 'Wallace Falls',
            '22122': ['Cherry Creek Hike, ', 'Bud Blancher Trail'],
            '12121': 'Franklin Falls',
            '22121': 'Heybrook Lookout',
            '32232': ['Rattlesnake Ledge, ', 'Poo-Poo point'],
            '11112': ['Union Bay Natural Area, ', 'Gas Works Park Loop, ', 'Ravenna Park Loop, ', 'Green Lake, ', 'Lincoln Park, ', 'Grand Forest West Main Point'],
            '32231': ['Lake 22, ', 'Mount Si'],
            '11122': ['Washington Park Arboretum, ', 'Discovery Park, ', 'Evans Creek Preserve, ', 'Paradise Valley Area, ', 'Puyallup Loop Trail'],
            '12122': ['Foster Island, ', 'Robe Canyon Trail'],
            '12112': ['North Creek Trail, ', 'Granite Falls Fish Ladder'],
            '31232': 'Maple Pass Trail',
            '11222': 'Cheshiahud Lake Union Loop',
            '13332': 'Burke Gilman Trail',
            '22232': 'Chief Sealth Trail',
            '22222': 'Coal Creek Trail',
            '21122': 'Japanese Gulch South Loop'
        };

        return hikeMap[result] || 'No hike found';
    };

    const handleRestart = () => {
        setSelectedAnswers({});
        setResult(null);
    };

    return (
        <div className='quiz'>
            <h1>Husky Hikes Quiz</h1>
            <p>Take the quiz to find the hike for you!</p>
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div key={index} className="hike-quiz">
                        <p>{index + 1}. {question.question}</p>
                        {question.answers.map((answer, idx) => (
                            <div key={idx}>
                                <input
                                    type="radio"
                                    id={`question${index + 1}-answer${idx + 1}`}
                                    name={`question${index + 1}`}
                                    value={answer.value}
                                    checked={selectedAnswers[index] === answer.value}
                                    onChange={() => handleChange(index, answer.value)}
                                />
                                <label htmlFor={`question${index + 1}-answer${idx + 1}`}>{answer.text}</label>
                            </div>
                        ))}
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
            {result && (
                <div>
                    <h2>Your perfect hike is: {result}</h2>
                    <button onClick={handleRestart}>Restart Quiz</button>
                </div>
            )}
        </div>
    );
};

export default QuizControl;