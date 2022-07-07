<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <span v-if="!collapsed" class="info">
        <slot />
    </span>
  </router-link>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { collapsed } from '@/components/sidebar/state'
export default {
    props: {
        to: { type: String, required: true }
    },
    setup(props: { to: string }) {
        const route = useRoute()
        const isActive = computed(() => route.path === props.to)
        return { isActive, collapsed }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');
.link {
    font-family: 'Barlow Condensed', sans-serif;
    display: flex;
    align-items: center;
    user-select: none;

    cursor: pointer;
    color: white;
    text-decoration: none;

    margin: 2em 0;
    padding: 0 2em;
    height: 1.5em;

    transition: all .1s ease;
    &:hover {
        border-right: 5px solid white;
    }

    .info {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
}

.link.active {
    border-right: 5px solid white;
}

</style>