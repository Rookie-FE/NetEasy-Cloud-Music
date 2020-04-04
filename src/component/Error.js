import React from 'react';
import {Button} from 'antd';

export default function Error(props) {
     
    return (
        <div>
            404 Error<br/>
            <Button type='primary' onClick={()=>{
                props.history.replace('/recommend')
            }} >跳转到首页</Button>
        </div>
    )
}
