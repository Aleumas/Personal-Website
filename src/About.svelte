
<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;800&family=Spectral:wght@700&display=swap" rel="stylesheet">
    <script>

        // Smooth Scrolling 
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }); 


        // Cursor
         "use strict";
		(function(){
			var cursor = document.querySelector('.cursor');
			var links = document.querySelectorAll('a');
			var editCursor = function editCursor(event) {
				cursor.style.top = event.pageY - 15 + 'px';
				cursor.style.left = event.pageX + 'px';
			}
			window.addEventListener('mousemove', editCursor);
		})();

    </script>


</svelte:head>

<script>
</script>

<div class="hero-section load">
    <div class="center">
    <h1>Samuel <br> Asamoah</h1>
        <p>Self-taught graphic designer and programmer who has recently graduated high-school.
        Committed to learning, creating, and utilizing my skills in the service of others in need.
        Experienced at developing innovative ideas through design and materializing these ideas
        through code.</p>
    </div>

</div>
<div class="scroll-position">
    <img src="scroll.svg" alt="Scroll to see more" class="scroll">
    <img src="down.svg" alt="Scroll to see more" class="down">
</div>

<style>
    .load {
        animation: load 1.5s;
    }
    .scroll {
        display:block;
        position: relative;
        width: 20vh;
        height: 20vh;
        margin-left: auto;
        margin-right: auto;
        transition: ease-in-out 0.4s;
        animation: rotation 10s infinite linear;
    }

    .scroll-position {
        margin-left: auto;
        margin-right: auto;
        margin-top: -20vh;
    }
    
    .scroll:hover ~ .down{
        opacity: 1;
    }

    @keyframes load {

        from  {
            opacity: 0;
            transform: translateY(-30px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .down {
        display:block;
        position: relative;
        width: 4vh;
        height: 4vh;
        margin-left: auto;
        margin-right: auto;
        margin-top: -12vh;
        opacity: 0;
        z-index: -10;
        transition: ease-out 0.4s;
    }

    .hero-section {
        height: 100vh;
        width: 100%;
        display: table;
    }

    .center {
        display: table-cell;
        vertical-align: middle;
    }

    h1 {
        color: white;
        font-family: 'Spectral';
        font-weight: 700;
        font-size: 5em;
        line-height: 1em;
        margin-top: 0;
        margin-bottom: 0.3em;
    }

    p {
        color: white;
        font-weight: 300;
        width: 50%;
        font-size: 1em;
        margin-top: 0;
        margin-bottom: 5%;
        line-height: 2em;
    }

    button {
        color: white;
        font-weight: 500;
        font-size: 0.8em;
        padding: 1em;
        padding-left: 1em;
        padding-right: 1em;
        margin-right: 3%;
        margin-bottom: 5%;
        border-radius: 15px;
        border-width: 0px;
        background-color: rgba(0, 0, 0, 0);
        -webkit-transition: ease-out 0.4s;
        -moz-transition: ease-out 0.4s;
        transition: ease-out 0.4s;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }

</style>