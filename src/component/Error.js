import React,{useState,useEffect} from 'react';
import {Button} from 'antd';

export default function Error(props) {
    const [times,setTimes] = useState(3);

    useEffect(()=>{
        const $timer = setInterval(() => {
            if (times === 0) {
                props.history.replace('/recommend')
            }else {
                setTimes(a=>a-1)
            }
        }, 1000);
        return ()=>{
            clearInterval($timer)
        }
    },[times,props.history])
     
    return (
        <div>
            404 Error<br/>
            <Button type='primary' onClick={()=>{
                props.history.replace('/recommend')
            }} >{times}跳转到首页</Button>
        </div>
    )
}
