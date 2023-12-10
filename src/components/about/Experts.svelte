<script>
    import insta from '$lib/images/footer/insta.png'
import fb from '$lib/images/footer/Fb.png'
import Prinst from '$lib/images/footer/Pintrest.png'
import Twiter from '$lib/images/footer/Twiter.png'

  export let team;

</script>

<div class="  container  mx-auto space-y-20   ">
  <div class="flex justify-center items-center flex-col gap-y-4">
    <h1 class="text-[#7EB693] text-4xl font font-light">Team</h1>
  <h1 class=" text-[#274C5B] font-bold text-4xl">Our Organic Experts</h1>
  <p class="   text-[#525C60] text-sm font-normal">
    Simply dummy text of the printing and typesetting industry. Lorem had ceased
    to been the industry's <br /> standard dummy text ever since the 1500s, when
    an unknown printer took a galley.
  </p>
  </div>

  <div class=" flex max-md:flex-col rounded-2xl justify-around">
  
      {#each team as team}
     <div class=" shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
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
