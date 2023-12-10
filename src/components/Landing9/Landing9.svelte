<script>
	import  right  from '$lib/images/right.png';
	import  Person  from '$lib/images/Landing9/Vector.png';

  import Card from "../Card.svelte";

</script>






<div class=" my-10">
    <div class=" container mx-auto relative">
        <div class=" flex justify-between    items-center mt-20 max-md:flex-col">

        <div class="  max-md:text-center mb-5">
            <h1 class=" text-[#7EB693] text-3xl font-normal font">News</h1>
            <h1 class="text-[#274C5B] text-4xl mt-5">Discover weekly content about <br/> organic food, & more</h1>
          </div>
    
          <div>
            <a href="/news"><Card classs=" border-2 border-[#274C5B] rounded-xl w-fit py-5 px-10">
              <h1>More News</h1>
              <div class=" bg-[#274C5B] w-fit rounded-full p-1">
                <img src={right} alt="" />
              </div>
            </Card></a>
          </div>
          </div>

          <!--  -->

          <div class=" mt-20 flex  md:justify-around  max-md:flex-col max-md:gap-y-20">
<!-- 1 -->
<div class=" bg md:w-[677px] h-[524px]  max-md:space-y-5  p-3 md:p-10 rounded-2xl">
    <!-- circle -->
<div class="  flex flex-col justify-center items-center rounded-full w-20 h-20 bg-[#FFFFFF]">
    <h1 class="text-[#274C5B]">25</h1>
    <h1 class="text-[#274C5B]">Nov</h1>
</div>

<!-- absolute -->


<div class="  bg-[#FFFFFF] p-10 flex flex-col gap-y-4 rounded-2xl md:absolute  -bottom-10">
<div class=" flex gap-x-3">
    <img src={Person} alt="" width="21" height="21">
    <h1 class=" font-normal text-[#274C5B] text-xl">By Rachi Card</h1>
</div>

<h1 class=" font-bold text-[#274C5B] text-2xl ">The Benefits of Vitamin D & How to Get It</h1>
<p class=" text-[#525C60] font-normal ">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>


  <div>
    <Card classs="bg-[#EFD372] rounded-xl w-fit py-5 px-10">
      <h1>Read More</h1>
      <div class=" bg-[#274C5B] w-fit rounded-full p-1">
        <img src={right} alt="" />
      </div>
    </Card>
  </div>
</div>


</div>
<div class=" bg1 md:w-[677px] h-[524px]  max-md:space-y-5  p-10 rounded-2xl">
    <!-- circle -->
<div class="  flex flex-col justify-center items-center rounded-full w-20 h-20 bg-[#FFFFFF]">
    <h1 class="text-[#274C5B]">25</h1>
    <h1 class="text-[#274C5B]">Nov</h1>
</div>

<!-- absolute -->


<div class="  bg-[#FFFFFF] p-10 flex flex-col gap-y-4 rounded-2xl md:absolute  -bottom-10">
<div class=" flex gap-x-3">
    <img src={Person} alt="" width="21" height="21">
    <h1 class=" font-normal text-[#274C5B] text-xl">By Rachi Card</h1>
</div>

<h1 class=" font-bold text-[#274C5B] text-2xl  ">The Benefits of Vitamin D & How to Get It</h1>
<p class=" text-[#525C60] font-normal  ">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>


  <div>
    <Card classs="bg-[#EFD372] rounded-xl w-fit py-5 px-10">
      <h1>Read More</h1>
      <div class=" bg-[#274C5B] w-fit rounded-full p-1">
        <img src={right} alt="" />
      </div>
    </Card>
  </div>
</div>


</div>


          </div>

    </div>
</div>



<style>

.bg{
    background-image: url('/src/lib/images/Landing9/Photo1.png');
}
.bg1{
    background-image: url('/src/lib/images/Landing9/Photo2.png');
}


</style>