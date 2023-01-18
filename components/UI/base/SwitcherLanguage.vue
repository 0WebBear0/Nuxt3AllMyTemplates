<template>
    <v-select
      :label="$t('language')"
      :items="['ru', 'en']"
      id="locale-select"
      class="switcher-language"
      v-model="$i18n.locale"
    >
    </v-select>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
</style>