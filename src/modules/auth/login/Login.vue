<template>
    <h1>{{ $content.login }}</h1>
    <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">{{ $content.submit }}</button>
    </form>
</template>

<script lang="ts" setup>
</script>