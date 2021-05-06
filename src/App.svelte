<script>
	import About from './About.svelte';
	import Projects from './Projects.svelte';
</script>

<div class="cursor"></div>
<About/>
<Projects/>

<style>

    :global(body) {
        background-color: rgb(27, 28, 34);
        font-family: 'Roboto Mono';
		font-weight: normal;
		padding: 0;
		font-style: normal;
		padding-left: 1em;
	}

	.cursor {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		position: absolute;
		transform: translate3d(-50%, -50%, 0);
		top: 0;
		left: 0;
		background-color: white;
		pointer-events: none;
		z-index: 100;
		transition-duration: 50ms;
		transition-timing-function: ease-out;
		cursor: none;
	}

</style>