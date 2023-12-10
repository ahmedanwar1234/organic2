
export async function load({ fetch,params }) {
    const id=params.id


    const response=await fetch(`/api/news/${id}`);

let neww =await response.json()
	return {
	neww
	};
}