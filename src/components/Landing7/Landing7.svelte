


<script>
    import landing7 from '$lib/images/Landing7.jpg'
    const details=[
        {title:'Start with Our Company First',paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium  doloremque laudantium. Sed ut perspiciatis'},
        {title:'Learn How to Grow Yourself',paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis'},
        {title:'Farming Strategies of Today',paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis'},
    ]
</script>



<div class=" h-screen relative">

<div class="img  w-full md:w-1/2 h-full">

</div>

<div  class="absolute top-1/2  md:left-[45%] left-[50%] translate-y-[-50%] max-md:translate-x-[-50%]   bg-[#FFFFFF] max-md:w-full max-md:p-5 md:p-20 rounded-xl">

    <h1 class=" text-[#7EB693] text-left text-3xl font-normal font">Eco Friendly </h1>
    <h1 class="text-[#274C5B] text-4xl mt-2 ">Econis is a Friendly <br>
        Organic Store</h1>

    <div class=" space-y-5 mt-10">
        {#each details as detail }
      <div class=" space-y-2">
        <h1 class="text-[#274C5B]  font-medium  text-2xl">{detail.title}</h1>
        <p class="text-[#525C60] font-normal w-2/3">{detail.paragraph}</p>
      </div>
        {/each}
    </div>
</div>

</div>

<style>
    .img{
        background-image: url('/src/lib/images/Landing7.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>