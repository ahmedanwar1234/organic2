

<script>
	import  right  from '$lib/images/right.png';
  import Card from "../Card.svelte";


export let products;




</script>
<div class="  text-black mt-40 mb-10 ">
<div class="  container mx-auto flex flex-col justify-center items-center  ">
    <h1 class=" text-[#7EB693] text-3xl font-normal font">Categories </h1>
    <h1 class="text-[#274C5B] text-4xl  mt-2">Our Products</h1>

<div class=" mt-5 flex flex-wrap gap-x-8 items-center justify-center">
    {#each products.products as product }
       <div class=" p-3">
        <div class="bg-[#274C5B] py-1 px-4 rounded-xl w-fit"><h1 class=" text-[#FFFFFF] text-sm">{product.name}</h1></div>
<a href={`/shop/${product.id}`}>        <img src={product.image} alt="">
</a>
        <h1 class=" text-[#274C5B] font-bold text-xl">{product.title}</h1>
        <div>
            <div class=" flex  items-center gap-x-2 mt-4">
                <h2 class=" text-[#BBBBBB] relative w-fit " ><div class=" absolute w-full top-[40%] left-0 h-1 bg-[#BBBBBB]"></div>${ parseFloat(product.offer) }.00</h2>
                <h2 class=" text-[#274C5B]  font-bold text-lg">{product.price}.00</h2>
            </div>

            <!-- stars -->
        </div>
       </div>
    {/each}
</div>
<a href={`/shop`}  >
    <Card classs="bg-[#274C5B] mt-24 rounded-xl w-fit p-6 px-10 text-[#FFFFFF] ">
        <h1>Load More</h1>
        <div class=" bg-[#3d809b] w-fit rounded-full p-1 ">
    
            <img src={right} alt="">
        </div>
    </Card>
</a>
</div>
 </div>