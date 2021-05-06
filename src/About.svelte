
<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;800&family=Spectral:wght@700&display=swap" rel="stylesheet">
    <script>
        
        // Cursor connection
        "use strict";
		(function(){
			var cursor = document.querySelector('.cursor');
			var links = document.querySelectorAll('a');

			var editCursor = function editCursor(event) {
				cursor.style.top = event.pageY + 'px';
				cursor.style.left = event.pageX + 'px';
			}

			window.addEventListener('mousemove', editCursor);
		})();

        // Smooth Scrolling 
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }); 
    </script>


</svelte:head>

<script>


</script>

<div class="hero-section">
    <div class="center">
<h1>Samuel <br> Asamoah</h1>
    <p>Self-taught graphic designer and programmer who has recently graduated high-school.
    Committed to learning, creating, and utilizing my skills in the service of others in need.
    Experienced at developing innovative ideas through design and materializing these ideas
    through code.</p>
</div>
</div>

<style>
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
        margin-bottom: 10px;
    }

    p {
        color: white;
        font-weight: 300;
        width: 50%;
        font-size: 1em;
        margin-top: 0;
        margin-bottom: 5%;
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

    button:hover {
        color: white;
    }

    .skills:hover {
        box-shadow: inset 0 0 0 50px #377dff;
    }
    .projects:hover {
        box-shadow: inset 0 0 0 50px #ff7337;
    }
    .touch:hover {
        box-shadow: inset 0 0 0 50px #782381;
    }
    .resume:hover {
        box-shadow: inset 0 0 0 50px #16a711;
    }    
</style>