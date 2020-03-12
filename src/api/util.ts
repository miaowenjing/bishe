import originAxios from 'axios';
import config from '../config'
import {message} from 'antd';

const axiox=originAxios.create({
    timeout:20000,
    baseURL:config.baseUrl,
    withCredentials:true,
})

 // 拦截请求
 axiox.interceptors.request.use((config) => {
    return config;
  }, (err) => {
    message.error('请求超时!');
    return Promise.reject(err);
  });
  
  // 拦截响应
  axiox.interceptors.response.use((config) => {
    // console.log(config);
    if (config.data.code !== 200) {
      message.error(config.data.desc);
    }
    return config;
  }, (err) => {
    message.error('请求失败!');
    return Promise.reject(err);
  });
  
  const axUpload = originAxios.create({
    baseURL: config.baseUrl,
    timeout: config.timeout,
    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  export function get(url:string, param:any) {
    return axiox.get(url, { params: param }).then(jsonData => jsonData.data);
  }
  
  
//   export function post(url:string, param:any) {
//     return axiox({
//         method:'post',
//         url,
//         data:param
//     })
//   }
  
  export function upload(url:string, param:any) {
    return axUpload.post(url, param).then(jsonData => jsonData.data);
  }