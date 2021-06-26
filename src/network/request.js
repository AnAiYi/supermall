// 5.封装网络请求 以后发送网络请求只需要面向此文件即可 尽管其他框架不在更新与维护后期处理也比较简单
import axios from 'axios'


// 方式四(推荐)
export function request (config){//只需调用request即可发送网络请求 传入success 和failure 是将请求到的数据回调出去
  // 某些请求需要使用特定的baseURL或者timeout或者content-Type等 这个时候，我们就可以创建新的实例，并且传入属于该实例的配置信息
  // 1.创建axios的实例（不使用全局axios）
  const instance = axios.create({
   baseURL:'http://123.207.32.32:8000',
   timeout: 5000
 })

  // axios的拦截器
  // 1.请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    // 拦截后处理场景:
    // 1.config中的一些信息不符合服务器的要求，需要将数据进行处理再发送出去
    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    // 3.某些网络请求（比如登录 token）,必须携带特殊信息

    return config;//拦截后将数据返回出去


  },err =>{
    console.log(err);
  });
  // 2.响应拦截
  instance.interceptors.response.use(res=>{
    console.log(res);
    return res.data;
  },err =>{
    console.log(err);
  })

   // 2.发送真正的网络请求
   return instance(config)//本身返回的就是一个promise
 }

