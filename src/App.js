import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "2*(4+4) sonucu nedir?",
    answers: ["2", "4", "8", "16"],
    correct: 3
  },
  {
    question: "9*9 sonucu nedir?",
    answers: ["18", "81", "80", "79"],
    correct: 1
  },
  {
    question: "Formula 1'in 2022 şampiyonu kimdir?",
    answers: [
      "Max Verstappen",
      "Charles Leclerd",
      "Lewis Hamilton",
      "Lando Norris"
    ],
    correct: 0
  },
  {
    question: "Formula 1 takviminde ilk sırada hangi grand prix vardır?",
    answers: [
      "Bahreyn Grand Prix",
      "Suudi Arabistan Grand Prix",
      "Avustralya Grand Prix",
      "Emilia Romagna Grand Prix"
    ],
    correct: 0
  },
  {
    question: "Hangisi Formula 1 takımlarından değildir?",
    answers: [
      "Ford-AMG F1 Team",
      "Alfa Romeo F1 Team Orlen",
      "BWT Alpine F1 Team",
      "Oracle Red Bull Racing"
    ],
    correct: 0
  }
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  // KODUNUZ BURAYA GELECEK

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {showScore ? (
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-2xl font-bold mb-4">
            Puanın {((score / questions.length) * 100).toFixed(2)}%
          </div>
        </div>
      ) : (
        <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <div className="text-lg font-semibold">
              Question {currentQuestion + 1}/{questions.length}
            </div>
            <div className="text-xl mt-2">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(index)}
                className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

};

export default App;
