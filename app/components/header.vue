<template>
   <header class="flex-all flex--ai-c flex--jc-sb w100">
       <div class="logo">
            <nuxt-link to="/" class="sans-serif">
                <img src="~/static/the_swell_space_logo_blue.svg" alt="four blue waves">
                <span>the swell space</span>
            </nuxt-link>
       </div>
       <nav>
           <ul class="flex-all lst-n p0">
               <li class="mono uppercase menu-item"><nuxt-link to="/about">About</nuxt-link></li>
               <li class="mono uppercase menu-item"><nuxt-link to="/topics">Topics</nuxt-link></li>
               <li class="mono uppercase menu-item"><nuxt-link to="#contact">Contact</nuxt-link></li>
           </ul>
       </nav>
   </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    components: {
    },
    data: function() {
        return {

        }
    },
    methods: {
        assignActiveLink(){

        }
    },
}
</script>

<style lang="scss" scoped>

header {
    padding: 20px;
}

.logo {
    font-size: 30px;
    padding-left: 20px;
    transition: all 0.2s ease;
    &:hover {
        opacity: 0.5;
    }
}

li {
    font-size: 14px;
    a {
        padding: 1rem 20px;
        &:hover {
            font-weight: 700;
        }
    }
}
   


</style>
