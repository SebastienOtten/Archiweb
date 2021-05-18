<template>
    <div id="About">
        <h1> Contact</h1>

    <div class = "nous">
        <p>Mail : <a id="lienmail" href="mailto:otten.sebastien@hotmail.com" title="Envoyer un mail">otten.sebastien@hotmail.com</a></p>
        <p>
        <br>
        Téléphone : 0470/69.57.21 </p>
        <p>
        <br>
        Adresse : Vandenschrieckstraat 114, 1500 Halle</p>
        <p>
        <br>
        <img src="Location.png" alt="carte des alentours de mon domicile" title="Voici la carte de mon adresse"></p>
    </div>
    </div> 
</template>
<script>
    export default {
        name: 'About',
        data() {
            return {}
        },
        methods: {}
    }
</script>







<style >
#About{
    padding: 5px;
    color: var(--third-color);
}

.nous{
    background-color: var(--base-color);
    padding: 5px;
    Width: 70%;
    margin: auto;
}
#lienmail{
    color: var(--third-color);
}
img{
    height: 80%;
    width: 80%;
    margin: auto;
    padding: 5px;
}
@media (max-width : 800px) {
img{
    height: 90%;
    width: 90%;
}
#About p{
    width: auto;
}
    };


</style>