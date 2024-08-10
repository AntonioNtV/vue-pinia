<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from '@/stores/ProductStore';
import { useCartStore } from '@/stores/CartStore';
const productStore = useProductStore()
const cartStore = useCartStore()

cartStore.$onAction(({ name, args, after, onError }) => {
  if (name === 'addItems') {
    after((result) => {
      console.log(result, args[0]); //undefined
    })
    
    onError(() => {
      console.log(args[0]);
    })
  }
})


productStore.fill()

</script>

<template>
  <div class="container">
    <TheHeader />
    <div class="mb-5 flex justify-end">
      <AppButton @click="cartStore.undo">Undo</AppButton>
    </div>
    <div class="mb-5 flex justify-end">
      <AppButton @click="cartStore.redo">Redo</AppButton>
    </div>
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
