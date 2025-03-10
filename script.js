<<<<<<< HEAD
function toggleTheme() {
    // const body = document.body;

    // Toggle dark mode class
    document.body.classList.toggle("dark-mode");

    // Change the icon based on mode
    const themeToggle = document.querySelector(".theme-toggle");
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = "☀️"; // Sun icon for light mode
        localStorage.setItem("theme", "dark"); // Save preference
    } else {
        themeToggle.innerHTML = "🌙"; // Moon icon for dark mode
        localStorage.setItem("theme", "light");
    }
}

// Apply theme from localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelector(".theme-toggle").innerHTML = "☀️"; // Set correct icon
    }
});


function toggleChat() {
    document.getElementById("chatbox").style.display = 
        document.getElementById("chatbox").style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    let input = document.getElementById("chatInput");
    let message = input.value.trim();
    if (message) {
        let chatboxMessages = document.querySelector(".chatbox-messages");
        let newMessage = document.createElement("div");
        newMessage.textContent = message;
        chatboxMessages.appendChild(newMessage);
        input.value = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.querySelector(".typing-title");
    const textElement = document.querySelector(".typing-text");
    
    // Split title to apply different colors
    const titleTextBefore = "Welcome to ";
    const titleTextHighlight = "my Portfolio";
    
    const paragraphText = "This is Sainath Reddy Avula, working on my creative journey.";

    let titleIndex = 0;
    let highlightIndex = 0;
    let paragraphIndex = 0;
    
    function typeTitleBefore() {
        if (titleIndex < titleTextBefore.length) {
            titleElement.innerHTML += titleTextBefore.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeTitleBefore, 70); // Faster speed
        } else {
            titleElement.innerHTML += `<span class="highlight"></span>`; // Placeholder for colored text
            setTimeout(typeHighlight, 120); // Start typing colored part
        }
    }

    function typeHighlight() {
        const highlightElement = document.querySelector(".highlight");
        if (highlightIndex < titleTextHighlight.length) {
            highlightElement.innerHTML += titleTextHighlight.charAt(highlightIndex);
            highlightIndex++;
            setTimeout(typeHighlight, 70);
        } else {
            setTimeout(typeParagraph, 500); // Small delay before paragraph starts
        }
    }

    function typeParagraph() {
        if (paragraphIndex < paragraphText.length) {
            textElement.innerHTML += paragraphText.charAt(paragraphIndex);
            paragraphIndex++;
            setTimeout(typeParagraph, 100); // Slower typing for paragraph
        }
    }

    typeTitleBefore(); // Start typing effect
});

=======
function toggleTheme() {
    // const body = document.body;

    // Toggle dark mode class
    document.body.classList.toggle("dark-mode");

    // Change the icon based on mode
    const themeToggle = document.querySelector(".theme-toggle");
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = "☀️"; // Sun icon for light mode
        localStorage.setItem("theme", "dark"); // Save preference
    } else {
        themeToggle.innerHTML = "🌙"; // Moon icon for dark mode
        localStorage.setItem("theme", "light");
    }
}

// Apply theme from localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelector(".theme-toggle").innerHTML = "☀️"; // Set correct icon
    }
});


function toggleChat() {
    document.getElementById("chatbox").style.display = 
        document.getElementById("chatbox").style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    let input = document.getElementById("chatInput");
    let message = input.value.trim();
    if (message) {
        let chatboxMessages = document.querySelector(".chatbox-messages");
        let newMessage = document.createElement("div");
        newMessage.textContent = message;
        chatboxMessages.appendChild(newMessage);
        input.value = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.querySelector(".typing-title");
    const textElement = document.querySelector(".typing-text");
    
    // Split title to apply different colors
    const titleTextBefore = "Welcome to ";
    const titleTextHighlight = "my Portfolio";
    
    const paragraphText = "This is Sainath Reddy Avula, working on my creative journey.";

    let titleIndex = 0;
    let highlightIndex = 0;
    let paragraphIndex = 0;
    
    function typeTitleBefore() {
        if (titleIndex < titleTextBefore.length) {
            titleElement.innerHTML += titleTextBefore.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeTitleBefore, 70); // Faster speed
        } else {
            titleElement.innerHTML += `<span class="highlight"></span>`; // Placeholder for colored text
            setTimeout(typeHighlight, 120); // Start typing colored part
        }
    }

    function typeHighlight() {
        const highlightElement = document.querySelector(".highlight");
        if (highlightIndex < titleTextHighlight.length) {
            highlightElement.innerHTML += titleTextHighlight.charAt(highlightIndex);
            highlightIndex++;
            setTimeout(typeHighlight, 70);
        } else {
            setTimeout(typeParagraph, 500); // Small delay before paragraph starts
        }
    }

    function typeParagraph() {
        if (paragraphIndex < paragraphText.length) {
            textElement.innerHTML += paragraphText.charAt(paragraphIndex);
            paragraphIndex++;
            setTimeout(typeParagraph, 100); // Slower typing for paragraph
        }
    }

    typeTitleBefore(); // Start typing effect
});

>>>>>>> b4c7ac5 (Initial commit)
