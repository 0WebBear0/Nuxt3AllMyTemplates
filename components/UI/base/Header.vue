<template>
		<header class="header">
				<NuxtLink :to="('/')" class="header__logo">WebBear</NuxtLink>
				<NuxtLink :to="('svg-test')" class="header__link">{{$t('svgTest')}}</NuxtLink>
				<NuxtLink :to="('filters')" class="header__link">{{$t('filters')}}</NuxtLink>
				<NuxtLink :to="('blueprint')" class="header__link">{{$t('blueprint')}}</NuxtLink>
				<NuxtLink :to="('animation')" class="header__link">{{$t('animation')}}</NuxtLink>
				<NuxtLink :to="('statistics')" class="header__user-img"><IconAvatar/></NuxtLink>
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