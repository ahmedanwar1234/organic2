
<script>
	import  Person from '$lib/images/Landing9/Vector.png';
	import  right  from '$lib/images/right.png';
  import Card from '../Card.svelte';

export let news

</script>

<div class=" my-52">
   <div class=" container  mx-auto grid md:grid-cols-2 gap-y-32 gapyx">

    {#each news as neww }

    <div class={` ${neww.image} rounded-3xl relative md:w-[677px] h-[524px]  max-md:space-y-5  p-3 md:p-10 rounded-2xl"`} >
        <!-- circle -->
    <div class="  flex flex-col justify-center items-center rounded-full w-20 h-20 bg-[#FFFFFF]">
        <h1 class="text-[#274C5B]">25</h1>
        <h1 class="text-[#274C5B]">Nov</h1>
    </div>
    
    <!-- absolute -->
    
    <div>
         <div class="  bg-[#FFFFFF] p-10 flex flex-col gap-y-4 rounded-2xl md:absolute shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]   -bottom-10">
    <div class=" flex gap-x-3">
        <img src={Person} alt="" width="21" height="21">
        <h1 class=" font-normal text-[#274C5B] text-xl">By Rachi Card</h1>
    </div>
    
    <h1 class=" font-bold text-[#274C5B] text-2xl ">{neww.title}</h1>
    <p class=" text-[#525C60] font-normal ">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
    
    
      <div>
<a href={`/news/${neww.id}`}>
    <Card classs="bg-[#EFD372] rounded-xl w-fit py-5 px-10">
        <h1>Read More</h1>
        <div class=" bg-[#274C5B] w-fit rounded-full p-1">
          <img src={right} alt="" />
        </div>
      </Card>
</a>
      </div>
    </div>
    </div>
   
    
    
    </div>

    {/each}

</div> 
</div>
