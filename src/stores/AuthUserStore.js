import { defineStore } from "pinia";
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