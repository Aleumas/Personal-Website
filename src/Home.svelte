<script>
	import About from './About.svelte';
	import Projects from './Projects.svelte';
</script>

<ul>
	<li><a>Resume</a></li>
	<li><a>Skills</a></li>
	<li><a href="#projects">Projects</a></li>
</ul>
<About/>
<Projects/>

<style>

    :global(body) {
        background-color: rgb(27, 28, 34);
        font-family: 'Roboto Mono';
		font-weight: normal;
		padding: 0;
		font-style: normal;
		padding-left: 2em;
	}

	h3 {
		font-weight: 700;
		font-size: 1.5em;	
	}

	.s {
		color:rgb(27, 28, 34);
	}

	.s:hover {
		color: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		animation:gradient 15s ease infinite;
	}

	ul {
		list-style-type: none;
		padding-right: 2em;
		padding-top: 1em;
	}

	ul li {
		float: right;
	}

	.glass {
        width:100%;
        height: 100%;
        background: linear-gradient(135deg, rgba( 255, 255, 255, 0.15), rgba( 255, 255, 255, 0.1)) ;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        backdrop-filter: blur(40px);
        box-shadow: rgb(0 0 0 / 25%) 0px 40px 80px, rgb(255 255 255 / 15%) 0px 0px 0px 0.5px inset;
    }

	ul li a {
		display: inline-block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		
	}

	ul li a:hover:not(.active) {
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-thickness: 1.5px;
	}

	.blob {
		content: '';
		display: inline-block;
		align-self: center;
  		background-color: var(--blob);  
		box-shadow: var(--shades);
		background-size: 1600% 1600%;
		transform-origin: 50% 50%;
		transform-style: preserve-3d;
		perspective: 1000px;
		animation: 
			transform 50s ease-in-out infinite both alternate,
			movement 40s ease-in-out infinite both;
		width:40px;
		height:40px;
		margin-left: -30px;
		overflow: hidden;
		margin-bottom: -20px;
	}

	.center {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	@keyframes transform {
			0%,
		100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
		14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
		28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
		42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
		56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
		70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
		84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; } 
	}	

	@keyframes movement {
			0%,
		100% { transform: none; }
		50% { transform: translateY(20%) rotateY(10deg); }
	}

	@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
	}

</style>