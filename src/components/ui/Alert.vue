<template>
    <div v-if="alert.visible" class="alert">
        <slot>
            <p>{{ alert.message }}</p>
        </slot>
    </div>
    {{ props }}
</template>
<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import { useAlert } from '@/store/alert';
const props = defineProps<{
    message: string,
    visible: boolean,
    type: string
}>()


const alert = useAlert()
</script>