import React, { useState } from 'react';

import { Level_Two } from './LevelTwo';
import LevelTwoName from './LevelTwoName';

const LevelTwoRel = ({ value, name, item }) => {
    
    const [ show, setShow ]= useState(true);
    
    const [ itemName, setItemName ] = useState("");
    // const [ currentNode, setCurrentNode ]= useState("");

    return(
        <div>
            <ul>    
            {
                Level_Two.id === value.nodeid ?
                <div>
                    {
                        // Level Two Rel
                        Level_Two.termsrelation.map((secItem, i) =>                                                 
                        <div key={i}>
                            <li > 
                                {
                                    show?
                                    <>
                                        <i className="fa fa-plus-square-o" aria-hidden="true" onClick={ () => { 
                                                            // console.log("item.rel => ", item.rel)
                                                            // setCurrentNode(secItem.rel)
                                                            setItemName(secItem.rel) 
                                                            if ( show === true ){
                                                                setShow(!show)
                                                            }
                                                    
                                                    }} ></i>  
                                                    {
                                                        !show?
                                                        <i className="fa fa-folder-o"  aria-hidden="true" ></i> :
                                                        null
                                                    }                                  
                                                <label> {secItem.rel} </label>
                                    </>:
                                    <div>
                                        <i className="fa fa-minus-square-o" aria-hidden="true" onClick={ () => { 
                                                            // setCurrentNode(secItem.rel)
                                                            setItemName(secItem.rel) 
                                                            if ( show === true ){
                                                                setShow(!show)
                                                            }
                                                          
                                         }} ></i>
                                        <i className="fa fa-folder-open-o"  aria-hidden="true" ></i> 
                                           <label> {secItem.rel} </label>
                                    </div>
                                }                                
                        
                            </li>                                                        
                            {
                                !show?
                                <LevelTwoName value={ secItem } item={ itemName }/>  :
                                null
                            }                          
                        </div>
                    )}
                </div>
                :null
                }
            </ul>
        </div>
    )
}

export default LevelTwoRel;