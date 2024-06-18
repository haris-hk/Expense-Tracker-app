<template>
  <appname />
  <div class="container">
    <balance :total = "+total" />
    <headr :income = "+income" :expense = "+expense" />
    <transactions :transactionlist = "transaction"  @dtransaction = "handleDeletion" />
    <newTransaction @transactionSubmitted = "handleTransaction" />
  </div>
    
</template>




<script setup>
import appname from './components/appname.vue'
import headr from './components/head.vue'
import transactions from './components/transactions.vue'
import balance from './components/balance.vue';
import newTransaction from './components/newtransactions.vue' ;

import { ref, computed,  onMounted } from 'vue'
import {useToast} from 'vue-toastification'

onMounted(() => { 
  const savedtransaction = JSON.parse(localStorage.getItem('transaction'));
  if (savedtransaction) {
    transaction.value = savedtransaction;
  }

});

const toast = useToast();
const transaction = ref([]);

const total = computed(() => {return transaction.value.reduce((acc,transaction) => { return acc + transaction.amount;},0);});

const income = computed(() => {return transaction.value.filter((transaction) => transaction.amount > 0).reduce((acc,transaction) => { return acc + transaction.amount;},0).toFixed(2);});

const expense = computed(() => {return transaction.value.filter((transaction) => transaction.amount < 0).reduce((acc,transaction) => { return acc + transaction.amount},0).toFixed(2);});

const handleTransaction = (transactionData) => {
  transaction.value.push({
    id: transaction.value.length + 1,
    text: transactionData.text,
    amount: transactionData.amount,});
  savedtransactiontolocalstorage();
};

const handleDeletion = (id) =>
{ console.log(id);
  transaction.value = transaction.value.filter((transaction) => transaction.id !== id);
  toast.success('Transaction deleted successfully');
  savedtransactiontolocalstorage();
};

const savedtransactiontolocalstorage = () => {
  localStorage.setItem('transaction', JSON.stringify(transaction.value));
};
</script>


