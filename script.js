document.getElementById('taskForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const projectID = document.getElementById('projectID').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('dueDate').value;
    const comments = document.getElementById('comments').value;

    const response = await fetch(`/projects/${projectID}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ taskDescription, dueDate, comments })
    });

    const data = await response.json();
    console.log(data); // Do something with the response
});
