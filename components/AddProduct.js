const AddProduct = () =>{
    return(
        <div className='container'>

                <div className='form-product'>
                    <h3>add new product</h3>
                    <label>
                        <p>Name</p>
                        <input type='text'/>
                    </label>
                    <label>
                        <p>Description</p>
                        <textarea />
                    </label>
                    <label>
                        <p>Price</p>
                        <input type='number'/>
                    </label>
                    <label>
                        <p>Quanity</p>
                        <input type='number'/>
                    </label>
                    <label>
                        <p>Price</p>
                        <input type='file'/>
                    </label>
                    <button>Create</button>
                    <style jsx>{`
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
                            min-width: 200px;
                        }
                        textarea{
                            min-width: 200px;
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