import React, { Component , useState} from 'react';

const Test = ()=>{
    const [url,setUrl] = useState('testRoute')
    const [states,setStates] = useState([{key:"KEY",val:"VAL"}])
    const [withFile,setWithFile] = useState(false)
    return(
        <div style={{'background-color':'#BBB'}}>
            <div name='toSend'>
                <label>/api/</label>
                <input value={url} onChange={(e)=>{setUrl(e.target.value)}}/>
                <button>submit</button>
            </div>
            <button onClick={(e)=>{setStates([...states,{key:'',val:''}])}}>addItem</button>
            <ul>
                {states.map(({key,val},index)=>{
                    return (
                        <li>
                            <input value={key} onChange={(e)=>{
                                const fakeList = states
                                fakeList[index].key = e.target.value
                                setStates([...fakeList])
                            }}/>
                            <input value={val} onChange={(e)=>{
                                const fakeList = states
                                fakeList[index].val = e.target.value
                                setStates([...fakeList])
                            }}/>
                            <button>add file</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Test