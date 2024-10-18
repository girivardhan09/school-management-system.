document.addEventListener('DOMContentLoaded', () => {
    // Sample data for courses and teachers
    const courses = {
        'Math': ['Prof. John Doe', 'Prof. Jane Smith'],
        'Physics': ['Prof. Emily Green', 'Prof. Michael Brown'],
        'Chemistry': ['Prof. Marie Curie', 'Prof. Linus Pauling'],
        'Computer Science': ['Prof. Donald Knuth', 'Prof. Tim Berners-Lee'],
        'Biology': ['Prof. Charles Darwin', 'Prof. Gregor Mendel'],
        // Add more courses and their corresponding teachers as needed
    };

    const courseSelect = document.getElementById('course');
    const teacherSelect = document.getElementById('teacher');
    const feedbackForm = document.getElementById('feedback-form');

    // Populate course dropdown
    Object.keys(courses).forEach(course => {
        let option = document.createElement('option');
        option.value = course;
        option.text = course;
        courseSelect.add(option);
    });

    // Populate teachers based on selected course
    window.populateTeachers = function() {
        const selectedCourse = courseSelect.value;
        teacherSelect.innerHTML = '<option value="">-- Select a teacher --</option>'; // Reset teacher dropdown

        if (selectedCourse) {
            courses[selectedCourse].forEach(teacher => {
                let option = document.createElement('option');
                option.value = teacher;
                option.text = teacher;
                teacherSelect.add(option);
            });
        }
    };

    // Handle feedback form submission
    feedbackForm.onsubmit = function(event) {
        event.preventDefault(); // Prevent default form submission

        const course = courseSelect.value;
        const teacher = teacherSelect.value;
        const feedback = document.getElementById('feedback').value;

        if (course && teacher && feedback) {
            alert(`Feedback submitted!\nCourse: ${course}\nTeacher: ${teacher}\nFeedback: ${feedback}`);
            // Here you can add code to send the feedback to a server or further processing

            // Reset the form after submission
            feedbackForm.reset();
            teacherSelect.innerHTML = '<option value="">-- Select a teacher --</option>'; // Reset teacher dropdown
        } else {
            alert('Please fill in all fields.');
        }
    };
});
