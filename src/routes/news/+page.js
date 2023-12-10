
export async function load({ fetch }) {

    const response=await fetch('/api/news');
let news=await response.json()

	return {
	 news
	};
}