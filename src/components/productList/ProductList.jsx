import './ProductList.css'
import Product from "../product/product";
const ProductList=({ products , onDelete})=>{
    return(
        <div className="product-list">
            {products.map((item)=>{
                return <Product key={item.id} product={item} onDelete={onDelete}/>
            }

            )}
        </div>
    )
}
export default ProductList;