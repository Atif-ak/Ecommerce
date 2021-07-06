import React,{useEffect} from 'react'
import axios from "axios";
import './Home.css'
import CardHome from '../Card/CardHome';



function Home() {
    
    return (
        <div>
            <div className="home">
             
           <CardHome/>
{/*            
                 <div className="covid-button">
               <a href="https://covid-19-xi-one.vercel.app/">  Covid</a>
               </div> */}
              
             
            
          
           
            </div>
                      

        </div>
    )
}

export default Home
