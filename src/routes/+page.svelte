
<script>
	import Landing6 from './../components/Landnig6/Landing6.svelte';
	import Landing5 from './../components/Landing5/Landing5.svelte';
  import Landing from "../components/Landing.svelte";
  import Landing2 from "../components/Landing2/Landing2.svelte";
  import Landing3 from "../components/Landing3/Landing3.svelte";
  import Landing4 from "../components/Landing4/Landing4.svelte";
  import Landing7 from '../components/Landing7/Landing7.svelte';
  import Landing8 from '../components/Landing8/Landing8.svelte';
  import Landing9 from '../components/Landing9/Landing9.svelte';
  import Landing10 from '../components/Landing10/Landing10.svelte';

export let data;
let products=data.products
let offerProducts=data.products.offerProducts;
</script>
<div class=" text-white font-bold overflow-hidden">

<Landing/>
<Landing2/>
<Landing3/>
<Landing4 {products}/>
<Landing5/>
<Landing6 {offerProducts}/>
<Landing7/>
<Landing8/>
<Landing9/>
<Landing10/>
</div>