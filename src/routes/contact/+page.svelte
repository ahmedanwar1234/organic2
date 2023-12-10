
<script>
	import  Prinst  from '$lib/images/footer/Pintrest.png';
    
    import Twiter  from '$lib/images/footer/Twiter.png';
    import  insta  from '$lib/images/footer/insta.png';
    import  fb  from '$lib/images/footer/Fb.png';
  import Landing10 from '../../components/Landing10/Landing10.svelte';
    
    

</script>    






<div>
    <!-- 1 back ground -->
    <div class=" h-[450px] bg-[#E3F1E9] flex items-center bg-[url('/src/lib/images/bgcontact.svg')]   relative">
  
        <div class="bg-[url('/src/lib/images/patternscontact.png')] w-full h-full ">
            <h1 class=" text-[#274C5B] max-md:bg-[#FFFFFF] max-md:rounded-xl max-md:p-4  font-bold text-5xl absolute  top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%] text-center">Contact Us</h1>
        </div>
            </div>



            <div class=" my-20">
                <div class=" container mx-auto">


<div class=" max-md:flex-col  flex gap-x-10">
    <img class=" rounded-2xl" src="/src/lib/images/contact1.svg" alt="">
    <div class=" space-y-5  max-md:flex max-md:flex-col max-md:items-center max-md:my-5 ">
        <h1 class=" w-2/3 text-[#274C5B] font-bold text-4xl">We'd love to talk about how we can work together.</h1>
        <p class="w-2/3  text-[#525C60]  text-sm font-normal">Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

<div class=" space-y-10 p-10">
   <div class="  flex gap-x-5 items-center">
    <img src="/src/lib/images/Group.svg" alt="">
    <div>
        <h1 class=" font-bold text-lg text-[#274C5B]">Message</h1>
        <p>support@organic.com</p>
    </div>
</div>
<div class="  flex gap-x-5 items-center">
    <img src="/src/lib/images/phone.png" alt="">
    <div>
        <h1 class=" font-bold text-lg text-[#274C5B]">Contact Us</h1>
        <p>support@organic.com</p>
    </div>
</div> 
</div>


<div class="  p-10 flex gap-x-4 mt-10">
    <div class=" bg-[#dbf8e3] p-5 rounded-full">
        <img src={insta} alt="">
    </div>
    <div class=" bg-[#dbf8e3] p-5 rounded-full">
        <img src={fb} alt="">
    </div>
    <div class=" bg-[#dbf8e3] p-5 rounded-full">
        <img src={Prinst} alt="">
    </div>
    <div class=" bg-[#dbf8e3] p-5 rounded-full">
        <img src={Twiter} alt="">
    </div>
</div>
    </div>
</div>

<div class=" flex md:items-center md:justify-end md:p-20 w-full h-screen bg-[url('/src/lib/images/farms.svg')] bg-no-repeat bg-cover my-20">


    <div class="  max-md:w-[80%] h-fit  max-md:mx-auto  md:w-[500px] bg-[#FFFFFF] p-10 rounded-3xl  space-y-5 ">
        <h1 class="text-[#7EB693]  text-4xl font font-light ">Location</h1>
        <h1 class=" text-[#274C5B] font-bold text-4xl">Our Farms <br>
            Things for Success</h1>
        <p class="  text-[#525C60]  text-sm font-normal">Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

            <div class=" space-y-10 p-10">
                <div class=" max-md:flex-col  gap-y-4  flex gap-x-5 items-center">
                 <img src="/src/lib/images/Location.png" alt="">
                 <div >
                     <h1 class=" font-bold text-lg text-[#274C5B]">New York, USA:
                    </h1>
                     <p>299 Park Avenue New York,
                        New York 10171</p>
                 </div>
             </div>
             <div class="  gap-y-4 max-md:flex-col flex gap-x-5 items-center">
                 <img src="/src/lib/images/Location.png" alt="">
                 <div>
                     <h1 class=" font-bold text-lg text-[#274C5B]">London, UK:
                    </h1>
                     <p>30 Stamford Street,
                        London SE1 9LQ</p>
                 </div>
             </div> 
             </div>
    </div>
</div>

<!-- form -->
<div class="p-10">
    <form action="#" method="post" class="space-y-4 flex flex-col ">
        <div>
          <label for="fullName" class="block  font-medium text-lg text-[#274C5B]">Full Name*</label>
          <input type="text" id="fullName" name="fullName" class="mt-1 p-2 w-full border border-[#7EB693] rounded-md focus:outline-none focus:ring focus:border-blue-300">
        </div>
  
        <div>
          <label for="email" class="block font-medium text-lg text-[#274C5B]">Your Email*</label>
          <input type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md border-[#7EB693] focus:outline-none focus:ring focus:border-blue-300">
        </div>
  
        <div>
          <label for="company" class="block  font-medium text-lg text-[#274C5B]">Company*</label>
          <input type="text" id="company" name="company" class="mt-1 p-2 w-full border rounded-md  border-[#7EB693] focus:outline-none focus:ring focus:border-blue-300">
        </div>
  
        <div>
          <label for="subject" class="block  font-medium text-lg text-[#274C5B]">Subject*</label>
          <input type="text" id="subject" name="subject" class="mt-1 p-2 w-full border rounded-md border-[#7EB693]  focus:outline-none focus:ring focus:border-blue-300">
        </div>
  
        <div>
          <label for="message" class="block  font-medium text-lg text-[#274C5B]">Message*</label>
          <textarea id="message" name="message" rows="4" class="mt-1 p-2 w-full border rounded-md focus:outline-none border-[#7EB693] focus:ring focus:border-blue-300"></textarea>
        </div>
  
        <div>
          <button type="submit" class="w-fit  font-bold  bg-[#274C5B] text-white p-5 rounded-md focus:outline-none focus:ring focus:border-blue-300">Send Message</button>
        </div>
      </form>
</div>
                </div>

            </div>
            


</div>

<Landing10/>