import MainLayout from '../layouts/MainLayout'
import AddProduct from '../components/AddProduct'
import Productbox from '../components/Productbox'
import React ,{useState} from 'react'
const inintProduct = [
    {
        name: 'pen',
        description: 'writ',
        price: 10,
        quantity: 100,
        imgUrl: ''
    },
    {
        name: 'pen',
        description: 'writ',
        price: 10,
        quantity: 100,
        imgUrl: ''
    },
    {
        name: 'pen',
        description: 'writ',
        price: 10,
        quantity: 100,
        imgUrl: ''
    },
    {
        name: 'pen',
        description: 'writ',
        price: 10,
        quantity: 100,
        imgUrl: ''
    },

]
const ProductPage = () => {
    const [products ,setProducts] = useState([])

    const handleCreate = (data) =>{
        products.push(data)
        let temp = products
        setProducts([...temp])
    }

    return (
        <MainLayout>
            <AddProduct getProduct={handleCreate}/>
            <h3>Product List</h3>
            {
                products.map((item, index) => {
                    return (
                        <Productbox data={item} />
                    )
                })
            }
        </MainLayout>
    )
}
export default ProductPage