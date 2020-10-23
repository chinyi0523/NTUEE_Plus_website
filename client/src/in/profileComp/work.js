import React from 'react';
import data from "../../images/public_images.json";
export default ({work,handleChange,rmOccupation,editmode}) => { 
    console.log({editmode})
    console.log(work)
    return (
        work.map(({O,P,C,show},index)=>{
            return (
            <tr>
                    <td>
                        <input className="Profile_info_table_input Profile_info_input"
                            readOnly={editmode?false:true}
                            value={O}
                            onChange={handleChange(index,"O")}
                        />
                    </td>
                    <td>
                        <input className="Profile_info_table_input Profile_info_input"
                            readOnly={editmode?false:true}
                            value={P}
                            onChange={handleChange(index,"P")}
                        />
                    </td>
                    <td>
                        <input className="Profile_info_table_input Profile_info_input"
                            readOnly={editmode?false:true}
                            value={C}
                            onChange={handleChange(index,"C")}
                        />
                    </td>
                    <td>
                        <button id="Profile_removeOccupation"
                            onClick={rmOccupation(index)}
                        >
                            <img src={data.remove_icon}
                                className="Profile_remove_icon"
                                alt="remove_icon"
                            />
                        </button>
                    </td>
                </tr>
            )
        })
    )       
}