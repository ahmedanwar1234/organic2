
<script>
    import Start from '$lib/images/landing5/Star.svg'
    import Photo1 from '$lib/images/landing5/Photo1.jpg'
    export let testimonials;

    let num=0;
    $: testimonial=testimonials[num]

  </script>
  
  <div class="testimonial">
    <div class=" flex flex-col items-center gap-y-3">
        <h1 class=" text-[#7EB693] text-3xl font-normal font">Testimonial </h1>
        <h1 class="text-[#274C5B] text-4xl mt-2 text-center">What Our Customer Saying?</h1>
    
        <div class=" ">
            <img  class=" rounded-full my-20" src={Photo1} alt="">
            <img src={Start} alt="">
        </div>
        <p class=" text-[#525C60] font-normal">{testimonial.quote}</p>
        <h1 class=" text-[#274C5B] text-2xl">{testimonial.name}</h1>
        <h2 class=" text-[#525C60] font-normal">Customer</h2>
    
        <div class=" flex gap-x-2">
        <button  class={`${num===0 ? "bg-[#7EB693]" :"bg-[#C4C4C4]"}`} on:click={()=>{
            num=0
        }}></button>
        <button class={`${num===1 ? "bg-[#7EB693]" :"bg-[#C4C4C4]"}`} on:click={()=>{
            num=1
        }}></button>
        <button  class={`${num===2 ? "bg-[#7EB693]" :"bg-[#C4C4C4]"}`}  on:click={()=>{
            num=2
        }}></button>
        </div>
    </div>
  </div>
  
  <style>
button{
    width: 10px;
    height: 10px;
    border-radius: 100%;
}

  </style>