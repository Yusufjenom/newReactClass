import  {useState, useEffect} from 'react';


function ExampleuseEffect() {
 const [products, setProducts] = useState(null);
const controller = new AbortController()
 useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch("https://dummyjson.com/products/");
        const data = await response.json()
        console.log(response)
        if(response.ok){
            setProducts(data?.products)
        }
    };
    fetchProducts();

    return () => {
        console.log('cleaned up our component')
        controller.abort()
    }
 }, [])


  return (
    <div style={{width:"100%", height:"100%", display:"flex", flexWrap:"wrap", borderRightColor: "gray", gap:".5rem"}}>
        {
            products?.map(item => (
                <div key={item.id} style={{width:"30%", height:"auto", border:"1px solid #f2f3f4", borderRadius:".4rem", display:"flex", flexDirection:"column", padding:".2rem", justifyContent:"center", alignItems:"center"}}>
                   <div style={{width:"50%", height:"100%"}}>
                    <img width={150} src={item.thumbnail} alt="image" />
                   </div>
                   <div>
                    <p style={{color:"#333"}}> Description : {item.description}</p>
                   </div>
                   <div>
                    <h6> Price : ${item.price}</h6>
                   </div>
                   <div>
                    <h6> DiscountPercentage : {item.discountPercentage}%</h6>
                   </div>
                   <div>
                    <h6> Rating : {item.rating}</h6>
                   </div>
                   <div>
                    <h6 style={{fontFamily:"cursive"}}> Brand : {item.brand}</h6>
                   </div>
                </div>
            ))
        }
    </div>
  )
}

export default ExampleuseEffect