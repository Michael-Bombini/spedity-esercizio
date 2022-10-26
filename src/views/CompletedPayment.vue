<template>
  <div>
    <div class="container">
      <order-completion :step="3" />
      <div class="text-center py-4 text-white">
        <img src="../assets/images/success.png" alt="" />
        <h2 class="fw-bold py-3">
          Ordine
          <span v-if="this.$route.params.type === 'bonifico'">confermato</span
          ><span v-if="this.$route.params.type === 'carta'">completato</span>
        </h2>
        <div class="thankyou">
          Grazie di usare Spedity per le tue spedizioni
        </div>
        <div class="mt-5 mb-3" v-if="this.$route.params.type === 'bonifico'">
          Siamo in attesa di un bonifico effettuato <br />
          con questi dati
        </div>
        <div class="bonifico" v-if="this.$route.params.type === 'bonifico'">
          <ul>
            <li>
              <span class="bonifico-title">IBAN </span>
              <span>IT45R0200874601000104363164</span>
            </li>
            <li>
              <span class="bonifico-title">Beneficiario </span>
              <span>Spedity srl</span>
            </li>
            <li>
              <span class="bonifico-title">Importo </span> <span>152.50€</span>
            </li>
            <li>
              <span class="bonifico-title">Causale </span>
              <span>Pagamento ordine 7C1E9785 </span>
            </li>
          </ul>
        </div>
        <router-link to="/">Controlla lo stato dell'ordine</router-link>
      </div>
    </div>
  </div>

 
</template>

<script>
const {
  default: OrderCompletion,
} = require("@/components/OrderCompletion.vue");

export default {
  components: { OrderCompletion },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 2rem;
}
.thankyou {
  font-size: 1.1rem;
}
.bonifico {
  padding: 1.2rem;
  border: 2px solid #b3b3b3;
  margin: auto;
  min-width: 280px;
  max-width: 750px;
}
.bonifico-title {
  color: rgb(49, 114, 206);
}
ul {
  list-style-type: none;
  padding: 0;

  li {
    padding: 0.5rem 0;
  }
}

a {
  color: #fff;
  border: 1px solid #4774fb;
  background: none;
  display: inline-block;
  margin-top: 2rem;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  padding: 1rem 1.8rem;
  &:hover {
    color: #fff;
  }
}
@media screen and (max-width: 350px) {
  span {
    display: block;
  }
}
</style>
