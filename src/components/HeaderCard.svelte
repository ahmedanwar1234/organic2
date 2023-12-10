
<script>

export let classs;
</script>


<div class={`${classs} p-[12px] rounde flex justify-center items-center  rounded-full`}  >
        <slot></slot>
        </div>


        <style>
            .rounde{
                border-radius: 100%;
            }
        </style>