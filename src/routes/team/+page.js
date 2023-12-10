


export async function load({ fetch }) {

    const response=await fetch('/api/team');
let teams=await response.json()
teams=teams.teams
	return {
	teams
	};
}