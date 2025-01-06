import React, { useState, useEffect } from 'react';
import './Quizapp.css';
import Confetti from 'react-confetti'; 

const questions = {
  HTML: [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
      answer: 0
    },
    {
      question: "Which HTML element defines the title of a document?",
      options: ["<meta>", "<title>", "<head>", "<header>"],
      answer: 1
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: ["<a>http://www.example.com</a>", "<a href='http://www.example.com'>Example</a>", "<link>http://www.example.com</link>", "<href='http://www.example.com'>Example</href>"],
      answer: 1
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<style>", "<css>", "<script>", "<stylesheet>"],
      answer: 0
    },
    {
      question: "What does the <br> tag do?",
      options: ["Inserts a line break", "Inserts a horizontal line", "Creates a new paragraph", "None of the above"],
      answer: 0
    },
    {
      question: "Which attribute is used to provide a unique identifier for an HTML element?",
      options: ["class", "id", "type", "name"],
      answer: 1
    },
    {
      question: "Which HTML element is used to define an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<list>"],
      answer: 1
    },
    {
      question: "What is the correct HTML for making a checkbox?",
      options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<input type='tick'>"],
      answer: 0
    },
    {
      question: "Which HTML element is used for the largest heading?",
      options: ["<h1>", "<heading>", "<h6>", "<h5>"],
      answer: 0
    },
    {
      question: "What is the purpose of the <div> tag?",
      options: ["Defines a section in the document", "Styles the document", "Creates a hyperlink", "None of the above"],
      answer: 0
    },
    {
      question: "Which of the following is not a valid HTML5 element?",
      options: ["<header>", "<footer>", "<section>", "<bodytag>"],
      answer: 3
    },
    {
      question: "What does the <meta> tag in HTML do?",
      options: ["Defines metadata about an HTML document", "Links to external stylesheets", "Creates a table", "None of the above"],
      answer: 0
    },
    {
      question: "What is the purpose of the alt attribute in an <img> tag?",
      options: ["Provides alternative text for an image", "Specifies the image source", "Defines the image size", "Links the image to another page"],
      answer: 0
    },
    {
      question: "Which tag is used to create a dropdown list?",
      options: ["<dropdown>", "<select>", "<input type='dropdown'>", "<list>"],
      answer: 1
    },
    {
      question: "What is the default value of the type attribute for a <button> tag?",
      options: ["button", "submit", "reset", "None"],
      answer: 1
    },
    {
      question: "Which HTML attribute specifies the destination of a link?",
      options: ["href", "link", "url", "src"],
      answer: 0
    },
    {
      question: "Which tag is used to define a table in HTML?",
      options: ["<table>", "<tab>", "<tr>", "<td>"],
      answer: 0
    },
    {
      question: "Which HTML element is used to define a footer for a document?",
      options: ["<bottom>", "<footer>", "<section>", "<header>"],
      answer: 1
    },
    {
      question: "What does the <iframe> element do?",
      options: ["Creates a frame for images", "Defines an inline frame", "Creates a video frame", "None of the above"],
      answer: 1
    },
    {
      question: "What is the correct way to comment in HTML?",
      options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
      answer: 1
    },
    {
      question: "Which HTML element is used for a text area?",
      options: ["<input type='text'>", "<textarea>", "<text>", "<input type='textarea'>"],
      answer: 1
    },
  ],
  JavaScript: [
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"],
      answer: 0
    },
    {
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      options: ["<script src='script.js'>", "<script href='script.js'>", "<script ref='script.js'>", "<script>script.js</script>"],
      answer: 0
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "alertBox:('Hello World');"],
      answer: 2
    },
    {
      question: "Which of the following is a valid variable declaration in JavaScript?",
      options: ["var myVar;", "myVar := 1;", "let myVar = 1;", "Both A and C"],
      answer: 3
    },
    {
      question: "What is the output of 'typeof NaN'?",
      options: ["number", "undefined", "string", "object"],
      answer: 0
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function myFunction()", "function:myFunction()", "create myFunction()", "myFunction() = function"],
      answer: 0
    },
    {
      question: "Which method is used to access HTML elements using JavaScript?",
      options: ["getElementById()", "getElementsByClassName()", "Both A and B", "querySelector()"],
      answer: 2
    },
    {
      question: "What does JSON stand for?",
      options: ["JavaScript Object Notation", "JavaScript Online Notation", "JavaScript Object Node", "None of the above"],
      answer: 0
    },
    {
      question: "What will be the output of the following code: console.log(0.1 + 0.2 === 0.3)?",
      options: ["true", "false", "undefined", "NaN"],
      answer: 1
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["=", "==", "===", ":="],
      answer: 0
    },
    {
      question: "How do you write an if statement in JavaScript?",
      options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
      answer: 1
    },
    {
      question: "Which of the following is a JavaScript framework?",
      options: ["React", "Django", "Rails", "Flask"],
      answer: 0
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: ["Refers to the current object", "Refers to the global object", "Refers to the parent object", "None of the above"],
      answer: 0
    },
    {
      question: "How can you add a comment in a JavaScript?",
      options: ["// comment", "/* comment */", "// comment or /* comment */", "All of the above"],
      answer: 3
    },
    {
      question: "What will happen if you use '=== ' operator in JavaScript?",
      options: ["It checks both value and type", "It checks only value", "It does not check type", "None of the above"],
      answer: 0
    },
    {
      question: "What is a closure in JavaScript?",
      options: ["A way to create private variables", "A function inside another function", "Both A and B", "None of the above"],
      answer: 2
    },
    {
      question: "What is the use of the 'break' statement?",
      options: ["To exit a loop", "To skip an iteration", "To terminate a function", "None of the above"],
      answer: 0
    },
    {
      question: "How do you declare a constant variable in JavaScript?",
      options: ["const myVar;", "var myVar;", "let myVar;", "constant myVar;"],
      answer: 0
    },
    {
      question: "Which of the following methods can be used to convert a string into a number?",
      options: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
      answer: 3
    },
    {
      question: "Which method is used to remove the last element from an array?",
      options: ["pop()", "shift()", "unshift()", "push()"],
      answer: 0
    },
  ],
  Python: [
    {
      question: "What is the correct file extension for Python files?",
      options: [".py", ".pyt", ".python", ".pt"],
      answer: 0
    },
    {
      question: "Which of the following is a valid variable name in Python?",
      options: ["my_var", "my-var", "my var", "my@var"],
      answer: 0
    },
    {
      question: "Which operator is used to multiply numbers in Python?",
      options: ["*", "x", "multiply", "None of the above"],
      answer: 0
    },
    {
      question: "What will be the output of print(type([]))?",
      options: ["<class 'list'>", "<class 'dict'>", "<class 'tuple'>", "<class 'set'>"],
      answer: 0
    },
    {
      question: "How do you create a function in Python?",
      options: ["def myFunction():", "function myFunction():", "create myFunction():", "myFunction(): def"],
      answer: 0
    },
    {
      question: "Which of the following is used to indicate a block of code in Python?",
      options: ["Indentation", "{ }", "[ ]", "( )"],
      answer: 0
    },
    {
      question: "What is the output of 2 ** 3?",
      options: ["6", "8", "9", "10"],
      answer: 1
    },
    {
      question: "Which of the following is not a built-in data type in Python?",
      options: ["List", "Dictionary", "Tuple", "Class"],
      answer: 3
    },
    {
      question: "How do you create a list in Python?",
      options: ["[]", "{}", "()", "<>"],
      answer: 0
    },
    {
      question: "Which of the following functions is used to read a file in Python?",
      options: ["open()", "read()", "get()", "file()"],
      answer: 0
    },
    {
      question: "How can you remove an item from a list by its value?",
      options: ["list.remove(value)", "list.delete(value)", "list.pop(value)", "list.discard(value)"],
      answer: 0
    },
    {
      question: "What is the correct way to import a module in Python?",
      options: ["import module_name", "include module_name", "using module_name", "require module_name"],
      answer: 0
    },
    {
      question: "What is the output of print(0.1 + 0.2 == 0.3)?",
      options: ["True", "False", "None", "Error"],
      answer: 1
    },
    {
      question: "Which of the following is used to start a loop in Python?",
      options: ["for", "while", "Both A and B", "None of the above"],
      answer: 2
    },
    {
      question: "What does the len() function do?",
      options: ["Returns the number of items in an object", "Returns the last element", "Returns the length of a string only", "None of the above"],
      answer: 0
    },
    {
      question: "How do you write a comment in Python?",
      options: ["// comment", "# comment", "/* comment */", "<!-- comment -->"],
      answer: 1
    },
    {
      question: "Which of the following is a mutable data type in Python?",
      options: ["List", "Tuple", "String", "None of the above"],
      answer: 0
    },
    {
      question: "What is the output of print(bool('False'))?",
      options: ["True", "False", "None", "Error"],
      answer: 0
    },
    {
      question: "Which keyword is used to define a class in Python?",
      options: ["class", "def", "function", "object"],
      answer: 0
    },
    {
      question: "What is the correct way to define a dictionary in Python?",
      options: ["{}", "[]", "()", "<>"],
      answer: 0
    },
    {
      question: "What does the break statement do?",
      options: ["Exits the current loop", "Ends the program", "Jumps to the next iteration", "None of the above"],
      answer: 0
    },
  ]
};

