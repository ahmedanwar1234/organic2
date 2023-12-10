


<script>
  import Landing2Card from "./Landing2Card.svelte";


</script>



<div class=" container  mx-auto flex justify-between items-center my-20 p-20 max-md:flex-col overflow-hidden max-md:gap-y-10">
<div class=" bg px-10 gap-y-5">
    <h1 class="   text-4xl font font-normal  ">Natural!!</h1>
        <h1 class="  font-bold text-5xl   ">
            Get Garden<br/> Fresh Fruits
            </h1>
</div>
        
<div class=" bg2 px-10 gap-y-5">
    <h1 class=" text-[#68A47F]  text-4xl font font-normal  "> Offer!!</h1>
        <h1 class="text-[#274C5B] font-bold text-5xl  ">
            Get 10% off <br/>
            on Vegetables</h1>
</div>
        

</div>
<style>
.bg{
    background-image: url('$lib/images/Landing2/Photo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 680px;
    height: 367px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #FFFFFF;
    
}
.bg2{
    background-image: url('$lib/images/Landing2/Photo2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 680px;
    height: 367px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #FFFFFF;
}
.font{
    font-family: 'Yellowtail', cursive;
}
@media (max-width:600px){
    .bg,.bg2{
        width: auto;
        height: 300px;
       
    }
}
</style>