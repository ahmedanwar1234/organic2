


<script>
    import Photo1 from '$lib/images/Landing8/Photo1.jpg'
    import Photo2 from '$lib/images/Landing8/Photo2.jpg'
    import Photo3 from '$lib/images/Landing8/Photo3.jpg'



const orgaincs=[
    {image:'image1',title:'Organic Juice'},
    {image:'image2',title:'Organic Food'},
    {image:'image3',title:'Organic Cookis'},
]

</script>

<div class=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-0  my-32  ">

{#each orgaincs as orgainc }
<div class={` ${orgainc.image}  w-full  h-[583px] bg-no-repeat bg-contain flex justify-center items-center  `}>
   <h1 class=" text-[#274C5B]  text-center bg-[#FFFFFF] py-10 px-20 text-xl font-bold rounded-2xl">{orgainc.title}</h1>
</div>
    
{/each}
</div>


<style>
    .image1{
        background-image: url('/src/lib/images/Landing8/Photo1.jpg');
        background-size: contain;
    }
    .image2{
        background-image: url('/src/lib/images/Landing8/Photo2.jpg');
    }
    .image3{
        background-image: url('/src/lib/images/Landing8/Photo3.jpg');
    }
</style>