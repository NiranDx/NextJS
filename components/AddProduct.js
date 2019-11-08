import React, { useState } from 'react'
const AddProduct = props => {

    // retrun is arr
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [imgUrl, setImgurl] = useState('')

    const handleCreate = () => {
        props.getProduct({ name, description, price, quantity, imgUrl })

    }
    return (
        <div className='container'>
            <div className='managecenter'>
                <div className='form-product'>
                    <h3>add new product</h3>
                    <label>
                        <p>Name</p>
                        <input type='text' onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        <p>Description</p>
                        <textarea onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <label>
                        <p>Price</p>
                        <input type='number' onChange={(e) => setPrice(+e.target.value)} />
                    </label>
                    <label>
                        <p>Quantity</p>
                        {/* ///add + to int */}
                        <input type='number' onChange={(e) => setQuantity(+e.target.value)} />
                    </label>
                    <label>
                        <p>Img</p>
                        <input type='file' onChange={(e) => setImgurl(e.target.value)} />
                    </label>
                    <button onClick={handleCreate}>Create</button>

                   
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
        </div>
    )
}
export default AddProduct