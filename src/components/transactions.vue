<template><h3>History</h3>
    <ul id="list" class="list">
        <li v-for = "transact in transactionlist" :key = transactionlist.id :class = "transact.amount < 0 ? 'minus' : 'plus'">
            {{transact.text}} <span>{{transact.amount}}</span><button @click ="DelTransaction(transact.id)" class="delete-btn">x</button>
        </li>
    </ul></template>


<script setup>
import { defineProps } from 'vue'
const props = defineProps({ transactionlist:{
    type: Array,
    required: true
},
});

const emit = defineEmits(['dtransaction']);

const DelTransaction = (id) => {
    emit('dtransaction', id)
};

</script>