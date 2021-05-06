
<script>
    import Color from './Color.svelte';
</script>

<h1><a id="projects">Projects</a></h1>
<div class="project-container">
    <div class="project-item">
        <div class="color"><Color/></div>
        <div class="glass">
            <h2>I Spy Safari</h2>
            <p class="project-information">
                An animal spotting app for kids to make family safari trips fun.
            </p>
        
       <p class="project-technology">
            Swift
        </p>
        <button class="learn-more">Learn more</button>
        </div>
    </div>

    <div class="project-item">
        <div class="color"><Color/></div>
        <div class="glass">
            <h2>Community <br> Cooker Website</h2>
            <p class="project-information">
                The Community Cooker Foundation is a Kenyan based charity that promotes sustainable waste management.
            </p>
        </div>

        <p class="project-technology">
            WordPress
        </p>
        <button class="learn-more">Learn more</button>
    </div>

    <div class="project-item hidden">
        <h2>Community Cooker Website</h2>
        <p class="project-information">
            The Community Cooker Foundation is a Kenyan based charity that promotes sustainable waste management.
        </p>
        <p class="project-technology">
            WordPress
        </p>
    </div>

</div>


<style>
    a {
        color:white;
        text-decoration: none;
    }


    h1 {
        color: white;
        font-family: 'Spectral';
        font-weight: 700;
        font-size: 3em;
    }

    h2 {
        color: white;
        font-family: 'Spectral';
        font-weight: 500;
        font-size: 1.9em;
        padding-left: 8%;
        
    }  

    .project-information {
        color: white; 
        font-weight: 400;
        font-size: 0.9em;
        padding-left: 8%;
        padding-right: 5%;
    }
    
    .project-container {
        grid-template-columns: auto auto auto;
        display: grid;
    }

    .project-item {
        position: relative;
        border-radius: 10px;
        width: 300px;
        height: 300px;
        /*transition: transform .5s ease;*/
        margin-bottom: 2em; 
        overflow: hidden;
        display: initial;
    }

    .hidden {
        visibility: hidden;
    }

    .color {
        opacity: 0;
        transition: 0.4s;
    }

    .project-item:hover .color {
        opacity: 1;
        display: block;
    }

    .project-item:not(.color):hover {
        transform: translateY(-10px) scale(1.1) ;
    }

    .project-technology {
        color: white;
        font-weight: 400;
        font-size: 0.9em;
        padding-right: 5%;
        position: absolute;
        margin-bottom: 8%;
        padding-left: 8%;
        bottom: 0;
        left: 0;
    }

    .glass {
        width:100%;
        height: 100%;
        background: linear-gradient(135deg, rgba( 255, 255, 255, 0.15), rgba( 255, 255, 255, 0.1)) ;
        box-shadow: 0 8px 32px 0 rgb(27, 28, 34);
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        backdrop-filter: blur(5px);
    }

    .learn-more {
        color: rgb(27, 28, 34);
        font-weight: 500;
        font-size: 0.8em;
        padding: 3%;
        padding-left: 5%;
        padding-right: 5%;
        margin-right: 7%;
        margin-bottom: 5%;
        border-radius: 15px;
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>