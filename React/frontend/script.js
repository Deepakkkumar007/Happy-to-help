// Check if both title and description are provided
if (issueTitle.trim() === '' || issueDescription.trim() === '') {
    document.getElementById('feedback').innerText = 'Please provide both issue title and description.';
    return;
}

// Reset feedback message
document.getElementById('feedback').innerText = '';

// You can replace this part with actual logic to submit the issue to your server
console.log('Issue Title:', issueTitle);
console.log('Issue Description:', issueDescription);

// Provide feedback to the user
document.getElementById('feedback').innerText = 'Issue submitted successfully!';