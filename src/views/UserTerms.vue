<template>
  <div class="container">
    <order-completion :step="1" />
    <div class="container py-3">
      <div class="accettazione text-center">Accettazione delle clausole</div>
      <div class="attenzione text-center">
        Prima di proseguire con il pagamento bisogna confermare le seguenti
        condizioni
      </div>
      <form>
        <div class="mt-4 text-white">
          <div class="my-4 d-flex justify-content-center">
            <input type="checkbox" />
            <div class="w-50 ms-2">
              Ho letto e accetto le clausole riportate nei “Termini e
              condizioni”.
            </div>
          </div>
          <div class="my-4 d-flex justify-content-center">
            <input type="checkbox" />
            <div class="w-50 ms-2">
              Ho letto e accetto le clausole riportate nei “Termini e
              condizioni” di cui gli artt. : 3, 5.1 , 5 , 2 , 6 , 7 , 8 , 10 ,
              11 , 12 , 13 , 14.1 , 14.2 , 14.3 , 14.4 , 15 , 17.1 , 17.2 , 17.3
              , 17.4 , 18 , 19 , 21 , 21.2 e 22.
            </div>
          </div>
          <div class="my-4 d-flex justify-content-center">
            <input type="checkbox" />
            <div class="w-50 ms-2">
              Ho capito che se il peso e/o il volume dei colli spediti dovessero
              essere maggiore rispetto a quello dichiarato al momento
              dell’acquisto, potrebbe essermi addebitata la differenza di
              prezzo.
            </div>
          </div>
          <div class="my-4 d-flex justify-content-center">
            <input type="checkbox" />
            <div class="w-50 ms-2">
              Confermo che il valore dei beni che ho fornito è corretto.
            </div>
          </div>
          <div class="my-4 d-flex justify-content-center">
            <input type="checkbox" />
            <div class="w-50 ms-2">
              Confermo di non spedire oggetti con restrizioni e che la mia
              spedizione non contiene alcool, droghe illegali, ogni altra forma
              di contrabbando o qualsiasi oggetto che richiede una licenza di
              trasporto. Accetto che oggetti con restrizioni vengano sequestrati
              e distrutti senza riborso alcuno
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="d-flex justify-content-center gap-4 py-4">
      <router-link class="back" to="/">Torna indietro</router-link>
      <router-link class="go" :to="{name : 'PaymentArea'}">Procedi al pagamento</router-link>
    </div>
  </div>
</template>

<script>
import OrderCompletion from "@/components/OrderCompletion.vue";
export default {
  components: { OrderCompletion },
};
</script>

<style lang="scss" scoped>
.accettazione {
  color: #bdbdbd;
  font-weight: 500;
}
.attenzione {
  color: #e76262;
  font-weight: bold;
  max-width: 40ch;
  margin: 0.8rem auto;
  font-size: 1.2rem;
}
input {
  width: 20px;
  height: 20px;
  accent-color: #4774fb;
  margin: 0 0.3rem;
}

a {
  padding: 0.5rem 1.2rem;
  text-align: center;
  background: none;
  color: #fff;
  text-decoration: none;
  display: inline-block;
}
.back {
  border: 1px solid #e76262;
}
.go {
  border: 1px solid #4774fb;
  &:hover {
    color: #8ba1e2;
  }
}

@media screen and (max-width : 780px){
  .w-50 {
    width: 100% !important;
  }
}


</style>
