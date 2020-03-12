import React, { useState, useEffect } from 'react'
import './head.scss'

let switchCount: number = 0

const Head = () => {
    //   const [name, setName] = useState<string>('')
    //   useEffect(() => {
    //     switchCount += 1
    //   })

    return (
        <div className='header'>
            <div className='logo'>
                <img src="https://www.hermes.cn/sites/all/themes/custom/hermes/img/hermes-logo.svg" alt="" />
            </div>
            <div className='links'>
                <span>服装租赁</span>
                <span>摄影拍照</span>
                <span>客照欣赏</span>
                <span>话题讨论</span>
                <span>登录|注册</span>
            </div>

            {/* <p>Current Name: { name }</p>
      <p>switchCount: { switchCount }</p>
      <button onClick={() => setName('Jack')}>Jack</button>
      <button onClick={() => setName('Marry')}>Marry</button> */}
        </div>
    )
}

export default Head
