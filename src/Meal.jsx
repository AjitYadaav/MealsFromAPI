import { useEffect, useState } from "react";
import axios from 'axios'
import './App.css'

const Meal = () =>{
    const [item,setItems] = useState([]);
    useEffect(() =>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((response)=>{
            setItems(response.data.meals);
        })
    },[]) // [] -> means the effect runs only once when the component mounts

    return(
        <div>
            
            <div className="container">
            {item.map((data)=>{
                return(
              
                        <div className="items" key={Math.random()}>
                            <section>
                                <img src={data.strMealThumb} alt="strMealThumb" className="meal_img"/>
                                <hr />
                                <div style={{display:"flex", justifyContent:"space-between"}}><p style={{fontSize:"1.4rem"}}>{data.strMeal}</p>
                                <p style={{fontWeight:"bold"}}>{data.idMeal}</p></div>
                            </section>
                        </div>
        
                )
            })}

        </div>
        </div>

    )
}

export default Meal;