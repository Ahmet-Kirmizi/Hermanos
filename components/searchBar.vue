<template>
  <div>
    <div class="input-group">
      <b-form-input
        type="text"
        class="form-control"
        v-model="name"
        placeholder="Search for..."
        id="searchInput"
        debounce="300"
      />
      <span class="input-group-btn">
        <button
          class="btn btn-primary"
          type="button"
          v-on:click="sendSearchData()"
          id="searchButton"
        >
          <i class="fa fa-search fa-fw"></i> Search
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: null,
  data() {
    return {
      searchData: null,
      name: null,
    };
  },
  watch: {
    name() {
      this.$emit('search', this.name)
    },
  },
  methods: {
    sendSearchData: function () {
      axios
        .post("http://192.168.70.125:3000/menu/search", {
          name: this.name,
        })
        .then((res) => {
          this.$emit('search-result', res)
        });
    },
  },
  mounted() {
    var input = document.getElementById("searchInput");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
      }
    });
  },
};
</script>