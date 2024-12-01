const rocket = document.getElementById("rocket");
const launchButton = document.getElementById("launch-button");
let isLaunched = false;

launchButton.addEventListener("click", () => {
    if (!isLaunched) {
        isLaunched = true;
        launchRocket();
    }
});

function launchRocket() {
    let position = 10; // Starting position of the rocket
    const interval = setInterval(() => {
        position += 5; // Move the rocket up
        rocket.style.bottom = position + "px";

        if (position > 600) { // Stop when the rocket leaves the game area
            clearInterval(interval);
            alert("Rocket Launched!");
            resetRocket();
        }
    }, 50); // Update every 50ms
}

function resetRocket() {
    isLaunched = false;
    rocket.style.bottom = "10px"; // Reset position
}
