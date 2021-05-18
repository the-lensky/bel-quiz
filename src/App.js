import { useState } from 'react'

function App() {

    const questions = [
        {
            questionText: 'Столица США',
            answerOptions: [
                {answerText: 'Бостон', isCorrect: false},
                {answerText: 'Вашингтон', isCorrect: true},
                {answerText: 'Балтимор', isCorrect: false},
                {answerText: 'Лос-Анджелес', isCorrect: false},
            ]
        },
        {
            questionText: 'Столица США',
            answerOptions: [
                {answerText: 'Бостон', isCorrect: false},
                {answerText: 'Вашингтон', isCorrect: true},
                {answerText: 'Балтимор', isCorrect: false},
                {answerText: 'Лос-Анджелес', isCorrect: false},
            ]
        },
        {
            questionText: 'Столица США',
            answerOptions: [
                {answerText: 'Бостон', isCorrect: false},
                {answerText: 'Вашингтон', isCorrect: true},
                {answerText: 'Балтимор', isCorrect: false},
                {answerText: 'Лос-Анджелес', isCorrect: false},
            ]
        },
        {
            questionText: 'Столица США',
            answerOptions: [
                {answerText: 'Бостон', isCorrect: false},
                {answerText: 'Вашингтон', isCorrect: true},
                {answerText: 'Балтимор', isCorrect: false},
                {answerText: 'Лос-Анджелес', isCorrect: false},
            ]
        },
    ]


    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    const handleRefresh = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }


    return (
        <>
            <div className='app'>
                {
                    showScore
                        ? <div className='section__score'>
                            <div> Правильных ответов {score} из {questions.length}</div>
                        <button onClick={handleRefresh} className='refresh__btn'>Попробовать еще раз</button>
                        </div>
                        :
                        <div className='quiz'>
                            <div className='question__section'>
                                <div className='question_count'>
                                    <span> Вопрос {currentQuestion + 1}</span> / {questions.length}
                                </div>
                                <div className='question__text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='answer__section'>
                                {
                                    questions[currentQuestion].answerOptions.map(question => (
                                        <button
                                            onClick={() => handleAnswerOptionClick(question.isCorrect)}>{question.answerText}</button>
                                    ))
                                }
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default App
