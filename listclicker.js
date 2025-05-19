const { ipcRenderer } = require('electron');
document.getElementById('tools').addEventListener('click', function(event) {
    // Check if the clicked element is a list item
    if (event.target.tagName === 'LI') {
        // Retrieve information about the list item
        const itemText = event.target.textContent;
        console.log('List item clicked:', itemText);

        // Send information to the main process if needed
        ipcRenderer.send('list-item-click', { text: itemText });
    }
});

document.getElementById('myButton').addEventListener('click', function() {
    // Retrieve information about the button
    const buttonText = this.textContent;
    console.log('Button clicked:', buttonText);

    // Send information to the main process if needed
    ipcRenderer.send('button-click', { text: buttonText });
});