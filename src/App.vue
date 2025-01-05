<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue';
import Alert from './components/ui/Alert.vue';
import { useAuth } from './store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuth();
const router = useRouter()
onBeforeMount(() => {
  authStore.checkAuth();
  if (authStore.isAuth) {
    console.log('User is authenticated');
    router.push('/admin');
  }
});

</script>

<template>
  <Alert />
  <RouterView />
</template>
