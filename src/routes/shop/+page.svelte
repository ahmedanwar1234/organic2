<script>
	import Landing10 from './../../components/Landing10/Landing10.svelte';
  import Shop from "../../components/shop/shop.svelte";
  import ShopProducts from "../../components/shop/shopProducts.svelte";

export let data;
let shopProducts=data.shop
</script>







<div>
<Shop />
<ShopProducts {shopProducts}/>
<Landing10/>
</div>