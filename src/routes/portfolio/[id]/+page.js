



export async function load({ fetch,params }) {
    const id=params.id


    const response=await fetch(`/api/portfolio/${id}`);

let portfolio =await response.json()

	return {
	portfolio
	};
}