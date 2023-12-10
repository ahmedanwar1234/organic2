
<script>
import Landing from '$lib/images/Landing.png'
import Photo from "$lib/images/Photo.png"
import right from "$lib/images/right.png"
  import Card from './Card.svelte';
</script>
<div class=" overflow-hidden   flex md:justify-end items-end ">

    <div class=" w-[90%]  bg-[#f2f2f2]">
        <div class="bg  flex justify-between items-center  text-black ">



    <div class=" flex flex-col gap-y-3  mx-20   ">
    
        <h1 class=" text-[#68A47F] text-5xl font font-normal  ">100% Natural Food</h1>
        <h1 class=" font-bold text-7xl  text-[#274C5B]">
            Choose the best healthier way
            of life</h1>
        
            
            <Card classs="bg-[#EFD372] rounded-xl w-fit p-6 px-10">
                <h1>Explore Now</h1>
                <div class=" bg-[#274C5B] w-fit rounded-full p-1 ">
        
                    <img src={right} alt="">
                </div>
            </Card>
      
        </div>


<div class=" test max-md:hidden w-full   h-full">
</div>


</div>
    </div>


</div>



<style>

.bg{
    background-image: url('$lib/images/Landing.png');
    background-repeat: no-repeat;

    
    height: calc(100vh - 98px);
}
.test{
    background-image: url('$lib/images/Photo.png');
    background-repeat: no-repeat;


}

.font{
    font-family: 'Yellowtail', cursive;
}


</style>