<template>
  <div class="buttons">
    <header>
        <div class="directions-box">
            <h1 class="directions">Press either button for a surprise</h1>
        </div>
    </header>
    <b-container class="buttons-container" fluid>
      <b-row>
        <b-col>
          <div class="button-div">
            <b-button @click="change1" class="b-button" pill variant="outline-success">Button</b-button>
          </div>
          
        </b-col>
        <b-col>
          <div class="button-div">
            <b-button @click="change2" class="b-button" pill variant="outline-danger">
              Button
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>



export default {
  name: "Buttons",
  props: {
    msg: String,
  },
  methods: {
    change1: function () {
      let colors = ["primary", "secondary", "success", "warning", "danger", "info", "dark", "outline-primary", "outline-secondary", "outline-success", "outline-warning", "outline-danger", "outline-info", "outline-dark"]

      let colorNum = Math.floor(Math.random() * colors.length);



      console.log(colorNum);
      console.log("hello");
      alert("You pressed Green!");
    },
    change2: function () {
      let colors = ["primary", "secondary", "success", "warning", "danger", "info", "dark", "outline-primary", "outline-secondary", "outline-success", "outline-warning", "outline-danger", "outline-info", "outline-dark"]

      let colorNum = Math.floor(Math.random() * colors.length);



      console.log(colorNum);
      console.log("hello");
      alert("You pressed Red!");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.directions-box {
    padding: 50px;
    color: white;
}
.directions {
    font-family: 'Marck Script', cursive;
}
.button-div {
  /* border: 2px solid gold; */
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.b-button {
  height: 25vh;
  width: 25vw;
}
.buttons {
  height: 100vh;
  width: 100vw;
  /* border: 2px solid green; */
  display: flex;
  align-items: center;
  flex-direction: column;
}
.buttons-container {
  /* border: 2px solid blue; */
}
</style>
