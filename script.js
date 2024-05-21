document.getElementById('no').addEventListener('mouseover', function() {
    this.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
});

document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('message').textContent = 'Nice choice!';
});
