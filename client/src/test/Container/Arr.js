import { startSession } from 'mongoose';
import React, { Component , useState} from 'react';

const Arr = (val,setVal)=>{
    setVal(['first item'])
    return (<>
        <button onClick={e=>{setVal([...val,''])}}>add</button>
        <ol>
            {val.map((item,index)=>{
                return (
                    <li>
                        <input value={item} onChange={e=>{
                            const fakeList = val
                            fakeList[index] = e.target.value
                            setVal([...fakeList])
                        }}/>
                    </li>
                )
            })}
        </ol>
    </>)
}

export default Arr