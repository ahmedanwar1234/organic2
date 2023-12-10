<script>
import logo from '$lib/images/Logo.png'
  import HeaderCard from './HeaderCard.svelte';
  import shopcard from '$lib/images/header/Icon.svg'
  import search from '$lib/images/header/search.png'
  import bottom from '$lib/images/bottm.png'
  const ul=[
	{name:'Home',href:'/'},
	{name:'About',href:'/about'},
	{name:'Pages',href:'/'},
	{name:'Shop',href:'/shop'},
	{name:'Services',href:'/services'},
	{name:'News',href:'/news'},
]
let open=false

const handleOpen=()=>open=true
const handleClose=()=>{
	
	open=false

	console.log(open)
}

</script>

<div class={` ${ "fixed top-0 left-0 right-0 bg-[#FFFFFF] w-full z-50"}`}>
	<header class=" container mx-auto p-5  " >
	<div class=" relative flex justify-between items-center">
<div class=" flex  items-center gap-x-2">
	<a href="/" class=" flex gap-x-2 items-center">
		
		<img src={logo} class=" cursor-pointer max-md:w-7" width="36" alt="">
		<h1 class=" font-bold text-[#274C5B] font-sans text-xl md:text-3xl">Organick</h1>
	</a>
</div>

<div class={`max-md:hidden  max-md:fixed max-md:z-10      max-md:bottom-0  max-md:left-0 max-md:px-5  max-md:w-full max-md:text-[#FFFFFF] max-md:h-14  max-md:bg-[#274C5B]   `} >
<ul class={`flex  md:gap-x-10  max-md:justify-between max-md:items-center max-md:h-full `}>
	{#each ul as li }

	{#if li.name===('Pages') }
	<div class=" cursor-pointer group relative flex items-center gap-x-2 justify-center">
		<button on:click={()=>open=!open}><li class="md:text-[#274C5B] text-lg font-semibold">{li.name}</li>
		</button>
		<img class=" hidden md:block" src={bottom} alt="">
		<div class=" md:hidden  flex relative">
			<div class=" absolute  -rotate-[60deg] w-3 h-[2px] bg-white"></div>
			<div class=" rotate-[60deg] w-3 h-[2px] bg-white"></div>
		</div>

<div class={`   z-50 rounded-xl  p-5   ${open ? "" :"hidden" }  md:group-hover:block absolute text-[#FFFFFF] bg-[#274C5B] md:hidden md:top-full left-0`}>
 <div class={` z-50  flex flex-col gap-y-2`}  >
	<a href="/team">	<button on:click={()=>open=!open}><h1>Team</h1></button>
	</a>	
	<a href="/portfolio">	<button on:click={()=>open=!open}><h1>Portfolio</h1></button>
	</a>	
		<a href="/contact">	<button on:click={()=>open=!open}><h1>Contact</h1></button>
		</a>	

	
 </div>
</div>
	</div>

	{:else }

	
	<a  class={`${li.name==='News' && 'max-md:hidden'} ${li.name==='Projects' && 'max-md:hidden'}`} href={li.href}><li class="  md:text-[#274C5B] text-lg font-normal md:font-semibold ">{li.name}</li>
	</a>
{/if}


{/each}
</ul>
</div>
<div class=" max-md:hidden flex gap-x-5   items-center ">
	

	<HeaderCard classs={" bg-[#7EB693] md:w-12 md:h-12   "}>
		<img class=" " src={search} width="19" height="19" alt="">
	</HeaderCard>
	<div class=" group cursor-pointer  hover:bg-[#274C5B] transition-all  flex justify-between items-center gap-x-2 p-1 border  border-gray-400 rounded-2xl">

		<HeaderCard classs={"bg-[#274C5B] w-10  h-10 md:w-12 md:h-12 transition-all "}>
			<img class=" " src={shopcard} width="23" alt="">
		</HeaderCard>
		<h2 class=" group-hover:text-[#FFFFFF] font-semibold">Cart (0)</h2>
	</div>
</div>

<div class=" md:hidden  ">
<button on:click={handleOpen}>
	<div class="  space-y-1   flex flex-col items-end">
		<div class=" w-7 h-[2px] bg-black"></div>
		<div class=" w-4 h-[2px] bg-black"></div>
		<div class=" w-7 h-[2px] bg-black"></div>
	</div>
</button>
{#if open}
	<div class:hidden={!open} class=" fixed inset-0 bg-[#274C5B] z-40">
<button class=" text-white font-bold z-50  p-5 w-full text-end" on:click={handleClose}>Close</button>

<ul class={`flex flex-col  gap-y-10   gap-y- max-md:items-center  `}>
	{#each ul as li }


	<a on:click={handleClose}  class={`${li.name==='Pages'&&'hidden'}`} href={li.href}><li class="  text-[#FFFFFF] f text-lg font-normal md:font-semibold ">{li.name}</li>
	</a>

{/each}
<a on:click={handleClose}  href="/portfolio"><li class="  text-[#FFFFFF] f text-lg font-normal md:font-semibold ">Portfolio</li></a>
<a  on:click={handleClose}  href="/team"><li class="  text-[#FFFFFF] f text-lg font-normal md:font-semibold ">Our Team</li></a>
<a on:click={handleClose}  href="/contact"><li class="  text-[#FFFFFF] f text-lg font-normal md:font-semibold ">Contact Us</li></a>
</ul>
	</div>
	
{/if}

</div>

</div>


</header>
</div>



<style>


 @media  (max-width:500px){
		ul a{

   border-bottom: 1px solid #7EB693;
	}
 }
</style>