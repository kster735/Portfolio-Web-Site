// Draw a Line
function wave(A, f, l, x, t){
    return y =  A * Math.sin( 2 * Math.PI * ( x / l - f * t ) );
}


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;


console.log(width + " " + height);

const gradient = ctx.createLinearGradient(0, 0, width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.25", "blue");
gradient.addColorStop("0.5","yellow")
gradient.addColorStop("0.75", "green");
gradient.addColorStop("1.0", "red");
ctx.strokeStyle = gradient;


let time = 0;
let A = 80;
const c = 2;
const l = 0.1 * width;
const f = c/l;

function animate(){
    ctx.fillStyle = "#22336640";
    ctx.fillRect(0, 0, 800, 600);

    for ( let x = 0; x <= width; x+=1){
        A = 200 * Math.exp(- ((x-400) * (x-400) ) / 2/100/100);
        let y = height / 2 - wave(A, f, l, x, time) ;
    // + wave(A/2, 3*f, l/3, x, time) -
    //  wave(A/6, 5*f, l/5, x, time) + wave(A/7, 7*f, l/7, x, time) ;

        ctx.beginPath();


        ctx.lineWidth = 2;
        ctx.moveTo(x,y);

        A = 200 * Math.exp(- ((x + 1-400) * (x + 1 -400) ) /2/100/100);
        y = height / 2 - wave(A, f, l, x + 1 , time) ;

        ctx.lineTo(x + 1, y);
        ctx.stroke();
    }


    time += 1;
    if (time > 10000) time = 1;
    requestAnimationFrame(animate);
}

animate();