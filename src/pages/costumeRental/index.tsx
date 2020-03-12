import React, { useState, useEffect } from 'react'
import Swiper from 'reactjs-swiper'
import {RightOutlined } from '@ant-design/icons';
import Header from '../../components/head'
import CategoryBox from '../../components/category'
import './costumeRental.scss'
// const Swiper = require('reactjs-swiper');

let switchCount: number = 0

const swiperOptions = {
        preloadImages: true,
        autoplay: 1000,
        showPagination: true,
        autoplayDisableOnInteraction: false
};
const items = [{
  image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e909ef0e50960f61a730380013bc960a.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
  title: '图片1',
  link: 'http://jd.com'
}, {
  image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61d62b700037a2d1f5b0d8c85af90b6c.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
  title: '图片2',
}];

const CostumeRental = () => {
    //   const [name, setName] = useState<string>('')
    //   useEffect(() => {
    //     switchCount += 1

    //   })

    return (
        <div className='clothesWrap'>
           <Header/>
           <div className='swiperList'>
            <Swiper swiperOptions={swiperOptions}  items={items} className="swiper" />
            <ul className='site-category'>
              <li className='category-list'>
                帽子
                <RightOutlined />
                <div className='child isFocus'>
                 <li>
                   <img src="https://static.zara.cn/photos///2020/V/0/1/p/2365/487/800/3/w/400/2365487800_1_1_1.jpg?ts=1583498997686" alt=""/>
                   <p>大衣风衣</p>
                 </li>
                 <li>
                   <img src="https://static.zara.cn/photos///2020/V/0/1/p/2365/487/800/3/w/400/2365487800_1_1_1.jpg?ts=1583498997686" alt=""/>
                   <p>西装</p>
                 </li>
                 <li>
                   <img src="https://static.zara.cn/photos///2020/V/0/1/p/2365/487/800/3/w/400/2365487800_1_1_1.jpg?ts=1583498997686" alt=""/>
                   <p>夹克外套</p>
                 </li>
             
                </div>
              </li>
              <li className='category-list'>衣服
              <div className='child isFocus'>
                 <li>
                   <img src="https://static.zara.cn/photos///2020/V/0/1/p/2365/487/800/3/w/400/2365487800_1_1_1.jpg?ts=1583498997686" alt=""/>
                   <p>大衣风衣</p>
                 </li>
                 <li>
                   <img src="https://static.zara.cn/photos///2020/V/0/1/p/2365/487/800/3/w/400/2365487800_1_1_1.jpg?ts=1583498997686" alt=""/>
                   <p>西装</p>
                 </li>
                 <li>
                   <img src="https://static.zara.cn/photos///2020/V/0/1/p/2365/487/800/3/w/400/2365487800_1_1_1.jpg?ts=1583498997686" alt=""/>
                   <p>夹克外套</p>
                 </li>
                 <li>
                   <img src="https://static.zara.cn/photos///2020/V/0/1/p/2365/487/800/3/w/400/2365487800_1_1_1.jpg?ts=1583498997686" alt=""/>
                   <p>衬衫|上衣</p>
                 </li>
                 <li>
                   <img src="https://static.zara.cn/photos///2020/V/0/1/p/2365/487/800/3/w/400/2365487800_1_1_1.jpg?ts=1583498997686" alt=""/>
                   <p>卫衣|T</p>
                 </li>
                 <li>
                   <img src="https://static.zara.cn/photos///2020/V/0/1/p/2365/487/800/3/w/400/2365487800_1_1_1.jpg?ts=1583498997686" alt=""/>
                   <p>大衣风衣</p>
                 </li>
                 <li>
                   <img src="https://static.zara.cn/photos///2020/V/0/1/p/2365/487/800/3/w/400/2365487800_1_1_1.jpg?ts=1583498997686" alt=""/>
                   <p>大衣风衣</p>
                 </li>
                </div>
              </li>
              <li className='category-list'>鞋帽</li>
              <li className='category-list'>配饰</li>
              <li className='category-list'>箱包</li>
            </ul>
           </div>
            {/* <p>Current Name: { name }</p>
      <p>switchCount: { switchCount }</p>
      <button onClick={() => setName('Jack')}>Jack</button>
      <button onClick={() => setName('Marry')}>Marry</button> */}
        <CategoryBox></CategoryBox>
        </div>
    )
}

export default CostumeRental;
