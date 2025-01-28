function animateNumber(elementId, startValue, endValue, duration, prefix = "", suffix = "") {
    const element = document.getElementById(elementId);
    let current = startValue;
    const increment = Math.ceil((endValue - startValue) / (duration / 16));
    const timer = setInterval(() => {
        current += increment;
        if (current >= endValue) {
            current = endValue;
            clearInterval(timer);
        }
        element.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
    }, 16);
}

// Apply animations
animateNumber("income", 0, 120, 3000, "$", "k"); // Income animation
animateNumber("days", 0, 120, 3000, "", " Days"); // Days animation