<template>
  <div>
    <background-img/>
    <nav-bar-top/>
    <div class="container-buttons">
      <searchBar @search="getResults" @search-result="searchFunction" />
      <div class="button-group">
        <div>
          <button type="button" class="btn btn-primary kredi-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cash-coin"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
              />
              <path
                d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"
              />
              <path
                d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"
              />
              <path
                d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"
              />
            </svg>
            Kredi
          </button>
        </div>
        <div>
          <button type="button" class="btn btn-primary adres-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
              />
            </svg>
            Adres
          </button>
        </div>
        <div>
          <button type="button" class="btn btn-primary bakiye-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-coin"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"
              />
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fill-rule="evenodd"
                d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
            00.00
          </button>
        </div>
        <div>
          <button type="button" class="btn btn-success sepet-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-basket2-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"
              />
            </svg>
            Sepet
          </button>
        </div>
      </div>
    </div>
    <div class="container-fluid menu-box">
      <div class="row" >
        <menuCard
          v-for="(card, index) in menuCardData"
          :key="index"
          :name="getCompValue(card.name)"
          :price="getCompValue(card.price)"
          :img-src="getCompValue(card.url)"
          @update='$emit("update : getCompValue(card.name)", $event.target.name, "update : getCompValue(card.price)", $event.target.price,"update : getCompValue(card.url)", $event.target.img-src)'
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import searchBar from "../components/searchBar.vue";
import menuCard from "@/components/menuCard.vue"
import backgroundImg from '../components/backgroundImg.vue'
import navBarTop from '../components/navbarTop.vue'

let componentData;
let compared;
let arrayOfNames;
let empty = [];
export default {
  components: {
    menuCard,
    searchBar,
    backgroundImg,
    navBarTop
  },

  data() {
    return {
      menuCardData: null,
      queryData: null,
      data: null,
    };
  },
  mounted() {
    this.getValues();
    this.getCompValue();
  },
  methods: {
    getCompValue: function (prop) {
      componentData = prop;
      this.data = prop;
      return prop;
    },
    async getResults(value) {
      try {
        let response = await axios.$get(
          "http://192.168.70.125:3000/menu?name=" + value
        );
        this.queryData = response.data.filteredQuery;
        this.menuCardData = this.queryData
        console.log(this.queryData.__ob__.value[0].name);
        
        componentData = this.queryData;
      } catch (err) {
        console.log(err);
      }
      
    },async getValues(){
      try{
        let res = await axios.get("http://192.168.70.125:3000/menu")
        this.menuCardData = res.data.coffees;
      }catch(err){
        console.log(err)
      }
    },
    searchFunction(value) {
      let data = value.data.filterByName;
      for (let i = 0; i < data.length; i++) {
        const currentArray = data[i];
        const currentArrayName = currentArray.name;
        for (const data of componentData) {
          if (currentArrayName.includes(data)) {
            arrayOfNames = currentArrayName;
            compared = true;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.menu-box {
  display: flex;
  position: absolute;
  width: 90%;
  height: 75%;
  background-color: #9e5e3b69;
  top: 25%;
  right: 5%;
  padding: 50px;
  z-index: -1;
}

body {
  overflow: hidden;
}

.menu-box {
  overflow: scroll;
}

::-webkit-scrollbar {
  display: none;
  visibility: hidden;
  opacity: 0;
}

.btn-primary {
  border: none;
  /* background-color: #1b73d8; */
}
.input-group {
  width: 30%;
}

.container-buttons {
  background-color: transparent;
  width: 90%;
  position: absolute;
  right: 5%;
  bottom: 77%;
  height: 5%;
  z-index: -1;
  display: flex;
}

.container-buttons .button-group {
  position: absolute;
  right: 0%;
  display: flex;
}

.container-buttons .button-group div {
  padding-left: 3rem;
}

@media screen and (max-width: 1200px) {
  .input-group {
    width: 45%;
  }

  .kredi-btn {
    display: none;
  }

  .adres-btn {
    display: none;
  }
}
@media screen and (max-width: 575px) {
  .container-buttons {
    display: flex;
  }

  .input-group {
    position: absolute;
    top: 0;
    width: 100%;
  }

  .kredi-btn {
    display: none;
  }

  .adres-btn {
    display: none;
  }

  .bakiye-btn {
    display: none;
  }

  .sepet-btn {
    display: none;
  }
}
</style>
