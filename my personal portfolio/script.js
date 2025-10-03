// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Download sample CV button
document.getElementById("download-sample-cv").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "assets/cv.pdf"; // make sure cv.pdf exists in assets/
    link.download = "Frank_Obeng_Abu_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Contact nav link opens email app
document.getElementById("contactLink").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "mailto:frankobeng2222@gmail.com";
});

// Clicking your name also opens email app
document.getElementById("myName").addEventListener("click", () => {
    window.location.href = "mailto:frankobeng2222@gmail.com";
});