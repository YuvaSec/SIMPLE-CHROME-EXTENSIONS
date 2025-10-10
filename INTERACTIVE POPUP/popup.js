const output = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const now = new Date().toLocaleTimeString();
    output.textContent = `Button Clicked at ${now}`;
});
