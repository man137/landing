

// Get the video element
const video = document.querySelector('#video');

// Initialize the video position and velocity
let position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let velocity = { x: 0, y: 0 };

// Set the fixed offset from the left side of the cursor
const offsetLeft = 800;
const offsetTop = 500;
// Add a mousemove event listener to update the velocity of the video
document.addEventListener('mousemove', function(e) {
  const targetX = e.clientX - offsetLeft;
  const targetY = e.clientY -offsetTop;

  // Set the velocity based on the distance between the target position and the current position
  velocity.x = (targetX - position.x) * 0.1;
  velocity.y = (targetY - position.y) * 0.1;
});

// Define the animation loop
function animate() {
  // Move the video position based on its current position and velocity
  position.x += velocity.x;
  position.y += velocity.y;

  // Limit the maximum velocity to avoid excessive movement
  velocity.x *= 0.9;
  velocity.y *= 0.9;

  // Apply the updated position to the video element
  video.style.transform = `translate(${position.x}px, ${position.y}px)`;

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();

const element = document.querySelector('#play');
element.style.cursor = 'pointer';

const playIcon = document.querySelector('#play');
const vid = document.querySelector('#vid');

playIcon.addEventListener('click', () => {
  if (vid.requestFullscreen) {
    vid.requestFullscreen();
  } else if (vid.webkitRequestFullscreen) { /* Safari */
    vid.webkitRequestFullscreen();
  } else if (vid.msRequestFullscreen) { /* IE11 */
    vid.msRequestFullscreen();
  }
});





document.querySelectorAll("#state p").forEach(function(data){
  clutter="";
  data.textContent.split("").forEach(function(data){
      clutter+=`<span>${data}</span>`
  })
  data.innerHTML=clutter;
  
  

 
})

gsap.to("span",{
  y:10,
  ease: "expo.out",
  stagger:0.1
})

gsap.from("#vid",{
  y:100,
  duration: 5,
  ease: "expo.out",
  stagger: 0.1
})
const mine = document.querySelector('#state');
const bine = mine.querySelector('#state video');
let scaleFactor = 1;

mine.addEventListener('scroll', () => {
  const scrollY = mine.scrollTop;
  const maxScrollY = mine.scrollHeight - mine.clientHeight;
  scaleFactor = 1 + (scrollY / maxScrollY) * 0.5; // adjust the scaling factor as needed
  bine.style.width = `${scaleFactor * 500}px`; // adjust the initial width of the video as needed
  bine.style.height = `${scaleFactor * 300}px`; // adjust the initial height of the video as needed
});
