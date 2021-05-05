<script>
setInterval(function(){ 
    create();    
}, 1000);
// creating the shape
function create(){
	// making it morphing
	var b = document.querySelector('#blob');
	var btn = document.querySelector('button');
  // 25-75 is a sweet spot! :D
	var r1 = random(25, 100);
	var r2 = random(25, 75);
	var r3 = random(25, 75);
	var r4 = random(25, 75);
	
  // calculate coordinates against the four sides
	var r11 = remain(r1);
	var r22 = remain(r2);
	var r33 = remain(r3);
	var r44 = remain(r4);
	
	// these coordinates has an awesome harmony. <3
	var coordinates = `${r1}% ${r11}% ${r22}% ${r2}% / ${r3}% ${r4}% ${r44}% ${r33}%`;
	b.style['border-radius'] = coordinates;
  
};

// common functions
function random(min, max){
	return Math.floor(min + Math.random() * (max - min)); // Math.round?
}

function remain(n){
	return 100 - n;
}

</script>


<div id="blob">
</div>
	

<style>


#blob {
	margin:auto;
	display:block;
}

#blob{
	position:relative;
	width:300px;
	height:300px;
    background-color: red;
	border-radius:50%;
	overflow:hidden;
}

</style>