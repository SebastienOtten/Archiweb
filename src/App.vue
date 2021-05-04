<template>

  <div id="app"><h1>ActuFilm</h1>

  <Header></Header>
  <Footer></Footer>

  </div>

</template>


<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'app',
  components : {Footer,Header},
  data () {
    return {
    }
  },
  methods:{} 
}
</script>







<style>
body {/*couleur bleue base*/
    --base-color-h:203;
    --base-color-s:53%;
    --base-color-l:32%;
    --base-color:hsl(var(--base-color-h),
                  var(--base-color-s),
                  var(--base-color-l));
/*couleur orange second*/
    --second-color-h: 357;
    --second-color-s: 60%;
    --second-color-l: 64%;
    --second-color:hsl(var(--second-color-h),
                      var(--second-color-s),
                      var(--second-color-l));
/*couleur blanche third*/
    --third-color-h: 0;
    --third-color-s: 0%;
    --third-color-l: 96%;
    --third-color: hsl(var(--third-color-h),
                      var(--third-color-s),
                      var(--third-color-l));

}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
  padding: 60px;
  background-color: var(--base-color);
                    
}
h1 {
  color: var(--third-color);
}





</style>
