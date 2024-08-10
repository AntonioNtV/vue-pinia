import { defineStore, acceptHMRUpdate } from "pinia";
import { groupBy, sumBy, filter } from "lodash";
import { useAuthUserStore } from "./AuthUserStore";

export const useCartStore = defineStore('CartStore', {
    historyEnabled: true,
    state: () => {
        return {
            items: []
        }
    },

    actions: {
        addItems(count, item) {            
            count = parseInt(count)
            for (let index = 0; index < count; index++) {
                this.items.push({ ...item })
            }
        },
        clearItem(name) {
            this.items = filter(this.items, (item) => item.name !== name)
        },
        setItemCount(item, count) {
            this.clearItem(item.name);
            this.addItems(count, item);
        },
        checkout() {
            const authUserStore = useAuthUserStore()

            alert(`${authUserStore.username} just bought ${this.count} items at a total of ${this.total}`)
            this.$reset()
        }

    },

    getters: {
        count: (state) => state.items.length,
        total: (state) => sumBy(state.items, item => item.price),
        isEmpty: (state) => state.count === 0,
        grouped() {
            const grouped =  groupBy(this.items, item => item.name)
            const sorted = Object.keys(grouped).sort()

            let inOrder = {}
            sorted.forEach(key => inOrder[key] = grouped[key])
            return inOrder
        },
        groupCount: (state) => (name) => state.grouped[name].length,
    }

})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}