var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });
  
anime.timeline({loop: true})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 2000,
      delay: 3000,
  easing: "linear",
  loop: true
});

const ID = "bongo-catn";
const s = selector => `#${ID} ${selector}`;
const notes = document.querySelectorAll(".note");

for (let note of notes) {
  note.parentElement.appendChild(note.cloneNode(true));
  note.parentElement.appendChild(note.cloneNode(true));
}

const music = { note: s(".music .note") };
const terminal = { frame: s(".terminal-frame"), code: s(".terminal-code line") };
const cat = {
  pawRight: {
    up: s(".paw-right .up"),
    down: s(".paw-right .down") },

  pawLeft: {
    up: s(".paw-left .up"),
    down: s(".paw-left .down") } };



const style = getComputedStyle(document.documentElement);

const green = style.getPropertyValue("--green");
const pink = style.getPropertyValue("--pink");
const blue = style.getPropertyValue("--blue");
const orange = style.getPropertyValue("--orange");
const cyan = style.getPropertyValue("--cyan");

gsap.set(music.note, { scale: 0, autoAlpha: 1 });

const animatePawState = (selector) =>
gsap.fromTo(
selector,
{ autoAlpha: 0 },
{
  autoAlpha: 1,
  duration: 0.01,
  repeatDelay: 0.19,
  yoyo: true,
  repeat: -1 });



const tl = gsap.timeline();

tl.
add(animatePawState(cat.pawLeft.up), "start").
add(animatePawState(cat.pawRight.down), "start").
add(animatePawState(cat.pawLeft.down), "start+=0.19").
add(animatePawState(cat.pawRight.up), "start+=0.19").
timeScale(1.6);

gsap.from(".terminal-code line", {
  drawSVG: "0%",
  duration: 0.1,
  stagger: 0.1,
  ease: 'none',
  repeat: -1 });


const noteEls = gsap.utils.pipe(
gsap.utils.toArray,
gsap.utils.shuffle)(
music.note);

const numNotes = noteEls.length / 3;
const notesG1 = noteEls.splice(0, numNotes);
const notesG2 = noteEls.splice(0, numNotes);
const notesG3 = noteEls;

const colorizer = gsap.utils.random([green, pink, blue, orange, cyan, "#a3a4ec", "#67b5c0", "#fd7c6e"], true);
const rotator = gsap.utils.random(-50, 50, 1, true);
const dir = amt => `${gsap.utils.random(["-", "+"])}=${amt}`;

const animateNotes = els => {
  els.forEach(el => {
    gsap.set(el, {
      stroke: colorizer(),
      rotation: rotator(),
      x: gsap.utils.random(-25, 25, 1) });

  });

  return gsap.fromTo(els, {
    autoAlpha: 1,
    y: 0,
    scale: 0 },
  {
    duration: 2,
    autoAlpha: 0,
    scale: 1,
    ease: "none",
    stagger: {
      from: "random",
      each: 0.5 },

    rotation: dir(gsap.utils.random(20, 30, 1)),
    x: dir(gsap.utils.random(40, 60, 1)),
    y: gsap.utils.random(-200, -220, 1),
    onComplete: () => animateNotes(els) });

};


    const blink1 = $('.blink-1');
    const blink2 = $('.blink-2');
    const blink3 = $('.blink-3');

    const tlBlink1 = new TimelineMax({
      repeat: -1,
      yoyo: true
    });

    tlBlink1
    .to(blink1, 1, {opacity: 0}, 1)
    .to('#cloud-1', 2, {ease: Power4.easeInOut, x:30}, 1)
    .to('#cloud-1', 2, {opacity: 0}, 1)
    .to('#cloud-4', 2, {ease: Power4.easeInOut, x:-20}, 1)
    .to('#cloud-4', 2, {opacity: 0}, 1)
    .to('#cloud', 2, {ease: Power4.easeInOut, x:-50}, 1)
    .to('#cloud', 2, {opacity: 0}, 1)
    .play();

    const tlBlink2 = new TimelineMax({
      repeat: -1,
      yoyo: true
    });

    tlBlink2
    .to(blink2, 1, {opacity: 0}, 2)
    .to('#cloud-2', 2, {ease: Power4.easeInOut, x:-20}, 2)
    .to('#cloud-2', 2, {opacity: 0}, 2)
    .to('#cloud-6', 2, {ease: Power4.easeInOut, x:30}, 2)
    .to('#cloud-6', 2, {opacity: 0}, 2)
    .play();

    const tlBlink3 = new TimelineMax({
      repeat: -1,
      yoyo: true
    });

    tlBlink3
    .to(blink3, 1, {opacity: 0}, 3)
    .to('#cloud-3', 2, {ease: Power4.easeInOut, x:-30}, 3)
    .to('#cloud-3', 2, {opacity: 0}, 3)
    .to('#cloud-5', 2, {ease: Power4.easeInOut, x:30}, 3)
    .to('#cloud-5', 2, {opacity: 0}, 3)
    .play();
	
tl.
add(animateNotes(notesG1)).
add(animateNotes(notesG2), ">0.05").
add(animateNotes(notesG3), ">0.25");

