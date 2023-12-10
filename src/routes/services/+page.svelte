<script>
	import  right  from '$lib/images/right.png';
  import Card from "../../components/Card.svelte";
  import Services from "../../components/services.svelte";

</script>











<div>
    <Services/>
    <!-- 1 -->
    <div class="  mt-52 container mx-auto">
      <div class=" flex flex-col justify-center items-center">
        <h1 class=" text-[#7EB693] text-left text-3xl font-normal font">What we Grow</h1>
        <h1 class="text-[#274C5B] font-bold text-center text-4xl mt-2 ">Better Agriculture for Better Future <br>
            Organic Store</h1>
      </div>

      <div class=" flex items-center md:flex-row flex-col">
        <!-- 1 -->
        <div class=" flex flex-col gap-y-5 mt-20">
<div class=" flex flex-col justify-center  items-center md:items-end gap-y-3" >
    <img src="/src/lib/images/services/Photo1.png" alt="">
    <h1 class=" text-[#274C5B] font-semibold text-xl">Dairy Products</h1>
    <p class=" text-center md:text-right w-2/3">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
</div>
<div class=" flex flex-col justify-center items-center  md:items-end gap-y-3" >
    <img src="/src/lib/images/services/Photo2.png" alt="">
    <h1 class=" text-[#274C5B] font-semibold text-xl">Dairy Products</h1>
    <p class=" text-center md:text-right w-2/3">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
</div>
<div class=" flex flex-col justify-center items-center  md:items-end gap-y-3" >
    <img src="/src/lib/images/services/Photo3.png" alt="">
    <h1 class=" text-[#274C5B] font-semibold text-xl">Dairy Products</h1>
    <p class=" text-center md:text-right w-2/3 ">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
</div>
        </div>
        <!-- 2 -->
        <div>
<img src="/src/lib/images/services/Photo.png" alt="">        </div>
        <!-- 3 -->
        <div class=" flex flex-col gap-y-5">
<div class=" flex flex-col justify-center items-center md:items-start gap-y-2" >
    <img src="/src/lib/images/services/Photo1.png" alt="">
    <h1 class=" text-[#274C5B] font-semibold text-xl">Dairy Products</h1>
    <p class="  max-md:text-center ">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
</div>
<div class=" flex flex-col justify-center items-center md:items-start gap-y-2" >
    <img src="/src/lib/images/services/Photo1.png" alt="">
    <h1 class=" text-[#274C5B] font-semibold text-xl">Dairy Products</h1>
    <p class=" max-md:text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
</div>
<div class=" flex flex-col justify-center items-center md:items-start gap-y-2" >
    <img src="/src/lib/images/services/Photo1.png" alt="">
    <h1 class=" text-[#274C5B] font-semibold text-xl">Dairy Products</h1>
    <p cass="  max-md:text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
</div>
        </div>      </div>
    </div>

    <!-- 2 -->
    <div class=" my-20 mx-auto w-fit">
        <Card classs="border-2 border-[#274C5B] rounded-xl w-fit p-6 px-10">
            <h1>Explore Now</h1>
            <div class=" bg-[#274C5B] w-fit rounded-full p-1 ">
    
                <img src={right} alt="">
            </div>
        </Card>
    </div>
    <!-- 3 -->
   <div class="  mb-52   h-screen w-full">
    <div class="  p-10  h-full w-full bg-[url('/src/lib/images/services/bgvideo.svg')]">

        <div class=" w-fit mx-auto flex  flex-col  gap-y-5 justify-center items-center">
            <h1 class=" text-[#7EB693] text-left text-3xl font-normal font">What we Grow</h1>
        <h1 class="text-[#274C5B] font-bold text-center text-4xl mt-2 ">Better Agriculture for Better Future <br>
            Organic Store</h1>
            <p class=" w-2/3 text-center">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the </p>
        </div>
 
        <div class=" m-auto mt-52 bg-[#7EB693] w-20 flex justify-center items-center  h-20 rounded-full ">
            <img src="/src/lib/images/services/play.png" alt="">
        </div>
    </div>
   </div>
</div>