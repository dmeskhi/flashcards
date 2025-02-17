import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library developed by Facebook. It follows the component based approach which helps in building reusable UI components",
  },
  {
    id: 7336,
    question: "Differentiate between Real DOM and Virtual DOM",
    answer:
      "Real: updates slow, can directly update HTML, creates new DOM element updates, DOM manipulation is expensive, too much memory waste. Virtual: updates faster, can't directly update HTML, update the JSX if element updates, DOM manipulation is easy, no memory wast.",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
  {
    id: 2023,
    question: "What are the features of React?",
    answer:
      "It uses the virtual DOM instead of the real DOM. It uses server-side rendering. It follows uni-directional data flow or data binding.",
  },
  {
    id: 2024,
    question: "Differentiate between states and props.",
    answer:
      "Props: Parent component can change value, Changes inside child components. State: Changes inside component",
  },
  {
    id: 2025,
    question: "How can you update the state of a component?",
    answer: "State of a component can be updated using this.setState().",
  },
];

function Header() {
  return <h1>Simple React Flashcard Project</h1>;
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
