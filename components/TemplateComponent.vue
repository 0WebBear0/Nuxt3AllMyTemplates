<template>
<div class="test">
<!--
  <div
      :is
      v-for=""
      v-if="" v-else-if="" v-else
      v-show=""
      id="" ref="" key=""
      v-model
      :style="" class="" ...
      v-on @
      v-html=""
      v-text=""
  >
  </div>
  -->
</div>
</template>

<script setup lang="ts">

interface Test {
  foo: string,
  bar: number,
  fontSize: boolean | number,
}

const props = withDefaults(defineProps<Test>(),{
  foo: '',
  bar: 0,
  fontSize: 0,
})

const emmit = defineEmits<{
  (e: 'delete', id: number): void
  (e: 'update', value: string): void
}>()
</script>

<style scoped lang="scss">

</style>