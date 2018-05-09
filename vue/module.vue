<template>
  <div class="wrapper">
    <text class="button" @click="click">Test MyModule</text>
	<text class="button" @click="clickdouble">Test MyModule¿πΩÿ</text>
  </div>
</template>


<script>
  module.exports = {
    methods: {
      click: function() {
        weex.requireModule('MyModule').printLog("I am a weex Module");
      },
	  clickdouble: function() {
        weex.requireModule('MyModule').printDoubleLog("I am a weex Module");
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .button {
    font-size: 60px;
    width: 500px;
    text-align: center;
    margin-bottom: 80px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-width: 2px;
    border-style: solid;
    color: rgb(65, 184, 131);
    border-color: rgb(65, 184, 131);
    background-color: rgba(65, 184, 131, 0.2);
  }
</style>