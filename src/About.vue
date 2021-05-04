<template>
    <div id="About">
        <h1> Contact</h1>

    <div class = "nous">
        <p>Mail : <a id="lienmail" href="mailto:otten.sebastien@hotmail.com" title="Envoyer un mail">otten.sebastien@hotmail.com</a><br>
        Téléphone : 0470/69.57.21<br>
        Adresse : Vandenschrieckstraat 114, 1500 Halle<br></p>

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
}
.nous{
    border-radius: 10px;
    width: max-content;
    margin: auto;
    text-align: left;
}

#lienmail{
    color: var(--third-color);
}

</style>