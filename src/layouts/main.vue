<template>
  <div class="container">
    <div class="nav" id="myNav">
      <ul>
        <li v-for="link in links">
          <v-link :href="link.href">{{link.name}}</v-link>
        </li>
      </ul>
    </div>

    <div class="main-content">
      <div class="header">
        <slot name="header"></slot>
      </div>
      
      <div>
        <slot name="content"></slot>
      </div>
    </div>

    <div id="audio-container">
      <div id="bottom-positioner">
        <div id="button">
          <div id="button-container">
            <ul>
              <li id="play-btn" class="waves-effect" title="播放">
                <svg class="svg-icon" id="play-svg" style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="#FFFFFF" d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
                </svg>
                <svg class="svg-icon" display-none id="pause-svg" style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="#FFFFFF" d="M14,19H18V5H14M6,19H10V5H6V19Z"></path>
                </svg>
              </li>

              <li id="previous-btn" class="waves-effect" title="上一首" >
                <svg class="svg-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="#FFFFFF" d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z"></path>
                </svg>
              </li>

              <li id="next-btn" class="waves-effect" title="下一首">
                <svg class="svg-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="#FFFFFF" d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z"></path>
                </svg>
              </li>
            </ul>
          </div>
          <div id="apb">
            <div class="apb-icon">
              <svg class="svg-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#FFFFFF" d="M12,3V12.26C11.5,12.09 11,12 10.5,12C8,12 6,14 6,16.5C6,19 8,21 10.5,21C13,21 15,19 15,16.5V6H19V3H12Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    },
    data () {
      return {
        links: [
          {href:'/', name: 'Home'},
          {href:'/blog', name: 'Blog'},
          {href:'/newBlog', name: 'New-blog'}
        ]
      }
    }
  }


</script>


<style scoped>
  .container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .nav {
    position: fixed;
    float: left;
    width: 20%;
    height: 100%;
    box-shadow: 1px 1.5px 1px 1.5px #DDDDDD;
    padding: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .nav ul {
    list-style: none;
  }

  .nav li {

  }

  p {
    margin: 0;
  }

  .main-content {
    width: 80%;
    height: 100%;
    float: right;
  }

  .header {
    width: 100%;
    height: 2.5em;
    background-color: #4A8CF6;
    padding: 0.5em;
    color: white;
  }

  .content {
    overflow-y: scroll;
    overflow-x: hidden;
  }

  #audio-container {
    position: fixed;
    bottom: 50px;
    right: 10px;
    width: 160px;
    height: 120px;
    z-index: 10000;
  }

  #bottom-positioner {
    position: absolute;
    width: 100%;

  }

  #button {
    width: 40px;
    height: 40px;
    right: 60px;
    margin-top: 80px;
    margin-left: 60px;
  }


  #button:hover #button-container {

  }

  #button:hover #button-container ul li {
    transform: scale(1);
    transition: all 0.5s ease-in;
  }

  #button:hover #button-container ul li:nth-child(1) {
    top:0;
    
  }

  #button:hover #button-container ul li:nth-child(2) {
    top: 20px;
    margin-left: -50px;
  }

  #button:hover #button-container ul li:nth-child(3) {
    top: 20px;
    margin-left: 50px;
  }

  #button:hover #button-container {
    
    z-index: 0;
  }

  #button-container {
    position: absolute;
    width: 100%;
    height: 100px;
    top: 0;
    right: 0px;
    z-index: -100;
  }

  #button-container ul {
    position: absolute;
    width: 100%;
  }

  #button-container ul li {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #4A8CF6;
    top: 65px;
    left: 60px;
    transform: scale(0);
    transition: all 0.5s ease-out;
    text-align: center;
    line-height: 50px;
  }

  #apb {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 60px;
    bottom:0;
    background-color: grey;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
  }

  .svg-icon {
    /*position: absolute;*/
    text-align: center;
  }

</style>
