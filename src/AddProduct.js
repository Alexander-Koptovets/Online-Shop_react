import React from 'react'
import './App.css' 

class ProductCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            photo: 'https://avatars.mds.yandex.net/get-zen_doc/127081/pub_5b327d53069d2a00a9e51136_5b327e88347c6f00a8db0542/scale_1200',
            description: 'Describe the product',
            price: 'Indicate the price', 
            sale: null,
            daySale: null, 
            discountPrice: null, 
            lastDay: null, 
        };
        this.onEdit = this.onEdit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.changeDescription = this.changeDescription.bind(this); 
        this.price = this.price.bind(this);
        this.percent = this.percent.bind(this);
        this.days = this.days.bind(this);
        this.photo = this.photo.bind(this);
    }
    photo() {
        let value = this.refs.photo.value;

        this.setState({photo: value})
    }

    days() {
        let value = this.refs.date.value;
        this.setState({lastDay: value})
    }

    percent() {
        let value = this.refs.percent.value;        
        let totalValue = this.state.price - (this.state.price / 100 * value)

        this.setState({sale: value});
        this.setState({discountPrice: totalValue});
    }

    price() {
        let value = this.refs.price.value;
        this.setState({price: value})
    }

    changeDescription() {
        let value = this.refs.description.value;
        this.setState({description: value})
    }

    onEdit() {
        this.setState({edit: true})
    }

    save() {
        this.props.update(this.refs.newText.value, this.props.index);
        this.setState({edit: false})
    }

    remove() {
        this.props.deleteBlock(this.props.index)
    }

    render() {
        return (
            <div className='product-cart'>
                {!this.state.edit 
                ? <div className='product-info'>
                    <div className='img-product-container'>
                        <img className='img-product' src={this.state.photo}/>
                    </div>
                    <div className='product-description'>
                        <p className='name'>{this.props.children}</p> 
                        <p className='description'>{this.state.description}</p>
                        <p className='price'>{this.state.price}</p>

                        {this.state.lastDay
                        ? <div>
                            <span className='head-text'>Sale:</span>
                            <p className='sale'>{this.state.sale}</p>
                            <span className='head-text'>Discount price:</span>
                            <p className='discount-price'>{this.state.discountPrice}</p>
                            <span className='head-text'>Discount ends in</span>
                            <p className='last-day'>{this.state.lastDay}</p>
                          </div>
                          : null}
                        <div className='btn-product-cart'>
                            <button className='btn-edit' onClick={this.onEdit}>Edit</button> 
                            <button className='btn-remove' onClick={this.remove}>Remove</button>
                        </div>
                    </div>
                  </div>
                : <div className='edit-block'>
                    <textarea ref='photo' placeholder='Enter photo URL' onChange={this.photo}></textarea>
                    <textarea ref='newText' defaultValue={this.props.children}></textarea>
                    <textarea ref='description' placeholder='Description' onChange={this.changeDescription}></textarea>
                    <textarea ref='price' placeholder='Enter price' onChange={this.price}></textarea>
                    <textarea ref='percent' placeholder='Discount percentage' onChange={this.percent}></textarea>
                    <input className='input-date' ref='date' type='date' onChange={this.days}/>
                    <button className='btn-save' onClick={this.save}>Save</button>
                  </div>} 
            </div>
        )
    }
}

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            massage: []
        };
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        this.add = this.add.bind(this, 'New Product');
    }
    add(text) {
        let arr = this.state.massage;
        arr.push(text);
        this.setState({massage: arr});
    }

    delete(i) {
        let arr = this.state.massage;
        arr.splice(i, 1);
        this.setState({massage: arr});
    }

    update(text, i) {
        let arr = this.state.massage;
        arr[i] = text;
        this.setState({massage: arr});
    }

    render() {
        return (
            <div>
                <div className='add-product-cart'>
                    <button 
                        className='btn-add-product-cart'
                        onClick={this.add}>
                            Add product
                    </button>
                </div>
                <div className='new-products'>
                    {
                    this.state.massage.map((item, i) => 
                        <ProductCart key={i} index={i} update={this.update} deleteBlock={this.delete}>{item}</ProductCart>)
                    }
                </div>
            </div>
        )
    }
}

export default Field;