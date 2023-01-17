<template>
  <form>
    +      <label for="locale-select">{{ $t('language') }}: </label>
    +      <select id="locale-select" v-model="$i18n.locale">
    +        <option value="en">en</option>
    +        <option value="ru">ru</option>
    +      </select>
    +    </form>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">

</style>