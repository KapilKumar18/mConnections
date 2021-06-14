import React, { useState } from 'react';
import LevelTwoRel from './LevelTwoRel';

const LevelOneName = ({value, item}) => {
    
    const [ show, setShow ] = useState(true);
    const [ itemName, setItemName ] = useState("");
    // const [ currentNode, setCurrentNode ]= useState("");

    return(
        <div>
            <ul>    
                {
                    // Level One Name
                    value.rel === item ?
                    <div>{
                        value.terms.map((superItem) => 
                        <div key={superItem.nodeid}>
                            <li>
                                {
                                    show ?
                                    <>
                                        <i className="fa fa-plus-square-o" aria-hidden="true" onClick={ () => { 
                                                            // setCurrentNode(value.rel)
                                                            setItemName(value.rel) 
                                                            if ( show === true || show === false ){
                                                                setShow(!show)
                                                            }                                                 
                                                    }} ></i>

                                        <i className="fa fa-folder-o"  aria-hidden="true" ></i> 
                                        <label > {superItem.formated_name} </label>
                                    </>:
                                    <div>
                                        <i className="fa fa-minus-square-o" aria-hidden="true" onClick={ () => { 
                                                            // setCurrentNode(item.rel)
                                                            if ( show === true ){
                                                                setShow(!show)
                                                            }    
                                         }} ></i>
                                        <i className="fa fa-folder-open-o"  aria-hidden="true" ></i> 
                                        <label > {superItem.formated_name} </label>
                                    </div>
                                }
                            </li>
                                {
                                    !show?
                                    <LevelTwoRel value={ superItem } name={ superItem.formated_name } item={ itemName }/>:
                                    null
                                }
                        </div>
                    )}
                    </div>:
                    null
                }
            </ul>
        </div>
    )
}

export default LevelOneName;