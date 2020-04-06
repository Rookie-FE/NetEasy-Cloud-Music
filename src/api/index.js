import axios from 'axios';
// axios默认配置
axios.defaults.baseURL = 'http://101.132.177.123:4001';
// 超时时间
axios.defaults.timeout = 10000;
// 跨域请求中允许携带资源凭证（例如cookie信息）
axios.defaults.withCredentials = true;
// 设置请求头：请求参数的格式（post系列中传递给服务器数据的格式一般以 x-www-form-urlencoded 格式为主）
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

// 设置请求拦截器 （只针对post系列有用）：把请求主题传递给服务器的内容进行拦截，把内容格式变成x-www-form-urlencoded格式
axios.defaults.transformRequest = function anonymous(data) {
    if (!data) return data;
    let str = ``;
    const keys = Object.keys(data);
    keys.forEach((item) => {
        str += `&${item}=${data[item]}`;
    });
    return str.substring(1);
};
// 设置响应拦截器:
axios.interceptors.response.use(
    function anonymous(response) {
        return response.data;
    },
    function anonymous(error) {
        throw new Error(error);
    },
);
// 配置什么http状态码算成功
axios.defaults.validateStatus = function anonymous(status) {
    return status >= 200 && status < 300; // 默认 200-300
};

export default axios;
