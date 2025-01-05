<template>
    <h1>{{ $content.login }}</h1>
    <form @submit="handleLogin">
        <input v-model="values.username" type="text" placeholder="Username" />
        <input v-model="values.password" type="password" placeholder="Password" />
        <button type="submit">{{ $content.submit }}</button>
    </form>
</template>

<script lang="ts" setup>
import { useAuth } from '@/store/auth';
import { ref } from 'vue';

const auth = useAuth() // import the useAuth function from the auth store
const values = ref({ username: '', password: '' })

// handleLogin function that will be called when the form is submitted
const handleLogin = (e: Event) => {
    e.preventDefault()
    auth.login(values.value) // call the login method from the auth store
}

</script>