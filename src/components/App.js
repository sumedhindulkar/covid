import './App.css';
import axios from "axios"
import data1, {data2} from "./data"
import React, {useState, useEffect} from "react";
function App() {
  const axios = require('axios')
    const [stData, setStData] = useState(null)
    const [value, setValue] = useState(false)
    useEffect(() => {
    //   axios.get("https://api.covid19india.org/state_district_wise.json")
    //     .then(res =>{
    //         setStData(res.data)
    //         setValue(true)
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })
    const fetctData = async (e) =>{
        const data = await axios.get("https://api.covid19india.org/state_district_wise.json")
        .catch(err=>{
            console.log(err);
        })
        setStData(data.data)
        console.log(stData+"      <BR>      "+data)
    }
    fetctData();
    },[])
console.log(Object.keys(data2))
console.log(Object.values(data2))
    return (
        <div>
            {stData && Object.keys(stData).map((keyName, i)=>{
                return <h3>{JSON.stringify(keyName)}</h3>
            })}
            {/* {Object.keys(data2).map((key, i) =>{
                return <h2>{JSON.stringify(key)}</h2>
            })} */}
            hello
        </div>
    )
}

export default App;
