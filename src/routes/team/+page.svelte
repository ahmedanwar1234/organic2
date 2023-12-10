



<script>
	import Landing10 from './../../components/Landing10/Landing10.svelte';
	import  Twiter  from '$lib/images/footer/Twiter.png';
	import  insta  from '$lib/images/footer/insta.png';
	import  fb  from '$lib/images/footer/Fb.png';
    export let data;
   let teams=data.teams
</script>



<div>
    <!-- 1 background -->
    <div class="bg h-[450px] bg-[#E3F1E9] flex items-center bg-[url(/src/lib/images/bgteam.svg)]   relative">
  
        <div class=" bg2 bg-[url('/src/lib/images/patternsteam.png')] w-full h-full ">
            <h1 class=" text-[#274C5B] max-md:bg-[#FFFFFF] max-md:rounded-xl max-md:p-4  font-bold text-5xl absolute  top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%]">Our Team</h1>
        </div>
            </div>
            

<!-- 2 -->
<div class=" container mx-auto my-40">

    <div class="  g gap-y-4 flex flex-col justify-center items-center">
        <h1 class="text-[#7EB693]  text-4xl font font-light ">Team</h1>
        <h1 class=" text-[#274C5B] font-bold text-4xl">Our Organic Experts <br>
            </h1>
        <p class=" text-center  text-[#525C60]  text-sm font-normal">Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
    </div>


    
  <div class=" my-20  max-md:p-5 grid  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 rounded-2xl ">
  
    {#each teams as team}
   <div class="  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
      <div class=" flex flex-col" >
          <img class="   rounded-t-xl" src={team.image} alt="" />
        </div>
        <div class="p-5  ">
                            <h1 class="text-[#274C5B] text-2xl font-bold text-[">{team.name}</h1>

            <div class=" flex justify-between items-center">
                <p  class="font text-[#7EB693] text-xl">{team.job}</p>
                
                              <div class=" flex  gap-x-2 ">
                                <a href="/"><img src={fb} alt=""></a>
                                <a href="/"><img src={insta} alt=""></a>
                                <a href="/"><img src={Twiter} alt=""></a>
                              </div>
            </div>
        </div>
   </div>
    {/each}

</div>
</div>





</div>
<Landing10/>
<style>

    .bg{
        background-image: url('/src/lib/images/bgteam.svg');
    }

    .bg2{
        background-image: url('/src/lib/images/patternsteam.png');
    }

</style>