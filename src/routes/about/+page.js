


export async function load({ fetch }) {

    const response=await fetch('/api/team');
let team=await response.json()
team=team.peopleTeam
	return {
	team
	};
}