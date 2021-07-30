<template>
  <div>
    <div class="input-group">
      <input type="text" class="form-control" v-model="name" placeholder="Search for..." />
      <span class="input-group-btn">
        <button
          class="btn btn-primary"
          type="button"
          v-on:click="sendSearchData()"
        >
          <i class="fa fa-search fa-fw"></i> Search
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name : null,
    data(){
        return {
            searchData : null,
            name : null,
        }
    },
 methods : {      
         sendSearchData : function () {
                axios.post("http://192.168.70.125:3000/menu/search", {
                    name : this.name
                }).then(
                    res =>{
                        console.log(res)
                    }
                );
      }
    } 
  }
</script>