function Quizapp() {
  const [currentSection, setCurrentSection] = useState("HTML");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [timer, setTimer] = useState(120); // Timer set to 2 minutes (120 seconds)
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]); // Track incorrect answers

  useEffect(() => {
      let timerId;
      if (timer > 0 && !showScore) {
          timerId = setInterval(() => setTimer((prev) => prev - 1), 1000);
      } else if (timer === 0) {
          setShowScore(true);
          setQuizCompleted(true); // Mark quiz as completed when timer runs out
      }
      return () => clearInterval(timerId);
  }, [timer, showScore]);

  const handleAnswerOptionClick = (index) => {
      const currentQ = questions[currentSection][currentQuestion];

      if (index === currentQ.answer) {
          setScore(score + 1);
          setFeedback("Correct!");
      } else {
          setFeedback("Incorrect!");
          setIncorrectAnswers(prev => [...prev, currentQ]); // Track the incorrect answer
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions[currentSection].length) {
          setCurrentQuestion(nextQuestion);
      } else {
          setShowScore(true);
          setQuizCompleted(true);
          storeScore(score);
      }

      setTimeout(() => {
          setFeedback("");
      }, 1000); // Feedback duration
  };

  const handleRestartQuiz = () => {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
      setFeedback("");
      setTimer(120); // Reset timer to 2 minutes
      setQuizCompleted(false);
      setIncorrectAnswers([]); // Reset incorrect answers
  };

  const handleSectionChange = (section) => {
      setCurrentSection(section);
      handleRestartQuiz(); // Reset quiz when changing section
  };

  const storeScore = (score) => {
      const previousScores = JSON.parse(localStorage.getItem("quizScores")) || {};
      previousScores[currentSection] = score;
      localStorage.setItem("quizScores", JSON.stringify(previousScores));
  };

  const renderConfetti = () => {
      if (quizCompleted && score >= questions[currentSection].length * 0.8) {
          return (
              <>
                  <Confetti width={window.innerWidth} height={window.innerHeight} />
                  <div className="victory-dance">
                      🎉 Congratulations! You did great! 🎉
                  </div>
              </>
          );
      } else {
          return (
            <>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <div className="victory-dance">
            💔 Better luck next time 💔
            </div>
        </>
          );
      }
  };

  const generateSuggestions = () => {
      let suggestions = [];
      incorrectAnswers.forEach((question) => {
          if (question.section === "HTML") {
              suggestions.push("Read more about HTML tags and elements.");
          } else if (question.section === "JavaScript") {
              suggestions.push("Brush up on JavaScript syntax and operators.");
          } else if (question.section === "Python") {
              suggestions.push("Study Python data types and loops.");
          }
      });

      return suggestions;
  };

  return (
      <div className="quiz-app">
          <h1 style={{ color: 'coral' }}>{currentSection} Beginner Questions</h1>
          <div className="timer">Time left: {timer} seconds</div>
          <div className="section-buttons">
              <button style={{ backgroundColor: 'wheat' }} onClick={() => handleSectionChange("HTML")}>HTML</button>
              <button style={{ backgroundColor: 'purple' }} onClick={() => handleSectionChange("JavaScript")}>JavaScript</button>
              <button style={{ backgroundColor: 'grey' }} onClick={() => handleSectionChange("Python")}>Python</button>
          </div>
          {showScore ? (
              <div className="score-section">
                  <h2>Your Score: {score} / {questions[currentSection].length}</h2>
                  <p style={{ color: "red", fontSize: '1.2rem' }}>{Math.floor((score / questions[currentSection].length) * 100)}%</p>
                  <button onClick={handleRestartQuiz}>Restart Quiz</button>
                  {renderConfetti()}
                  {/* Display Suggestions */}
                  <div>
                      <h3>Suggestions for Improvement:</h3>
                      <ul>
                          {generateSuggestions().map((suggestion, index) => (
                              <li key={index}>{suggestion}</li>
                          ))}
                      </ul>
                  </div>
              </div>
          ) : (
              <div className="question-section">
                  <h2 style={{ color: 'blue' }}>
                      Question {currentQuestion + 1}/{questions[currentSection].length}
                  </h2>
                  <p style={{ color: 'coral', fontSize: '1.4rem' }}>{questions[currentSection][currentQuestion].question}</p>
                  <div className="options-section">
                      {questions[currentSection][currentQuestion].options.map((option, index) => (
                          <button
                              key={index}
                              onClick={() => handleAnswerOptionClick(index)}
                          >
                              {option}
                          </button>
                      ))}
                  </div>
                  <div style={{ color: 'coral' }} className="feedback">{feedback}</div>
              </div>
          )}
      </div>
  );
}

export default Quizapp;