
document.addEventListener('DOMContentLoaded', () => {
    // Creating variables for the share button and the share dialog to toggle the
    // dialog when the button is clicked.
    const shareButton = document.getElementById('shareButton');
    const shareDialog = document.getElementById('shareDialog');

     // If you click the button and its openned, close it. And then vice versa.
    shareButton.addEventListener('click', () => {
        if (shareDialog.open) {
            shareDialog.close();
        } else {
            shareDialog.show();
        }
    });
});