<script>
import right from '$lib/images/right.png'
import aboutus from '$lib/images/about/aboutus.png'
import tomato from '$lib/images/about/tomato.png'
import Group1 from '$lib/images/about/grar.png'
import Group2 from '$lib/images/about/home.png'
  import Card from '../Card.svelte';
</script>





<div class=" container mx-auto text-black my-40">
    <div class=" w-full flex items-center max-md:flex-col  ">
    <!-- image -->
           <div class="  relative w-full">
        <img class=" " src={aboutus} alt="">
        <img class="  absolute  bottom-0 -z-10 left-0" src={tomato} alt="">
    </div>
 
    
    
    <!-- about -->
    <div  class="animate  flex flex-col gap-y-7 justify-center items-center p-3">
        <h1 class="text-[#7EB693]  text-4xl font font-light ">About Us</h1>
        <h1 class=" text-[#274C5B] font-bold text-4xl">We do Creative <br>
            Things for Success</h1>
        <p class="  text-[#525C60]  text-sm font-normal">Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        <p class="  text-[#525C60]  text-sm font-normal">Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
    <div class=" flex max-md:flex-col gap-y-4 my-7">
        <div class=" flex  items-center gap-x-5">
            <img class="  w-10 h-10" src={Group1} alt="">
    <div class=" ">
        <h1 class=" text-[#274C5B] font-medium text-2xl">Modern Agriculture
            Equipment
            </h1>
    </div>
        </div>
        <div class=" flex  items-center gap-x-5">
            <img class="w-10 h-10" src={Group2} alt="">
    <div>
        <h1 class=" text-[#274C5B]  font-medium text-2xl">No growth hormones are used</h1>
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
        .animate{

animation-name: example;
animation-duration: 1s;
        }

        @keyframes example{
            from{
margin-left: 50px;
            }
        }

 
    </style>