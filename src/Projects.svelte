<h1>Projects</h1>
<div class="project-container">
    <div class="project-item glass">
        <h2>I Spy Safari</h2>
        <p class="project-information">
            A child 
        </p>
    </div>
</div>


<style>
    h1 {
        color: white;
        font-family: 'montserrat', bold;
        font-size: 3em;
    }

    h2 {
        color: rgba( 255, 255, 255, 0.5);
        font-family: 'montserrat', bold;
        font-size: 2em;
        padding-left: 5%;
    }  

    .project-information {
        color: rgba( 255, 255, 255, 0.5);
        font-family: 'montserrat';
        font-weight: 300;
        font-size: 1em;
        padding-left: 5%;
        padding-right: 5%;
    }
    
    .project-container {
        padding-bottom: 10%;
    }

    .project-item {
        width: 33%;
        position: relative;
    }

    .project-item:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    .glass {
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgb(27, 28, 34);
        backdrop-filter: blur( 11.5px );
        -webkit-backdrop-filter: blur( 11.5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        backdrop-filter: blur(5px);
    }

</style>