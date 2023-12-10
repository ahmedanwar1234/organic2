



<script>
  import { onMount } from 'svelte';
	import Landing10 from './../../../components/Landing10/Landing10.svelte';
	import DetailShopSingle from './../../../components/shopSingle/detailShopSingle.svelte';
	import ShopSingle from './../../../components/shopSingle/shopSingle.svelte';
    export let data;
    console.log(data)

   const singleShopProducts=data.singleShopProducts;
const product=data.productss;
let products=product.products;

  const single=singleShopProducts.singleShopProducts
</script>

<div>
  <ShopSingle/>
  <DetailShopSingle {single} {products}/>
  <Landing10/>
</div>