<script>
	import Aboutfuck from './../../components/about/aboutfuck.svelte';
  import About from "../../components/about/about.svelte";
  import AboutUs from "../../components/about/aboutUs.svelte";
  import Choses from "../../components/about/Choses.svelte";
  import Experts from "../../components/about/Experts.svelte";
  import Landing10 from "../../components/Landing10/Landing10.svelte";

export let data;
let team=data.team
console.log(team)
</script>



<div> 
<About/>
<AboutUs/>
<Choses/>
<Experts {team}/>
<Aboutfuck/>
<Landing10/>
</div>