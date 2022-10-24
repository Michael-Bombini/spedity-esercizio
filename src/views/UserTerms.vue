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
          <div class="my-3 d-flex justify-content-center">
            <input type="checkbox" />
            <div class="w-75 ms-2">
              Confermo di non spedire oggetti con restrizioni e che la mia
              spedizione non contiene alcool, droghe illegali, ogni altra forma
              di contrabbando o qualsiasi oggetto che richiede una licenza di
              trasporto. Accetto che oggetti con restrizioni vengano sequestrati
              e distrutti senza riborso alcuno
            </div>
          </div>
          <div class="my-3 d-flex justify-content-center">
            <input type="checkbox"/>
            <div class="w-75 ms-2">
              Confermo di non spedire oggetti con restrizioni e che la mia
              spedizione non contiene alcool, droghe illegali, ogni altra forma
              di contrabbando o qualsiasi oggetto che richiede una licenza di
              trasporto. Accetto che oggetti con restrizioni vengano sequestrati
              e distrutti senza riborso alcuno
            </div>
          </div>
          <div class="my-3 d-flex justify-content-center">
            <input type="checkbox" />
            <div class="w-75 ms-2">
              Confermo di non spedire oggetti con restrizioni e che la mia
              spedizione non contiene alcool, droghe illegali, ogni altra forma
              di contrabbando o qualsiasi oggetto che richiede una licenza di
              trasporto. Accetto che oggetti con restrizioni vengano sequestrati
              e distrutti senza riborso alcuno
            </div>
          </div>
          <div class="my-3 d-flex justify-content-center">
            <input type="checkbox" />
            <div class="w-75 ms-2">
              Confermo di non spedire oggetti con restrizioni e che la mia
              spedizione non contiene alcool, droghe illegali, ogni altra forma
              di contrabbando o qualsiasi oggetto che richiede una licenza di
              trasporto. Accetto che oggetti con restrizioni vengano sequestrati
              e distrutti senza riborso alcuno
            </div>
          </div>
          <div class="my-3 d-flex justify-content-center">
            <input type="checkbox" />
            <div class="w-75 ms-2">
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
</style>
