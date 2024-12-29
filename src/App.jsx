import Meal from "./Meal";

const App = () =>{

  return(
    <div>
      <h1 style={{textAlign:"center", color:"red" , textDecoration:"underline", textDecorationColor:"purple"}}>React UseEffect Hook Project</h1>
      <p >From this small project i learned how to <i style={{textDecoration:"underline", fontWeight:"bold"}}>fetch API using axios </i>, and how to use useEffect hook , what is the use of dependencies array in he useSEffect hook and so on ...</p>
      <hr />

       <Meal/>
       
    </div>
  )
}

export default App;


