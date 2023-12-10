



<script>
      import Testimonial from './Testimonial.svelte';

let testimonials = [
  {
    name: 'Sara Taylor',
    title: 'CEO',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jane Smith',
    title: 'CTO',
    quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Bob Johnson',
    title: 'Designer',
    quote: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
  },
];
</script>



<div class=" text-black mt-52">
<div class="  bg w-full bg-cover flex flex-col  items-center">
    <div class=" w-full flex flex-col items-center justify-between h-full">
     <Testimonial {testimonials}/>
     <div class=" md:mt-32  max-md:mt-10 md:flex gap-x-14  max-md:space-y-5">
        <div class="  flex flex-col justify-center items-center border-4 rounded-full w-[211px] h-[211px] border-[#7EB693]   space-y-1">
            <h1 class=" text-[#274C5B] font-bold text-5xl">100%</h1>
            <h1 class=" text-[#274C5B] text-xl">Organic</h1>
        </div>
        <div class="  flex flex-col justify-center items-center border-4 rounded-full w-[211px] h-[211px] border-[#7EB693]   space-y-1">
            <h1 class=" text-[#274C5B] font-bold text-5xl">285</h1>
            <h1 class=" text-[#274C5B] text-xl">Active Product</h1>
        </div>
        <div class="  flex flex-col justify-center items-center border-4 rounded-full w-[211px] h-[211px] border-[#7EB693]   space-y-1">
            <h1 class=" text-[#274C5B] font-bold text-5xl">350+</h1>
            <h1 class=" text-[#274C5B] text-xl">Organic Orchads</h1>
        </div>
        <div class="  flex flex-col justify-center items-center border-4 rounded-full w-[211px] h-[211px] border-[#7EB693]   space-y-1">
            <h1 class=" text-[#274C5B] font-bold text-5xl">25+</h1>
            <h1 class=" text-[#274C5B] text-xl">Years of Farming</h1>
        </div>
     </div>


</div>








</div>
</div>


<style>
.bg{
    background-image: url('$lib/images/landing5/bg.png');

 background-repeat: no-repeat;    
}


</style>