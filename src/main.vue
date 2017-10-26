<template>
  <div id="Rea-Home">
    <!-- <div class="nav" id="myNav">
      <ul>
        <li v-for="link in links">
          <router-link :to="{path: link.href}">{{link.name}}</router-link>
        </li>
      </ul>
    </div> -->

    <my-nav></my-nav>


    <router-view></router-view>

  </div>

</template>


<script>

  import MyNav from './components/Nav.vue'

  export default {
    components: {
      MyNav
    },
    data () {
      return {
        links: [
          {href:'Overview', name: 'Home'},
          {href:'Description', name: 'Description'},
          {href:'Design', name: 'Design'},
          {href:'Results', name: 'Results'},
          {href:'Modeling', name: 'Modeling'},
          {href:'BiologyFestival', name: 'BiologyFestival'},
          {href:'Ethics', name: 'Ethics'},
          {href:'HP-ccic', name: 'HP-ccic'},
          {href:'PE-ccic', name: 'PE-ccic'},
          {href:'Safety', name: 'Safety'},
          {href:'LabNotes', name: 'LabNotes'},
          {href:'Protocols', name: 'Protocols'},
          {href:'Interlab', name: 'Interlab'},
          {href:'Parts', name: 'Parts'},
          {href:'Team', name: 'Team'}
        ]
      }
    }
  }


</script>


<style scoped>
  #Rea-Home {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
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

</style>
