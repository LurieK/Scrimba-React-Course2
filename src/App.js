import "./styles.css";
import Jokes from "./Jokes.js"
import jokesData from "./JokesData"

export default function App() {
  const jokeElements= jokesData.map((joke)=>{
    return <Jokes 
          setup={joke.setup}
          punchline={joke.punchline}
          inPun={joke.isPun}
    
    />
  })

  return (
    <div>
      {jokeElements}
      </div>
  );
}
