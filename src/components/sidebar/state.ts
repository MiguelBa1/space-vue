import { ref, computed, Ref } from 'vue'

export const collapsed : Ref<boolean> = ref(true)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH : number = 250
export const SIDEBAR_WIDTH_COLLAPSED : number = 0
export const sidebarWidth = computed(
    () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)