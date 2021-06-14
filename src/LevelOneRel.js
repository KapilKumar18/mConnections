import React, { useState } from "react";
import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import { Level_One } from './LevelOne';
import LevelOneName from "./LevelOneName";


const LevelOneRel = () => {

    const [ show , setShow ] = useState(true);
    const [ itemName, setItemName ] = useState("");     
    
    // const [ currentNode, setCurrentNode ]= useState("");
    
    return (
        <div>

            <p > 
                <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                <i className="fa fa-folder-open-o"  aria-hidden="true"></i> 
                { Level_One.formated_name } 
            </p>
            {
            
            Level_One.child === true?
            
            <ul>
                {
                    Level_One.termsrelation.map((item, i)=>
                    <div key={i}>
                            {/* Level One Rel */}
                            <li> 
                                {
                                    show ?
                                    <div>
                                        <i className="fa fa-plus-square-o" aria-hidden="true" onClick={ () => { 
                                                            setItemName(item.rel) 
                                                            // setShow(!show);
                                                            if ( show === true ){
                                                                setShow(!show)
                                                            }
                                                    }}> </i>
                                        <i className="fa fa-folder-o"  aria-hidden="true"></i> 
                                        <label> {item.rel}  </label>
                                    </div> :
                                    <div>
                                        <i className="fa fa-minus-square-o" aria-hidden="true" onClick={ () => { 
                                                            setItemName(item.rel) 
                                                            // setShow(!show);
                                                            if ( show === true ){
                                                                setShow(!show)
                                                            }
                                                    }} ></i>
                                        <i className="fa fa-folder-open-o"  aria-hidden="true" ></i> 
                                        <label> {item.rel} </label>
                                    </div>
                                }
                                {/* {item.rel}  */}
                            </li>
                                {
                                    !show?
                                        <LevelOneName value={item} item={itemName} />:
                                    null
                                }
                    </div>                            
                    )
                }
            </ul>   :
            null}           
        </div>
    )
}

export default LevelOneRel;
