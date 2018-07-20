<template>
	<div id="modalhelp">
		<div class="help-dropdown border text-left">
			<label class="help-dropdown-title">How can we help?</label>
			<div class="help-dropdown-filter d-flex align-items-center">
				<input class="help-dropdown-input" placeholder="Search..." />
				<i class="material-icons help-dropdown-icons">search</i>
			</div>
			<label class="help-dropdown-list">Suggested Answers</label>
			<ul>
				<li>Suspendisse quis nisi vel elit imperdiet.</li>
				<li>Aenean posuere, libero id varius ultricies amet elit tellus.</li>
				<li>Vestibulum lorem tortor, venenatis ornare odio id, ultricies volutpat libero.</li>
			</ul>
		</div>
		<div class="blur-layer" @click="close" />
	</div>
</template>

<script>
	export default {
		props: {
			close: {
				type: Function,
				default: () => {}
			}
		}
	};
</script>

<style lang="sass">
@import '~$styles/variables';
#modalhelp {
	.blur-layer {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		opacity: 0.5;
		background: $black;
	}
	.help-dropdown {
		position: absolute;
		top: 72px;
		right: 9rem;
		width: 540px;
		background: $white;
		z-index: 100;
		padding: 2rem 45px;
		font-family: arial;
		li {
			font-size: 12px;
			color: $blue;
		}
		.help-dropdown-title {
			font-family: cabin;
			font-size: 14px;
			margin-bottom: 28px;
		}
		.help-dropdown-filter {
			width: 100%;
			margin-bottom: 28px;
			.help-dropdown-input {
				width: 100%;
				height: 33px;
				font-family: arial;
				font-size: 12px;
				padding-left: 10px;
				background: $gray-200;
				color: $gray-400;
				border: 0;
			}
			.help-dropdown-icons {
				width: 33px;
				padding: 5px;
				height: 33px;
				background: $blue;
				color: $white;
			}
		}
		.help-dropdown-option {
			font-size: 12px;
			font-family: arial;
			width: 30%;
			margin-bottom: 30px;
			>div {
				color: $color-blue;
				text-decoration: underline;
			}
		}
		.help-dropdown-list {
			font-size: 14px;
			font-family: arial;
		}
	}
}
</style>
