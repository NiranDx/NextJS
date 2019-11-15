import React from 'react'

const Productbox = props =>{
    const {id,name ,description , price ,quantity , imgUrl} = props.data
    const headleUpdata = e =>{
        props.onUpdata && props.onUpdata(id, props.data)

    }
    const headleDelete = e =>{
        props.onDelete && props.onDelete(id)

    }
    return(
        <div>
            <img src={imgUrl}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{quantity} lefts</p>
            <p>{price} bath</p>
            <div className='actions'>
                <small onClick={headleUpdata}>Updata</small>
                <small onClick={headleDelete}>Delete</small>
            </div>
        </div>

    )
}
export default Productbox