export const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products/");
    const data = await response.json()
    
    // if(response.ok){
    //     setProducts(data?.products)
    // }
    return data.products;
};