import "./styles.css";
import Jokes from "./Jokes.js"

export default function App() {
  return (
    <div className="App">
            <Jokes 
        setup="Why don't programmers like nature?"
        punchline="It has too many bugs."
      />
      <Jokes 
        setup="Why did the React component feel trapped?"
        punchline="Because it was stuck in a state."/>
      <Jokes 
        setup="How do you comfort a JavaScript bug"
        punchline="You console it!"
      />
      <Jokes 
        setup="Frontend development is like a painting that's never quite finished. Just when you think it's perfect, someone finds a spot you missed... in Internet Explorer."
      />
    </div>
  );
}
