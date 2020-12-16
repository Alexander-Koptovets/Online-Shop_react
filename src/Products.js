import React from 'react'
import './App.css';
import Field from './AddProduct'

const Products = () => {
    return (
        <div className='main-wrapper'>
            <div className='main-header'>
                <p className='main-header-text'>Products</p>
            </div>
            <div>
                <Field />
            </div>
        </div>
    )
}

export default Products; 