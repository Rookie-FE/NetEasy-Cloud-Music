import axios from './index';

function Login(){
    return axios.get('/login/cellphone',{
        params: {
            phone: 18656665666,
            password: 'zhenghang'
        }
    }).then(data=>{
        if (data.code !== 200) throw new Error('登陆失败');
        return data;
    })  
}

export default {
    Login,
}