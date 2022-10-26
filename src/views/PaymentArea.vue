<template>
  <div>
    <div class="container">
      <order-completion :step="2" />
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-sm-12 col-md-8 payment px-md-5">
          <div class="fw-bold text-white">Metodi di pagamento</div>
          <div class="row py-4 gap-5">
            <div class="col payment-type d-flex align-items-center gap-4">
              <input
                type="radio"
                name="pagamento"
                value="bonifico"
                v-model="pagamento"
                id=""
              />
              <div class="payment-icon">
                <i class="fa-solid fa-euro-sign"></i>
              </div>
              <div class="payment-title text-white">Bonifico bancario</div>
            </div>
            <div class="col payment-type d-flex align-items-center gap-4">
              <input
                type="radio"
                name="pagamento"
                value="carta"
                v-model="pagamento"
                id=""
              />
              <div class="payment-icon">
                <i class="fa-solid fa-credit-card"></i>
              </div>
              <div class="payment-title text-white">Carta di credito</div>
            </div>
          </div>
          <div
            class="text-white py-4 gap-3 d-flex flex-column"
            v-if="pagamento === 'carta'"
          >
            <div>
              <label for="numero-carta" class="py-2">Numero carta</label>
              <input
                type="text"
                name="numero-carta"
                maxlength="16"
                class="w-50"
                id="numerocarta"
              />
            </div>
            <div>
              <div class="d-flex">
                <div class="">
                  <label for="scadenza-carta" class="py-2"
                    >Data di scadenza</label
                  >
                  <input
                    type="text"
                    name="scadenza-carta"
                    maxlength="4"
                    id="scadenzacarta"
                  />
                </div>

                <div class="">
                  <label for="cvc-carta" class="py-2">CVC</label>
                  <input type="text" name="cvc-carta" maxlength="3" id="cvc" />
                </div>
              </div>
            </div>
            <div class="mt-4">
              <router-link to="/"
                >Conferma e paga <span>152.50€</span></router-link
              >
            </div>
          </div>
          <div v-if="pagamento === 'bonifico'">
            <div class="mt-4">
              <router-link to="/"
                >Conferma l'ordine di <span>152.50€</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 text-white">
          <div class="fw-bold order">Il tuo ordine</div>
          <div class="d-flex justify-content-between py-3">
            <div>imponibile</div>
            <div>125.00€</div>
          </div>
          <div class="d-flex justify-content-between py-3">
            <div>Iva</div>
            <div>27.50€</div>
          </div>
          <div class="d-flex justify-content-between py-3 totale">
            <div>Totale</div>
            <div>152.00€</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderCompletion from "@/components/OrderCompletion.vue";
export default {
  components: { OrderCompletion },

  data() {
    return {
      pagamento: null,
    };
  },
};
</script>

<style lang="scss" scoped>
input[type="radio"] {
  width: 15px;
  height: 15px;
  border: 5px solid rgb(54, 146, 212);
  accent-color: #4774fb;
}
.payment,
.order {
  font-size: 1.1rem;
}
.payment {
  border-right: 1px solid #c2c2c2;
}
.payment-type {
  background: #181818;
  border-radius: 20px;
  padding: 1.2rem;
}
.payment-icon {
  background: #222222;
  color: #fff;
  padding: 0.5rem;
  border-radius: 12px;
  width: 35px;
  height: 35px;
  line-height: 17.5px;
  text-align: center;
}
label {
  display: block;
}
input[type="text"] {
  background: #181818;
  border: 1px solid #4774fb;
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  color: #fff;

  &:focus {
    outline: none;
  }
}
#numerocarta {
  min-width: 200px;
}
#scadenzacarta,
#cvc {
  width: 60%;
}

a {
  text-decoration: none;
  color: #fff;
  text-align: center;
  background: #254093;
  border-radius: 8px;
  padding: 1.5rem 1rem;
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
  &:hover {
    color: #fff;
  }
}

.totale {
  border-top: 1px solid #fff;
}

@media screen and (max-width: 770px) {
  .payment {
    border: none;
  }
}
</style>
