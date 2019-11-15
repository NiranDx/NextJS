import MainLayout from '../layouts/MainLayout'
import AddProduct from '../components/AddProduct'
import Productbox from '../components/Productbox'
import React, { useState } from 'react'
import UpdataModal from '../components/UpdataModal'

const inintProduct = [
    {
        id: 0,
        name: 'pen',
        description: 'writ',
        price: 10,
        quantity: 100,
        imgUrl: ''
    },
]

let i = 0
let selectionProduct = {}
const ProductPage = props => {
    const [products, setProducts] = useState([])
    const [visible, setVisible] = useState(false)
    const [selectionProduct, setSelectionProduct] = useState({})

    const handleCreate = (data) => {
        // products.push(data)
        // let temp = products
        // setProducts([...temp])
        const newProduct = { id: i++, ...data }
        setProducts([...products, newProduct])
    }
    const handleUpdataProduct = (id, data) => {
        // products[id] = {
        //     id: id,
        //     name: 'pen',
        //     description: 'writ',
        //     price: 10,
        //     quantity: 100,
        //     imgUrl: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiriq7Lr-zlAhX9zzgGHR5TCDoQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.iamflashdrive.com%2Fproduct%2Fpen-flash-drive-up-07%2F&psig=AOvVaw0lZky-0EDR3lQMoo8Z989b&ust=1573912620624037'

        // }
        // setProducts([...products])
        setSelectionProduct({ ...data })
        setVisible(true)

    }
    const handleDeleteProduct = (id) => {
        const filterredProduct = products.filter((product) => product.id !== id)
        setProducts([...filterredProduct])

    }

    return (
        <MainLayout>
            <div>
                <AddProduct getProduct={handleCreate} />
                <h3>Product List</h3>
                {
                    products.map((item, index) => {
                        return (
                            <>
                                <Productbox
                                    key={index}
                                    data={item}
                                    onUpdata={handleUpdataProduct}
                                    onDelete={handleDeleteProduct} />
                                <UpdataModal
                                    visible={visible}
                                    onCancel={() => setVisible(false)}
                                    data={item}>
                                </UpdataModal>
                            </>
                        )
                    })
                }

            </div>


        </MainLayout>
    )
}
export default ProductPage