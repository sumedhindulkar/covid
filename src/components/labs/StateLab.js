import React, {useState, useEffect} from "react";
import labData from "./medical"
function StateL() {
    const [query, setQuery] = useState("Delhi");
    const getQuery = (props) => {
        console.log(props.target.innerHTML)
        setQuery(props.target.innerHTML)
    }
    return (
        <div>
          {
                labData.map(item =>{
                    return( 
                        <button onClick={getQuery} value={item.state_or_UT}>
                            {item.state_or_UT}
                        </button>
                    );
                })
            }
        <h1 className="text-center">{query}</h1>
            {query && labData.map(item => {
                  return (
                    <div>
                    <table>
                        {item.state_or_UT == query &&
                            <>
                                <tr className="text-center">
                                    <td><h2>Goverment labs</h2></td>
                                    <td><h2>Private labs</h2></td>
                                </tr>
                            </>
                        }
                        <td>
                            {item.state_or_UT == query && item.government_labs.map(lab =>{
                                return (
                                    <div>
                                        <h3>{lab.name}</h3>
                                        <p>{lab.address}</p>
                                    </div>
                                )
                            })}
                        </td>
                        <td>
                            {item.state_or_UT == query && item.private_labs.map(lab =>{
                                return (
                                    <div>
                                        <h3>{lab.name}</h3>
                                        <p>{lab.address}</p>
                                    </div>
                                )
                            })}
                        </td>
                        </table>
                    </div>
                );
              })
            }
        </div>
    )
}
//   labData.map(item =>{
//                     return( 
//                         <div>
//                             {/* <a href={item.state_or_UT}>
//                                 {item.state_or_UT}
//                             </a>
//                             <br/> */}
                            
//                         </div>
//                     );
//                 })
export default StateL;
