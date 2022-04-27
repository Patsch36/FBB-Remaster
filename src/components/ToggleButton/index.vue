<template>
  <div class="toggle-button">
    <input type="checkbox" id="toggle" ref="toggle" @click="myFunctionClick()">
    <label for="toggle" class="toggle_button"></label>
  </div>
</template>

<script>
export default {
    methods:{
        myFunctionClick: function () {

            setTimeout(() => {
                document.body.classList.toggle('dark-theme');

                if(document.body.classList.contains('dark-theme')){
                    localStorage.setItem('darkTheme', 'active');
                }else{
                    localStorage.removeItem('darkTheme');
                
            }}, 500);

            
        }
    }
};
</script>

<style>
template {
    font-family: 'Poppins', sans-serif;
    background-color: #151515;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 100vh;
}

#toggle {
    display: none;
}

.toggle_button {
    display: inline-block;
    width: 80px;
    height: 25px;
    background-color: var(--dark-color);
    border-radius: 30px;
    position: relative;
    cursor: pointer;
}

.toggle_button::after {
    content: url('../../assets/images/icons/moon.svg');
    width: 30px;
    height: 30px;
    background-color: #1f257f;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, .25);
    position: absolute;
    top: -2.5px;
    /* Since the button has a height of 25px and the ::after has 30px, offset the difference by pushing it up by 5px to center this element vertically. */
    left: 0;
    display: grid;
    place-content: center;
    line-height: 0;
    transition: background-color 1s,
        transform 1s ease-in;
}

#toggle:checked+.toggle_button::after {
    content: url('../../assets/images/icons/sun.svg');
    background-color: #e03c3c;
    transform: translateX(50px) rotate(360deg);
    /* button-width - button::after-width*/
}

@media screen and (max-width: 600px) {
    .toggle_button{
        width: 50px;
        height: 25px;
    }

    #toggle:checked+.toggle_button::after {
    transform: translateX(20px) rotate(360deg);
    /* button-width - button::after-width*/
}
    
}

</style>