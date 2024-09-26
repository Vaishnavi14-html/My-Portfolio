function showMore(projectId) {
    const moreInfo = document.getElementById(projectId);
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
    } else {
        moreInfo.style.display = "none";
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate sending the message (in reality, you would send it to a server)
    document.getElementById('form-response').innerText = `Thank you, ${name}! Your message has been sent.`;
    document.getElementById('form-response').style.display = 'block';
    document.getElementById('contact-form').reset();
}
