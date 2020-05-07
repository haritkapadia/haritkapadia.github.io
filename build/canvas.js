function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomFlake(canvas, metrics) {
    return {
        pos: {
            x: Math.floor(Math.random() * canvas.width / metrics.width) * metrics.width,
            y: -metrics.actualBoundingBoxAscent * 2
        },
        angle: Math.random() * Math.PI / 2 + Math.PI / 4,
        speed: 3 + Math.floor(Math.random() * 4)
    };
}

function advanceFlake(flake, metrics) {
    flake.pos.x += Math.floor(flake.speed * Math.cos(flake.angle)) * metrics.width;
    flake.pos.y += Math.floor(flake.speed * Math.sin(flake.angle)) * metrics.actualBoundingBoxAscent * 3;
}

function drawGrid(context, canvas, metrics) {
    for(let i = 0; i < canvas.width; i += metrics.width) {
        context.moveTo(i, 0);
        context.lineTo(i, canvas.height);
        context.stroke();
    }
}

function doCanvas() {
    let snowflakes = [];
    const canvas = document.getElementById("frontcanvas");
    let context = canvas.getContext("2d");
    const fontMetrics = context.measureText("*");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.font = "36px Inconsolata";
    context.fillStyle = "#C4B8BA";
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context = canvas.getContext("2d");
        context.font = "36px Inconsolata";
        context.fillStyle = "#C4B8BA";
    });
    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for(const s of snowflakes) {
            advanceFlake(s, fontMetrics);
        }
        snowflakes = snowflakes.filter((s) => {
            return (
                s.pos.y < canvas.height &&
                    s.pos.x > 0 &&
                    s.pos.x < canvas.width
            );
        });
        snowflakes.forEach((s) => {
            context.fillText("*", s.pos.x, s.pos.y);
        });
        if(snowflakes.length < 30)
            snowflakes.push(randomFlake(canvas, fontMetrics));
    }, 1000);
}
