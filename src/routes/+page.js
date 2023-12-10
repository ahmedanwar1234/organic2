
export async function load({ fetch }) {

    const response=await fetch('/api/products');
let products=await response.json()

	return {
	products
	};
}