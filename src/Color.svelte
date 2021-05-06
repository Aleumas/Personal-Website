

<div class="animatedwrapper">
    
    <div class="dot dot--one"></div>
    <div class="dot dot--two"></div>
    <div class="dot dot--three"></div>
</div>

<style>

    .animatedwrapper {
        overflow: hidden;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: -100;
        width: 100%;
        height: 2000px;
        isolation: isolate;
        background: linear-gradient(135deg, rgba( 255, 255, 255, 0.15), rgba( 255, 255, 255, 0.1)) ;
        transition-timing-function: ease-out; 
    }
    .dot {
        --size: 700px;
        display: none;
        position: absolute;
        left: calc(var(--size) / 3 * -1);
        top: calc(var(--size) / 3 * -1);
        width: var(--size);
        height: var(--size);
        mix-blend-mode: soft-light;
        filter: blur(calc(var(--size) / 6));
        border-radius: var(--size);
        animation: dot-animation ease-in-out 10s infinite;
        will-change: transform; 
    }

    @supports (mix-blend-mode: soft-light) and (filter: blur(1px)) {
    .animatedwrapper {
        background: none;
    }
    
        .dot {  
        display: block;
    }
    }

    .dot--one {
        background: #5f0068;
    }
    
    .dot--two {
        background: #ff4d00;
        animation-delay: -7s;
    }
    
    .dot--three {
        background: #ffea00;
        animation-delay: -14s;
    }

    @keyframes dot-animation {
  0% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(calc(var(--size) / 1.5), 0);
  }
  66% {
    transform: translate(0, calc(var(--size) / 1.5));
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>