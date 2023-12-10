
<script>
	import Landing10 from './../../../components/Landing10/Landing10.svelte';
    
    import  Person  from '$lib/images/Landing9/Vector.png';
    export let data;
    const neww=data.neww
    
    
</script>







<div>
    <div class={` ${neww.image} bg-no-repeat bg-contain md:bg-cover rounded-3xl relative  w-full h-[400px] md:h-screen max-md:space-y-5  p-3 md:p-10 rounded-2xl"`} >
        
    </div>
    <div>
        <div class="  bg-[#FFFFFF] md:p-10 flex flex-col gap-y-4 rounded-2xl  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]  container mx-auto md:-translate-y-32">
   <div class=" max-md:px-5 flex md:flex-row flex-col gap-x-3">
    <div class=" flex gap-x-2 items-center">
        <h1 class="text-[#274C5B]  font-semibold text-lg">Posted On :</h1>
        <h1>January 6, 2022</h1>
    </div>
       <img src={Person} alt="" width="21" height="21">
       <h1 class=" font-normal text-[#274C5B] text-xl">By Rachi Card</h1>
   </div>
   
   <h1 class="max-md:px-5 md:text-5xl font-bold text-[#274C5B] text-2xl ">Research More Organic Food</h1>
   <p class="max-md:px-5 text-[#525C60] font-normal w-2/3 ">Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
   
   
   <div class=" flex flex-col gap-y-10   p-10 md:px-20">
    <h1 class=" md:text-3xl font-bold text-[#274C5B] text-2xl">Preferred Form of Vitamin D?</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
    <ol  type="1"  class=" ol px-4 space-y-4">
        <li > Publishing packages and web pageLorem Ipsum as their default</li>
      <li>Content here, content here', making it look like readable</li>
        <li >  Packages and web pageLorem Ipsum as their default</li>
    </ol>

    <div class=" rounded-2xl  bg-[#F1EDEA] p-10">
        <h1 class="   font-bold text-[#274C5B] text-xl">“The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”</h1>
    </div>

    <h1 class="md:text-3xl font-bold text-[#274C5B] text-2xl">Make perfect organic product with us</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
   
    <ol  type="1"  class="  px-4 space-y-4">
        <li > Publishing packages and web pageLorem Ipsum as their default</li>
      <li>Content here, content here', making it look like readable</li>
        <li >  Packages and web pageLorem Ipsum as their default</li>
        <li >    more-or-less normal distribution of letters</li>
    </ol>
</div>

   </div>
   <div class=" container mx-auto ">

       <p  class="  text-left w-2/3 mx-auto"> Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p>
   </div>

   </div>
</div>
<Landing10/>

<style>
    .ol{
        list-style-position: inside;
list-style-type: square;
}
ol{
    list-style-position: inside;
    list-style-type: desimal;
}
</style>