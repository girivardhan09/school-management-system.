document.addEventListener('DOMContentLoaded', () => {
    const theoryCourses = {
        'Math': [
            { name: 'Prof. John Doe', rating: 4.5, projects: 5, patents: 2, background: 'PhD in Mathematics' },
            { name: 'Prof. Jane Smith', rating: 4.2, projects: 3, patents: 1, background: 'PhD in Applied Mathematics' },
            { name: 'Prof. Alan Turing', rating: 4.7, projects: 6, patents: 3, background: 'PhD in Computer Science' }
        ],
        'Physics': [
            { name: 'Prof. Emily Green', rating: 4.8, projects: 7, patents: 4, background: 'PhD in Physics' },
            { name: 'Prof. Michael Brown', rating: 4.3, projects: 6, patents: 2, background: 'PhD in Quantum Physics' },
            { name: 'Prof. Isaac Newton', rating: 5.0, projects: 10, patents: 5, background: 'Pioneer in Physics' }
        ],
        'Chemistry': [
            { name: 'Prof. Marie Curie', rating: 4.9, projects: 9, patents: 4, background: 'PhD in Chemistry' },
            { name: 'Prof. Linus Pauling', rating: 4.7, projects: 8, patents: 3, background: 'PhD in Quantum Chemistry' },
            { name: 'Prof. Dorothy Hodgkin', rating: 4.6, projects: 7, patents: 2, background: 'PhD in Biochemistry' }
        ],
        'Computer Science': [
            { name: 'Prof. Donald Knuth', rating: 4.9, projects: 15, patents: 5, background: 'PhD in Computer Science' },
            { name: 'Prof. Tim Berners-Lee', rating: 4.8, projects: 10, patents: 3, background: 'Inventor of the World Wide Web' },
            { name: 'Prof. Ada Lovelace', rating: 5.0, projects: 12, patents: 6, background: 'First Computer Programmer' }
        ],
        'Biology': [
            { name: 'Prof. Charles Darwin', rating: 5.0, projects: 11, patents: 4, background: 'Naturalist, Theory of Evolution' },
            { name: 'Prof. Gregor Mendel', rating: 4.7, projects: 8, patents: 2, background: 'Founder of Modern Genetics' },
            { name: 'Prof. Barbara McClintock', rating: 4.9, projects: 9, patents: 3, background: 'Pioneer in Cytogenetics' }
        ],
        'Statistics': [
            { name: 'Prof. Florence Nightingale', rating: 4.6, projects: 4, patents: 1, background: 'Pioneer in Statistics' },
            { name: 'Prof. John Tukey', rating: 4.8, projects: 5, patents: 2, background: 'PhD in Statistics' },
        ],
        'Economics': [
            { name: 'Prof. Adam Smith', rating: 5.0, projects: 6, patents: 1, background: 'Father of Economics' },
            { name: 'Prof. Milton Friedman', rating: 4.9, projects: 4, patents: 2, background: 'Nobel Prize in Economics' },
        ],
        'Philosophy': [
            { name: 'Prof. Socrates', rating: 4.8, projects: 5, patents: 2, background: 'Philosopher, Ethics' },
            { name: 'Prof. Aristotle', rating: 4.9, projects: 6, patents: 3, background: 'Philosopher, Logic' },
        ],
        'Psychology': [
            { name: 'Prof. Sigmund Freud', rating: 4.7, projects: 4, patents: 1, background: 'Psychoanalysis' },
            { name: 'Prof. Carl Jung', rating: 4.8, projects: 5, patents: 2, background: 'Analytical Psychology' },
        ]
        // Add more theory courses and corresponding teachers as needed
    };

    const labCourses = {
        'Biology Lab': [
            { name: 'Prof. Charles Darwin', rating: 5.0, projects: 11, patents: 4, background: 'Naturalist, Theory of Evolution' },
            { name: 'Prof. Gregor Mendel', rating: 4.7, projects: 8, patents: 2, background: 'Founder of Modern Genetics' },
        ],
        'Chemistry Lab': [
            { name: 'Prof. Marie Curie', rating: 4.9, projects: 9, patents: 4, background: 'PhD in Chemistry' },
            { name: 'Prof. Linus Pauling', rating: 4.7, projects: 8, patents: 3, background: 'PhD in Quantum Chemistry' },
        ],
        'Physics Lab': [
            { name: 'Prof. Emily Green', rating: 4.8, projects: 7, patents: 4, background: 'PhD in Physics' },
            { name: 'Prof. Michael Brown', rating: 4.3, projects: 6, patents: 2, background: 'PhD in Quantum Physics' },
        ],
        'Computer Science Lab': [
            { name: 'Prof. Donald Knuth', rating: 4.9, projects: 15, patents: 5, background: 'PhD in Computer Science' },
            { name: 'Prof. Ada Lovelace', rating: 5.0, projects: 12, patents: 6, background: 'First Computer Programmer' },
        ],
        // Add more lab courses and corresponding teachers as needed
    };

    const theorySelect = document.getElementById('theory-courses');
    const labSelect = document.getElementById('lab-courses');
    const theoryTeacherListDiv = document.getElementById('theory-teacher-list');
    const labTeacherListDiv = document.getElementById('lab-teacher-list');
    const teacherProfileSection = document.getElementById('teacher-profile-section');
    const teacherProfileDiv = document.getElementById('teacher-profile');
    const selectCourseCheckbox = document.getElementById('select-course');

    // Populate theory courses dropdown
    Object.keys(theoryCourses).forEach(course => {
        let option = document.createElement('option');
        option.value = course;
        option.text = course;
        theorySelect.add(option);
    });

    // Populate lab courses dropdown
    Object.keys(labCourses).forEach(course => {
        let option = document.createElement('option');
        option.value = course;
        option.text = course;
        labSelect.add(option);
    });

    // Populate theory teacher list based on selected theory course
    window.populateTheoryTeachers = function() {
        const selectedCourse = theorySelect.value;
        const teachers = theoryCourses[selectedCourse];
        theoryTeacherListDiv.innerHTML = '';
        selectCourseCheckbox.checked = false; // Reset checkbox

        if (teachers) {
            teachers.forEach(teacher => {
                const teacherBtn = document.createElement('button');
                teacherBtn.textContent = teacher.name;
                teacherBtn.classList.add('teacher-btn');
                teacherBtn.onclick = () => displayTeacherProfile(teacher);
                theoryTeacherListDiv.appendChild(teacherBtn);
            });
        }
    };

    // Populate lab teacher list based on selected lab course
    window.populateLabTeachers = function() {
        const selectedCourse = labSelect.value;
        const teachers = labCourses[selectedCourse];
        labTeacherListDiv.innerHTML = '';
        selectCourseCheckbox.checked = false; // Reset checkbox

        if (teachers) {
            teachers.forEach(teacher => {
                const teacherBtn = document.createElement('button');
                teacherBtn.textContent = teacher.name;
                teacherBtn.classList.add('teacher-btn');
                teacherBtn.onclick = () => displayTeacherProfile(teacher);
                labTeacherListDiv.appendChild(teacherBtn);
            });
        }
    };

    // Display selected teacher profile
    function displayTeacherProfile(teacher) {
        teacherProfileDiv.innerHTML = `
            <p><strong>Name:</strong> ${teacher.name}</p>
            <p><strong>Rating:</strong> ${teacher.rating}</p>
            <p><strong>Projects:</strong> ${teacher.projects}</p>
            <p><strong>Patents:</strong> ${teacher.patents}</p>
            <p><strong>Background:</strong> ${teacher.background}</p>
        `;
        teacherProfileSection.style.display = 'block';
    }

    // Submit selection
    window.submitSelection = function() {
        const selectedTheoryCourse = theorySelect.value;
        const selectedLabCourse = labSelect.value;
        const theoryTeachers = theoryCourses[selectedTheoryCourse];
        const labTeachers = labCourses[selectedLabCourse];

        let selectedCourses = [];
        if (selectCourseCheckbox.checked) {
            if (selectedTheoryCourse) {
                selectedCourses.push(`Theory Course: ${selectedTheoryCourse}`);
            }
            if (selectedLabCourse) {
                selectedCourses.push(`Lab Course: ${selectedLabCourse}`);
            }
        }

        if (selectedCourses.length > 0) {
            alert(`You have selected:\n${selectedCourses.join('\n')}`);
        } else {
            alert('Please select a course after viewing the teacher profile.');
        }
    };
});
