"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var jsPDF = window.jspdf.jsPDF;
// Event listener to generate a shareable link
(_a = document.getElementById('shareResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    // Prompt the user to enter their username
    var username = prompt("Enter your username:");
    if (username) {
        // Generate a unique URL for the resume
        var resumeURL = "https://yourusername.vercel.app/resume/".concat(username);
        // Display the generated URL in the input field
        var linkElement = document.getElementById('link');
        if (linkElement) {
            linkElement.value = resumeURL;
        }
        // Show the URL section
        var shareableLinkSection = document.getElementById('shareableLink');
        if (shareableLinkSection) {
            shareableLinkSection.style.display = 'block';
        }
    }
});
// Event listener to download the resume as a PDF
(_b = document.getElementById('downloadResume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    // Create a new jsPDF instance
    var doc = new jsPDF();
    // Create a string to hold the resume content
    var resumeContent = '';
    // Loop through each editable section and extract the content
    document.querySelectorAll('.section').forEach(function (element) {
        resumeContent += "".concat(element.innerText, "\n\n");
    });
    // Add the content to the PDF (start position at 10, 10)
    doc.text(resumeContent, 10, 10);
    // Save the resume as a PDF file
    doc.save('resume.pdf');
});
