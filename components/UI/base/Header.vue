<template>
		<header class="header">
				<NuxtLink :to="localePath('/')" class="header__logo">WebChtivo</NuxtLink>
				<NuxtLink :to="localePath('title')" class="header__link">{{$t('titles')}}</NuxtLink>
				<NuxtLink :to="localePath('hero')" class="header__link">{{$t('heroes')}}</NuxtLink>
				<NuxtLink :to="localePath('playlist')" class="header__link">{{$t('playlist')}}</NuxtLink>
				<NuxtLink :to="localePath('profile')" class="header__user-img"><IconAvatar/></NuxtLink>
		</header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.header {
		padding-right: 15%;
		padding-left: 15%;
		height: 80px;
		background-color: $color1;

		@include allCentred("row");
		justify-content: space-between;

		&__logo {
				padding: 20px;

				font-style: normal;
				font-weight: 600;
				font-size: 28px;
				line-height: 38px;
		}

		&__link {
				padding: 20px;

				font-style: normal;
				font-weight: 400;
				font-size: 20px;
				line-height: 24px;
		}
}
</style>