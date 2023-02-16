const app = document.getElementById('typewriter');

const typewriter=new typewriter(app, {
    loop: true,
    delay:75
});

typewriter
.typewriter('Los esperamos')
.pausefor(200)
.star();