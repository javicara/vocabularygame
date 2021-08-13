<template>
  <div align-h="center">
    <h3>Agregar</h3>
    <b-row>
      <b-col offset-md="5" cols="2">
        <label for="name-event">Palabra:</label>
        <b-form-input
          v-model="word.word"
          placeholder="Ingresa la palabra"
          trim
        ></b-form-input>
      </b-col>
      <b-col offset-md="4" cols="4">
        <label for="name-event">Traduccion:</label>
        <b-form-input
          id="input-live"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Ingresa su traduccion"
          trim
          v-model="word.traduction"
        >
        </b-form-input>
      </b-col>
    </b-row>
    <br />
    <div class="container">
      <b-button block variant="success" v-on:click="addWord(word)"
        >Agregar Palabra</b-button
      >
    </div>
  </div>
</template> 

<script>
export default {
    data() {
    return {
        word:{
          word:'',
          traduction:''
          
            
        },

        
    };
    },
    methods:  {
      addword(){
        console.log('addWord');
      }
    
},
}
</script>
