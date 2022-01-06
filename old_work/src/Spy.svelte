
<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;800&family=Spectral:wght@700&display=swap" rel="stylesheet">
</svelte:head>
<style>
    h1 {
        color: white;
        font-family: 'Spectral';
        font-weight: 500;
        font-size: 5em;
        line-height: 1em;
        margin-top:0;
        margin-bottom: 0.5em;
        margin-left:0.5em;
        bottom: 0;
        position: absolute;
        left: 0;
    }

    .load {
        animation: load 0.75s;
    }
    
    .glass {
        background: linear-gradient(135deg, rgba( 255, 255, 255, 0.15), rgba( 255, 255, 255, 0.1)) ;
        backdrop-filter: blur(40px);
        box-shadow: rgb(0 0 0 / 25%) 0px 40px 80px, rgb(255 255 255 / 15%) 0px 0px 0px 0.5px inset;
        padding-right: 2em;
    }

    .header {
        width: 100%;
        height: 30vh;
        margin-left: -2em;
    }



    @keyframes load {

        from  {
            opacity: 0;
            transform: translateY(-10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>


<div class='load glass header'>
    <h1>I Spy Safari</h1>
</div>