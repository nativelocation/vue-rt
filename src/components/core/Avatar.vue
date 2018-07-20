<template>
<div id="avatar">
	<div class="d-flex">
		<div v-if="avatarLink==='undefined'">
			<img class="person-icon-container" :src="avatarLink"/>
		</div>
		<div else class="person-icon-container d-flex align-items-center justify-content-center p-0 m-0">
			<i class="material-icons person-icon">person</i>
		</div>
		<label class="pl-3 m-0 profile-name">{{username}}</label>
	</div>
</div>
</template>

<script>
export default {
	name: 'RTVCoreAvatar',
	props: {
		username: {
			type: String
		},
		avatarLink: {
			type: String
		}
	}
};
</script>

<style lang="sass">
@import '~$styles/variables';
#avatar {
	.person-icon-container {
		height: 52px;
		width: 52px;
		border-radius: 26px;
		background: $blue;
		.person-icon {
			font-size: 35px;
			color: $white;
		}
	}
	.profile-name {
		font-size: 31px;
		font-family: cabin;
		font-weight: 100;
	}
}
</style>
