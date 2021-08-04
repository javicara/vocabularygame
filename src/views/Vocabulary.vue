<template>
  <div>
    <div class="container">
      <b-card-group deck>
        <b-card
          border-variant="primary"
          :header="selectedword.palabra"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <b-card-text>
            <b-button-group vertical>
              <b-button pill size="lg" variant="outline-primary" @click="checkAnswer(opciones.opc1)">{{opciones.opc1}}

              </b-button>
              <br>
              <b-button pill size="lg" variant="outline-primary" @click="checkAnswer(opciones.opc2)">{{opciones.opc2}}</b-button>
              <br>
              <b-button pill size="lg" variant="outline-primary" @click="checkAnswer(opciones.opc3)">{{opciones.opc3}}</b-button>
              <br>
              <b-button pill size="lg" variant="outline-primary" @click="checkAnswer(opciones.opc4)">{{opciones.opc4}}</b-button>
              <br>
            </b-button-group>
          </b-card-text>
              <b-button pill size="lg" variant="outline-danger" @click="selectWord()">Otra palabra</b-button>
            
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      palabra: "JUAN",
      
      opciones:{
        opc1:'Opcion 1 kas',
        opc2:'tu hermana',
        opc3:'Tu vieja',
        opc4:'Tu prima no esta diponible santiago del estero'
      },
      palabras:[
        {
          palabra:'pal1',
          traduccion:'Opcion 1 kas',
        },
        {
          palabra:'pal2',
          traduccion:'tu hermana',
        },
        {
          palabra:'pal3',
          traduccion:'Tu vieja',
        },
        {
          palabra:'pal4',
          traduccion:'Tu prima no esta diponible santiago del estero',
        },
        ],
      selectedword:'',
     


    };


  },
  methods: {
    checkAnswer(rta){
      if (rta==this.selectedword.traduccion) {
        alert('Correcto Rey');
      } else {
        alert('Novato')
      }
      },
      selectIndex(){
        const lenght= this.palabras.length
        var random;
        random=Math.floor(Math.random() * lenght) 
        //console.log(random);
        return random
      },
      async selectWord(){
      var index = this.selectIndex();
      if(index){
      this.selectedword=this.palabras[index];
      }
      else {
        alert('no hay mas palabras, recarga')
      }
      
      console.log('selected Word', this.selectedword);
      //console.log(this.palabras[index])
      
      this.palabras.splice(index,1)
      console.log(this.palabras)
      
      

      },
  },
  mounted() {
    this.selectWord();
  },
  
};
</script>
