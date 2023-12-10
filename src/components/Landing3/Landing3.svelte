


<script>
  import Card from "../Card.svelte";
import right from '$lib/images/right.png'
import landing3 from '$lib/images/landing3/landing3.png'
import Group1 from '$lib/images/landing3/Group 1.svg'
import Group2 from '$lib/images/landing3/Group 2.svg'

</script>



<div class=" bg-[#FFFFFF] container mx-auto text-black">
<div class=" w-full flex items-center  ">
<!-- image -->
<div class="  w-full">
    <img class=" w-full" src={landing3} alt="">
</div>


<!-- about -->
<div class=" flex flex-col gap-y-3">
    <h1 class="text-[#7EB693]  text-4xl font font-light ">About Us</h1>
    <h1 class=" text-[#274C5B] text-4xl">We Believe in Working Accredited Framers</h1>
    <p class="  text-[#525C60]  text-sm font-normal">Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
<div class=" flex flex-col gap-y-4 my-7">
    <div class=" flex gap-x-5">
        <img src={Group1} alt="">
<div class=" ">
    <h1 class=" text-[#274C5B] font-semibold text-2xl">Organic Foods Only</h1>
    <p class="text-[#525C60] mt-4  text-sm font-normal">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
</div>
    </div>
    <div class=" flex gap-x-5">
        <img src={Group2} alt="">
<div>
    <h1 class=" text-[#274C5B] font-semibold text-2xl">Quality Standards</h1>
    <p class="text-[#525C60] mt-4  text-sm font-normal">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
</div>
    </div>
</div>
    <Card classs="bg-[#274C5B] rounded-xl w-fit p-6 px-10 text-[#FFFFFF] ">
        <h1>Shop Now</h1>
        <div class=" bg-[#3d809b] w-fit rounded-full p-1 ">

            <img src={right} alt="">
        </div>
    </Card>
</div>




</div>
</div>
<style>

</style>