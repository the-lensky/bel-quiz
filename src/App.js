import { useState } from 'react'

function App() {

    const questions = [
        {
            questionText: 'Когда появились первые стоянки на территории Беларуси',
            answerOptions: [
                {answerText: '26 тысяч лет тому назад', isCorrect: true},
                {answerText: '30 тысяч лет тому назад', isCorrect: false},
                {answerText: '24 тысяч лет тому назад', isCorrect: false},
                {answerText: '28 тысяч лет тому назад', isCorrect: false},
            ]
        },
        {
            questionText: 'Какой город стал первой столицей ВКЛ? ',
            answerOptions: [
                {answerText: 'Полоцк', isCorrect: false},
                {answerText: 'Новогрудок', isCorrect: true},
                {answerText: 'Туров', isCorrect: false},
                {answerText: 'Пинск', isCorrect: false},
            ]
        },
        {
            questionText: 'В каком году в документах впервые упоминался Полоцк? ',
            answerOptions: [
                {answerText: '859', isCorrect: false},
                {answerText: '884', isCorrect: false},
                {answerText: '894', isCorrect: false},
                {answerText: '862', isCorrect: true},
            ]
        },
        {
            questionText: 'С помощью какого документа образовали Речь Посполитую?',
            answerOptions: [
                {answerText: 'Берестейская уния', isCorrect: false},
                {answerText: 'Варшавский договор', isCorrect: false},
                {answerText: 'Люблинская уния', isCorrect: true},
                {answerText: 'Польский статут', isCorrect: false},
            ]
        },
        {
            questionText: 'Что ознаменовывал Брест-Литовский мирный договор?',
            answerOptions: [
                {answerText: 'Перевод Советской армии на сторону Австро-Венгрии', isCorrect: false},
                {answerText: 'Выход Советской России из Первой мировой войны', isCorrect: true},
                {answerText: 'Окончание первой мировой войны', isCorrect: false},
                {answerText: 'Выход Беларуси из состава Польши', isCorrect: false},
            ]
        },
        {
            questionText: 'Когда была провозглашена БССР?',
            answerOptions: [
                {answerText: '1 января 1919', isCorrect: true},
                {answerText: '3 июля 1921', isCorrect: false},
                {answerText: '7 ноября 1917', isCorrect: false},
                {answerText: '19 сентября 1921', isCorrect: false},
            ]
        },
        {
            questionText: 'Назовите день, когда Беларусь получила свою независимость',
            answerOptions: [
                {answerText: '23 агуста', isCorrect: false},
                {answerText: '27 июля ', isCorrect: true},
                {answerText: '3 июля', isCorrect: false},
                {answerText: '17 февраля', isCorrect: false},
            ]
        },
        {
            questionText: 'Как зовут юного белоруса - героя Великой Отечественной войны?',
            answerOptions: [
                {answerText: 'Валя Котик', isCorrect: false},
                {answerText: 'Павел Морозов ', isCorrect: false},
                {answerText: 'Марат Казей', isCorrect: true},
                {answerText: 'Зоя Космодемьянова', isCorrect: false},
            ]
        },
        {
            questionText: 'Сколько лет длилась Великая Отечественная война?',
            answerOptions: [
                {answerText: '3 года, 10 месяцев и 17 дней', isCorrect: true},
                {answerText: '2 года, 11 месяцев и 9 дней', isCorrect: false},
                {answerText: '5 лет, 8 месяцев и 11 дней', isCorrect: false},
                {answerText: '4 года, 3 месяца и 7 дней', isCorrect: false},
            ]
        },
        {
            questionText: 'Выберите название первой белорусской газеты',
            answerOptions: [
                {answerText: 'Народная Нива', isCorrect: false},
                {answerText: 'Народная Воля', isCorrect: false},
                {answerText: 'Наша Нива', isCorrect: false},
                {answerText: 'Наша Доля', isCorrect: true},
            ]
        }
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
