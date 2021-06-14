import React from 'react';

const LevelTwoName = ({value, item}) => {
    
    return(
        <div>
            <ul>
                {
                    // Level Two Name
                    value.rel === item?
                    <div>
                        {
                            value.terms.map((secSuperItem) => 
                            <div key={secSuperItem.nodeid}>
                                <li > 
                                    <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                                    <i className="fa fa-folder-o" aria-hidden="true"></i> 

                                    <label > { secSuperItem.formated_name } </label> 
                                </li>
                            </div>
                        )}                                               
                    </div>:
                    null
                }
            </ul>
        </div>
    )
}

export default LevelTwoName;