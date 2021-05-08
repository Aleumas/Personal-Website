<script>
	import Router from 'page';
	import Home from './Home.svelte'
	import Spy from './Spy.svelte';

	let page;
	let params;

	Router('/', () => page = Home);
	Router('/Spy', (ctx, next) => {
		params = ctx.params;
		next();
	}, () => page = Spy);

	Router.start();

</script>


<svelte:component this={page} {params}/>
