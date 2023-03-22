// let name = u.parentNode.id; /* Gsap */
// name = '#' + name;
// gsap.to([name], {y: -200})

let titre = document.getElementById('move');
gsap.to([titre], {x: 200, duration: 2, repeat: 1, yoyo: true});
