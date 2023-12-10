
export async function load({ fetch,params }) {

    const id=params.id;
    const response=await fetch(`/api/shop/${id}`);

let singleShopProducts=await response.json()
const products=await fetch('/api/shop');

const productss=products.json();
console.log('a',singleShopProducts)
	return {
        singleShopProducts,productss
	};
}