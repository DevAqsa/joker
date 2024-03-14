import { useEffect, useState } from "react";

function Joker() {
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke =  async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        
        };

    
    
   useEffect(() => {async function getfirstjoke(){
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
   }
    getfirstjoke();
   } ,[]);


   useEffect(() => {
     alert("Hey! Wel come to my Joker App")
   }, [])
   

   useEffect(() => {
    alert("New Joke is here");
     
   }, [joke])
   

  return (
    <div> 
    <h2>useEffect Hook in Reactjs</h2>
    <h2>Joke!</h2>
    <h2>{joke.setup}</h2>
    <h2>{joke.punchline}</h2>
    <button onClick={getNewJoke}>New Joke</button>
    </div>
  )
  }

export default Joker