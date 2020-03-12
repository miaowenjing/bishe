import React from 'react';
import './index.scss'

const rightList = [
    ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37dc0898c2624b4130da4631f2d9a675.jpg?thumb=1&w=234&h=300&f=webp&q=90',
    ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37dc0898c2624b4130da4631f2d9a675.jpg?thumb=1&w=234&h=300&f=webp&q=90',
    ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37dc0898c2624b4130da4631f2d9a675.jpg?thumb=1&w=234&h=300&f=webp&q=90',
    ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37dc0898c2624b4130da4631f2d9a675.jpg?thumb=1&w=234&h=300&f=webp&q=90',
    ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37dc0898c2624b4130da4631f2d9a675.jpg?thumb=1&w=234&h=300&f=webp&q=90',
    ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37dc0898c2624b4130da4631f2d9a675.jpg?thumb=1&w=234&h=300&f=webp&q=90',
    ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37dc0898c2624b4130da4631f2d9a675.jpg?thumb=1&w=234&h=300&f=webp&q=90',
    ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37dc0898c2624b4130da4631f2d9a675.jpg?thumb=1&w=234&h=300&f=webp&q=90'
]
function categoryBox() {
    return (
        <div className="categoryBox">
            <div className='left'>
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90" alt="" />
            </div>
            <div className='right'>
                {rightList.map(ele => {
                    return (
                        <li>
                            <img src={ele} alt=""/>
                        </li>
                    )

                })}
            </div>
        </div>
    );
}

export default categoryBox;
