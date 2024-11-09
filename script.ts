// Check if jsPDF is available on the window object
declare global {
    interface Window {
        jspdf: any;
    }
}

export {}; // This line ensures that the file is treated as a module.

const { jsPDF } = (window as any).jspdf;

// Event listener to generate a shareable link
document.getElementById('shareResume')?.addEventListener('click', function() {
    // Prompt the user to enter their username
    const username = prompt("Enter your username:");

    if (username) {
        // Generate a unique URL for the resume
        const resumeURL = `https://yourusername.vercel.app/resume/${username}`;

        // Display the generated URL in the input field
        const linkElement = document.getElementById('link') as HTMLInputElement;
        if (linkElement) {
            linkElement.value = resumeURL;
        }

        // Show the URL section
        const shareableLinkSection = document.getElementById('shareableLink');
        if (shareableLinkSection) {
            shareableLinkSection.style.display = 'block';
        }
    }
});

// Event listener to download the resume as a PDF
document.getElementById('downloadResume')?.addEventListener('click', function() {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Create a string to hold the resume content
    let resumeContent = '';

    // Loop through each editable section and extract the content
    document.querySelectorAll('.section').forEach(function(element) {
        resumeContent += `${(element as HTMLElement).innerText}\n\n`;
    });

    // Add the content to the PDF (start position at 10, 10)
    doc.text(resumeContent, 10, 10);

    // Save the resume as a PDF file
    doc.save('resume.pdf');
});