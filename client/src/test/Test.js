import React, { Component , useState} from 'react';
import axios from 'axios'

const handleFile = async (url,states)=>{
    const data = new FormData()
    states.forEach(({key,val,file})=>{
        if(!file) data.append(key,val)
        else data.append(key,file)
    })
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    return await axios.post(url,data,config)
}
const handleSubmit = async (url,states)=>{
    const data = {}
    states.forEach(({key,val})=>{
        data[key]
    })
    return await axios.post(url,data)
}

const Test = ()=>{
    const [url,setUrl] = useState('testRoute')
    const [states,setStates] = useState([{key:"KEY",val:"VAL"}])
    const [withFile,setWithFile] = useState(false)
    return(
        <div style={{'background-color':'#BBB'}}>
            <div name='toSend'>
                <label>/api/</label>
                <input value={url} onChange={(e)=>{setUrl(e.target.value)}}/>
                <button onClick={async (e)=>{
                    let res;
                    if(withFile) res = await handleFile(`/api/${url}`,states)
                    else res = await handleSubmit(`/api/${url}`,states)
                    console.log(res)
                }}>submit</button>
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
                            <input type="file"
                                onChange={(e)=>{
                                    const fakeList = states
                                    fakeList[index].file = e.target.files[0]
                                    fakeList[index].val = e.target.files[0].name
                                    console.log(e.target.files[0])
                                    setStates([...fakeList])
                                    setWithFile(true)
                                }}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Test