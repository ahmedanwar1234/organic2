<script>
  import right from "$lib/images/right.png";
  import Start from "$lib/images/landing5/Star.svg";
  import Card from "../Card.svelte";
  import { goto } from '$app/navigation';
  export let single;
  export let products;

</script>

<div class=" my-52">
  <div class=" container mx-auto">
    <div class="  flex flex-col md:flex-row items-center justify-center md:justify-evenly">
      <div class=" w-1/2 flex flex-col justify-center items-center">
        <div class="bg-[#274C5B] py-1 px-4 rounded-xl w-fit text-left">
          <h1 class=" text-[#FFFFFF] text-sm">{single.name}</h1>
        </div>
        <img src={single.image} alt="" />
      </div>
      <div class="  space-y-3">
        <h1 class=" font-bold text-[#274C5B] text-3xl">Health Pistachios</h1>
        <img src={Start} alt="" />
        <div class=" flex items-center gap-x-2 mt-4">
          <h2 class=" text-[#BBBBBB] relative w-fit">
            <div
              class=" absolute w-full top-[40%] left-0 h-1 bg-[#BBBBBB]"
            ></div>
            ${parseFloat(single.offer)}.00
          </h2>
          <h2 class=" text-[#274C5B] font-bold text-lg">{single.price}.00</h2>
        </div>
        <p class=" w-2/3 text-[#525C60]">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>

        <div class=" flex max-md:flex-col gap-y-3 items-center gap-x-3">
          <h1 class="text-[#274C5B] text-xl font-semibold">Quantitt :</h1>
          <input
            class=" text-center outline-none border-2 border-[#274C5B] py-5 text-xl font-bold w-40 rounded-xl"
            type="number"
            value="1"
          />
          <div>
            <Card
              classs="bg-[#274C5B] rounded-xl w-fit p-6 px-10 text-[#FFFFFF] "
            >
              <h1>Shop Now</h1>
              <div class=" bg-[#3d809b] w-fit rounded-full p-1">
                <img src={right} alt="" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>

    <div class=" mt-20 ">
<div class="flex max-md:flex-col justify-center gap-x-5">
    <button class=" bg-[#274C5B] px-10 py-3  rounded-xl text-center text-[#FFFFFF] text-base font-semibold">Product Description</button>
    <button class=" bg-[#EFF6F1] px-10 py-3  rounded-xl text-center text-[#274C5B] text-base font-semibold">Additional Info</button>
</div>
<p class="w-2/3 text-[#525C60] text-center mx-auto mt-10">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
    </div>


    <div class=" mt-40">
        <h1 class=" text-center font-bold text-[#274C5B] text-3xl">Related Products</h1>
<div class=" mt-5 flex flex-wrap gap-x-8 items-center  justify-center">
    {#each products as product }

    {#if product.id<5}
        <div class=" p-3 w-[250px]">
        <div class="bg-[#274C5B] py-1 px-4 rounded-xl w-fit"><h1 class=" text-[#FFFFFF] text-sm">{product.name}</h1></div>

    <a href={`/shop/${product.id}`}> 
        <button on:click={()=>{
  
            goto(location.pathname)
            setTimeout(()=>{
location.reload()
            },500)
              
              }}>       <img src={product.image} alt="">
</button>
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
    {/if}
       
    {/each}
</div>
    </div>
  </div>
</div>
