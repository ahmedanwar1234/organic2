<script>
	import Footer from '../components/Footer.svelte';
import Header from './../components/Header.svelte';
 import "./styles.css";


    </script>

<div class="layout overflow-hidden">
<Header />
<div class=" my-20">

</div>
    <slot></slot>
    <Footer/>
</div>



<style>
    .layout{
        font-family: 'Roboto', sans-serif;
    }
</style>