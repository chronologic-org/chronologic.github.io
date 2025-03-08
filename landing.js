const textOptions = [
    "write a summary report on my emails and my calendar everyday",
    "put all meeting info from my email to my calendar",
    "Send the whole team a email with the agenda",
    "get me ready for my next meeting ASAP",
    "put all the scheduling info from jenny's emails into my calendar",
    "make sure the meeting agenda is my in calendar description"
];

let currentIndex = 0;
const cyclingTextElement = document.querySelector('.cycling-text');

function cycleText() {
    // First, complete the typing animation
    cyclingTextElement.classList.add('typing-animation');
    
    // Wait for typing animation to complete
    setTimeout(() => {
        // Add fade-out after typing is complete
        cyclingTextElement.classList.add('fade-out');
        
        // Move to next text after fade-out and short pause
        setTimeout(() => {
            // Move to next text option
            currentIndex = (currentIndex + 1) % textOptions.length;
            
            // Reset classes
            cyclingTextElement.classList.remove('fade-out', 'typing-animation');
            
            // Clear the text content
            cyclingTextElement.textContent = '';
            
            // Set new text
            cyclingTextElement.textContent = textOptions[currentIndex];
            
            // Add typing animation for new text
            cyclingTextElement.classList.add('typing-animation');
        }, 1000); // Delay to allow fade-out to complete
    }, 4000); // Matches the full typing animation duration
}

// Initial setup to start cycling quickly
requestAnimationFrame(() => {
    // Start first cycle quickly
    setTimeout(cycleText, 1000);
    
    // Set up interval for subsequent cycles
    setInterval(cycleText, 6000); // Increased from 5000 to 6000 to add 1 more second pause
});

// Add click functionality to the arrow button
const arrowButton = document.querySelector('.text-box-arrow');
arrowButton.addEventListener('click', () => {
    // Clear any running intervals
    const intervals = window.setInterval(function(){}, 9999);
    for (let i = 1; i <= intervals; i++) {
        clearInterval(i);
    }
    
    // Manually trigger the text cycle
    cycleText();
    
    // Restart the interval
    setTimeout(() => {
        setInterval(cycleText, 6000);
    }, 6000);
});