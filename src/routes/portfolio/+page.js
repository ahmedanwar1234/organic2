
export async function load({ fetch }) {

    const response=await fetch('/api/portfolio');
let portfolio=await response.json()

	return {
	portfolio
	};
}