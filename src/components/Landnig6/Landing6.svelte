<script>
  import right from "$lib/images/right.png";
  import Card from "../Card.svelte";
import Start from '$lib/images/landing5/Star.svg'
  export let offerProducts;
</script>

<div class=" bg-[#274C5B]">
  <div class=" container mx-auto p-10">
    <div class=" flex justify-between items-center mt-20 max-md:flex-col">
      <div>
        <h1 class=" text-[#7EB693] text-3xl font-normal font">Offer</h1>
        <h1 class="text-[#FFFFFF] text-4xl mt-5">We Offer Organic For You</h1>
      </div>

      <div>
        <Card classs="bg-[#EFD372] rounded-xl w-fit py-5 px-10">
          <h1>View All Product</h1>
          <div class=" bg-[#274C5B] w-fit rounded-full p-1">
            <img src={right} alt="" />
          </div>
        </Card>
      </div>
    </div>

    <div class="  mt-20  gap-x-8 grid md:grid-cols-2 grid-cols-1 gap-y-5 xl:grid-cols-4  items-center justify-center">
        {#each offerProducts as product }
           <div class=" p-3 py-6 bg-[#FFFFFF] rounded-xl ">
            <div class="bg-[#274C5B] py-1 px-4 rounded-xl w-fit"><h1 class=" text-[#FFFFFF] text-sm">{product.name}</h1></div>
    <a href={'/product'}>        <img src={product.image} alt="">
    </a>
            <h1 class=" text-[#274C5B] font-bold text-xl">{product.title}</h1>
            <div>
                <div class=" flex  items-center gap-x-2 mt-4 justify-between">
                  <div class="flex  items-center gap-x-2">  <h2 class=" text-[#BBBBBB] relative w-fit " ><div class=" absolute w-full top-[40%] left-0 h-1 bg-[#BBBBBB]"></div>${ parseFloat(product.offer) }.00</h2>
                  <h2 class=" text-[#274C5B]  font-bold text-lg">{product.price}.00</h2>
</div>
                    <img src={Start} alt="">

                </div>
    
                <!-- stars -->
            </div>
           </div>
        {/each}
    </div>
    
  </div>
</div>
