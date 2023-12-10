




<script>
	import  right  from '$lib/images/portfolio/Vector.svg';
      import Landing10 from "../../components/Landing10/Landing10.svelte";
  
  
  export let data;
  const portfolio=data.portfolio;
</script>
  
  

  
  <div>
      <!-- first  -->
  
      <div class=" h-[450px] bg-[#E3F1E9] flex items-center bg-[url('/src/lib/images/portfolio/bg.png')]   relative">
  
          <div class="bg-[url('/src/lib/images/news/Patterns.png')] w-full h-full ">
              <h1 class=" text-[#274C5B] max-md:bg-[#FFFFFF] max-md:rounded-xl max-md:p-4  font-bold text-5xl absolute  top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%]">Portfolio Standard</h1>
          </div>
              </div>
              
  
      <!-- end first  -->
  
  <div class="  px-5 my-32 container mx-auto grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-10 gap-x-0">
      {#each portfolio as portfolio }
          <div class=" relative">
<div class=" transition-all w-fit cursor-pointer group relative">
    <img class=" w-full rounded-3xl" src={portfolio.image} alt=""/>
    <a href={`/portfolio/${portfolio.id}`}>
        <div class="  transition-all  duration-1000 hidden group-hover:block  absolute   inset-5 bg-[#FFFFFF] opacity-80  ">
            <div class=" flex justify-center items-center h-full  ">
              <div class=" w-fit bg-[#7EB693] p-5 rounded-full">
          
                  <img class=" w-3 h-3" src={right} alt="">
              </div>
            </div>
              </div></a>
</div>              <h1 class="text-[#274C5B] text-2xl font-bold mt-2 ">{portfolio.title}<br>
                  <h1 class=" text-[#7EB693] text-left text-xl font-normal font">{portfolio.describe} </h1>
           
          </div>
      {/each}
  </div>
  
  <Landing10/>
  </div>