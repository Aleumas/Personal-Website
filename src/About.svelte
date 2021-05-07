
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

    </script>


</svelte:head>

<script>

    let src = "down.svg"
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
<img src="scroll.svg" alt="Scroll to see more" class="scroll">

<style>
    .scroll {
        display:block;
        position: relative;
        width: 20vh;
        height: 20vh;
        margin-left: auto;
        margin-right: auto;
        margin-top: -20vh;
        animation: rotation 10s infinite linear;
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
        margin-bottom: 10px;
        cursor: url("down.png"), auto, zoom-in;
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

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
</style>