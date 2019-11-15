
import { Modal } from 'antd';
import React, { useState, useEffect } from 'react'


const UpdataModal = props => {
    const { data } = props

    const [name, setName] = useState(data.name)
    const [description, setDescription] = useState(data.description)
    const [price, setPrice] = useState(data.price)
    const [quantity, setQuantity] = useState(data.quantity)
    const [imgUrl, setImgurl] = useState(data.imgUrl)

    const hendleImg = e => {
        const file = e.target.filles[0]
        const reader = new FileReader()

        reader.onload = (e) => {
            setImgurl(e.target.result)
        }
        if (file) {
            reader.readAsDataURL(false)
        }
    }
    useEffect(() => {
        if (data.name !== name)
            setName(data.name)
        if (data.description !== description)
            setDescription(data.description)
        if (data.price !== price)
            setPrice(data.price)
        if (data.quantity !== quantity)
            setQuantity(data.quantity)
    })
    return (
        <Modal
            title='Updata Product'
            visible={props.visible}
            onOk={() => { }}
            onCancel={props.onCancel} >

            <div className='managecenter'>
                <div className='form-product'>
                    <h3>add new product</h3>
                    <label>
                        <p>Name</p>
                        <input type='text' onChange={(e) => setName(e.target.value)} value={name} />
                    </label>
                    <label>
                        <p>Description</p>
                        <textarea onChange={(e) => setDescription(e.target.value)} value={description} />
                    </label>
                    <label>
                        <p>Price</p>
                        <input type='number' onChange={(e) => setPrice(+e.target.value)} value={price} />
                    </label>
                    <label>
                        <p>Quantity</p>
                        {/* ///add + to int */}
                        <input type='number' onChange={(e) => setQuantity(+e.target.value)} value={quantity} />
                    </label>
                    <label>
                        <p>Img</p>
                        <input type='file' onChange={hendleImg} />
                    </label>
                </div>
                <style jsx>{`
                    .managecenter{
                            display: flex;
                            justify-content: center;
                        }
                        .form-product{
                            max-width: 300px;
                            border: 1px solid grey;
                            display: inline-flex;
                            flex-direction: column;
                            padding: 10px;
                            border-radius: 20px;
                        }
                        button{
                            width: 60px;
                            height: 30px;
                            border: none;
                            border-radius: 20px;
                            background-color: #00cccc;
                            outline: none;
                        }
                        button:hover{
                            width: 60px;
                            height: 30px;
                            border: none;
                            border-radius: 20px;
                            background-color: grey;
                            outline: none;
                        }
                        p{
                            margin: 0 0 5px 0;
                        }
                        input{
                            margin-bottom: 5px;
                            border-radius: 3px;
                            border: 1px solid grey;
                            padding: 4px;
                            min-width: 250px;
                        }
                        textarea{
                            min-width: 250px;
                            margin-bottom: 5px;
                            border-radius: 3px;
                            border: 1px solid grey;
                            padding: 4px
                        }
                        
                        `}</style>

            </div>
        </Modal>
    )

}
export default UpdataModal