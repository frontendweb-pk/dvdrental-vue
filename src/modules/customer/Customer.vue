<template>
    <h1>Customers</h1>
    {{ cStore.customers }}

</template>
<script lang="ts" setup>
import { useCustomer } from '@/store';
import { onMounted } from 'vue';


const cStore = useCustomer();


onMounted(async () => {
    await cStore.fetchCustomers();
});
// await cStore.fetchCustomers();

</script>