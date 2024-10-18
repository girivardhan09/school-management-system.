function validateLogin() {
    // Get form values
    const studentId = document.getElementById('student-id');
    const studentName = document.getElementById('student-name');
    const branch = document.getElementById('branch');
    const semester = document.getElementById('semester');

    // Student ID pattern: First two digits (15-25), next two characters (09 or 1A), and last four digits
    const studentIdPattern = /^(1[5-9]|2[0-5])091A\d{4}$/;

    // Reset any previous error styles
    clearErrors([studentId, studentName, branch, semester]);

    let isValid = true;

    // Validate Student ID format
    if (!studentIdPattern.test(studentId.value)) {
        showError(studentId, "Invalid Student ID!");
        studentId.focus(); // Set focus back to the student ID input
        isValid = false;
    }

    // Validate Student Name
    if (studentName.value.trim() === "") {
        showError(studentName, "Please enter your name.");
        isValid = false;
    }

    // Validate Branch
    if (branch.value === "") {
        showError(branch, "Please select your branch.");
        isValid = false;
    }

    // Validate Semester
    if (semester.value === "") {
        showError(semester, "Please select your semester.");
        isValid = false;
    }

    if (isValid) {
        // Save the student information in localStorage
        localStorage.setItem('studentId', studentId.value);
        localStorage.setItem('studentName', studentName.value);
        localStorage.setItem('branch', branch.value);
        localStorage.setItem('semester', semester.value);

        // Redirect to index.html after successful login
        window.location.href = 'index.html';
    }

    // Prevent the form from submitting normally if there are errors
    return false;
}

// Function to show error message and highlight the invalid input
function showError(input, message) {
    input.classList.add('invalid'); // Add red border to the invalid input
    const errorElement = input.nextElementSibling; // The error message element
    errorElement.innerText = message; // Set the error message
    errorElement.style.display = 'block'; // Make the error message visible
}

// Function to clear previous errors
function clearErrors(inputs) {
    inputs.forEach(input => {
        input.classList.remove('invalid'); // Remove red border
        const errorElement = input.nextElementSibling; // The error message element
        errorElement.style.display = 'none'; // Hide the error message
        errorElement.innerText = ''; // Clear any previous error message
    });
}
