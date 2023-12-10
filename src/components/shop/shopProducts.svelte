



<script>

    export let shopProducts
</script>


<div class=" my-40">
    <div class=" container mx-auto">
        
<div class=" mt-5 grid md:grid-cols-2 xl:grid-cols-4 gap-x-8 items-center justify-center">
    {#each shopProducts.products as product }
       <div class=" p-3">
        <div class="bg-[#274C5B] py-1 px-4 rounded-xl w-fit"><h1 class=" text-[#FFFFFF] text-sm">{product.name}</h1></div>
<a href={`/shop/${product.id} `}>        <img src={product.image} alt="">
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
    </div>
</div>