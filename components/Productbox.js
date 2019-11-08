import React from 'react'

const Productbox = props =>{
    const {name ,description , price ,quantity , imgUrl} = props.data
    return(
        <div>
            <img src={imgUrl}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{quantity} lefts</p>
            <p>{price} bath</p>
        </div>

    )
}
export default Productbox