<template>
  <div class="row justify-content-center py-4 text-center">
    <div class="col">
      <span :class="{ 'attivo': step === 1 , 'inattivo' : step !==1   }" class="circle">1</span
      ><span :class="{ 'attivo_text': step === 1 , 'inattivo_text' : step !==1    }">Dettagli ordine</span>
    </div>
    <div class="col">
      <span :class="{ 'attivo': step === 2 , 'inattivo' : step !==2  }" class="circle">2</span
      ><span :class="{ 'attivo_text': step === 2 , 'inattivo_text' : step !==2   }">Dettagli pagamento</span>
    </div>
    <div class="col">
      <span :class="{ 'attivo': step === 3 , 'inattivo' : step !==3   }" class="circle">3</span
      ><span :class="{ 'attivo_text': step === 3 , 'inattivo_text' : step !==3   }"> Conferma dell'ordine</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: Number,
  },
};
</script>

<style lang="scss" scoped>
.circle {
  width: 44px;
  height: 44px;
  display: inline-block;
  line-height: 44px;
  text-align: center;
  margin: 0 0.4rem;
  font-size: 1.5rem;
  border-radius: 50%;
  vertical-align: middle;
}
.attivo {
  background: #f5f5f5;
  color: #121212;
}
.inattivo {
    background: #1B1B1B;
    color: #C2C2C2;
}
.attivo_text {
  color: #f5f5f5;
  font-weight: 600;
}
.inattivo_text {
    color: #C2C2C2;
}
</style>
