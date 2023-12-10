
export async function load({ fetch }) {

    const response=await fetch('/api/shop');
let shop=await response.json()

	return {
	shop
	};
}