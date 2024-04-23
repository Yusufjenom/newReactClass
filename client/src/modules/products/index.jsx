import React from 'react';
import {useQuery, useMutation} from '@tanstack/react-query';
import axios from 'axios';
import LoadingComponent from '../../components/loadingSpinner';


const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const result = await response.data;
    return result
};


function Products() {

  const {data: products,error, isLoading, refetch} = useQuery({
    queryKey: ["products"],
    queryFn: () => 
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
    
  })
 
  console.log(products)
if(isLoading) return <LoadingComponent/>

if(error) return <h4>Sorry there was an error trying to load this page</h4>
  return (
    <div>
       <h1>Products</h1>
       <button onClick={() => refetch}>ReLoad Page</button>
       {
        products.products?.map((item, i) => (
            <div key={i}>
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
                <h4>${item.price}</h4>
                <hr />
            </div>
        ))
       }
    </div>
  )
}

export default Products