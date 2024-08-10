import { defineStore, acceptHMRUpdate } from "pinia";

export const useAuthUserStore = defineStore('AuthUserStore', {
    state: () => {
        return {
            username: 'antoniontv2'
        }
    },
    actions: {
        visitXProfile() {
            window.open(`https://x.com/${this.username}`, '_blank')
        }
    }
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthUserStore, import.meta.hot))
}