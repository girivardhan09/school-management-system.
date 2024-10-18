document.addEventListener('DOMContentLoaded', () => {
    const courses = {
        'Math': [
            { name: 'Prof. John Doe', rating: 4.5, projects: 5, patents: 2, background: 'PhD in Mathematics, 15 years of teaching experience' },
            { name: 'Prof. Jane Smith', rating: 4.2, projects: 3, patents: 1, background: 'PhD in Applied Mathematics, 10 years of research in Algebra' },
            { name: 'Prof. Alan Turing', rating: 4.7, projects: 6, patents: 3, background: 'PhD in Computer Science, Expert in Cryptography' }
        ],
        'Physics': [
            { name: 'Prof. Emily Green', rating: 4.8, projects: 7, patents: 4, background: 'PhD in Physics, 12 years of research in Astrophysics' },
            { name: 'Prof. Michael Brown', rating: 4.3, projects: 6, patents: 2, background: 'PhD in Quantum Physics, Expert in Particle Physics' },
            { name: 'Prof. Isaac Newton', rating: 5.0, projects: 10, patents: 5, background: 'Pioneer in Physics, Renowned for Laws of Motion' }
        ],
        'Chemistry': [
            { name: 'Prof. Marie Curie', rating: 4.9, projects: 9, patents: 4, background: 'PhD in Chemistry, Nobel Laureate, Research in Radioactivity' },
            { name: 'Prof. Linus Pauling', rating: 4.7, projects: 8, patents: 3, background: 'PhD in Quantum Chemistry, Nobel Prize in Chemistry' },
            { name: 'Prof. Dorothy Hodgkin', rating: 4.6, projects: 7, patents: 2, background: 'PhD in Biochemistry, Expert in X-ray Crystallography' }
        ],
        'Computer Science': [
            { name: 'Prof. Donald Knuth', rating: 4.9, projects: 15, patents: 5, background: 'PhD in Computer Science, Father of Algorithm Analysis' },
            { name: 'Prof. Tim Berners-Lee', rating: 4.8, projects: 10, patents: 3, background: 'Inventor of the World Wide Web, Expert in Web Technologies' },
            { name: 'Prof. Ada Lovelace', rating: 5.0, projects: 12, patents: 6, background: 'Mathematician, First Computer Programmer' }
        ],
        'Biology': [
            { name: 'Prof. Charles Darwin', rating: 5.0, projects: 11, patents: 4, background: 'Naturalist, Theory of Evolution by Natural Selection' },
            { name: 'Prof. Gregor Mendel', rating: 4.7, projects: 8, patents: 2, background: 'Founder of Modern Genetics, Mendelian Inheritance' },
            { name: 'Prof. Barbara McClintock', rating: 4.9, projects: 9, patents: 3, background: 'Pioneer in Cytogenetics, Nobel Prize Winner' }
        ]
        // Add more subjects and teachers as needed
    };

    const courseSelect = document.getElementById('theory-courses');
    const teacherListDiv = document.getElementById('teacher-list');
    const teacherProfileSection = document.getElementById('teacher-profile-section');
    const teacherProfileDiv = document.getElementById('teacher-profile');

    // Populate course dropdown
    Object.keys(courses).forEach(course => {
        let option = document.createElement('option');
        option.value = course;
        option.text = course;
        courseSelect.add(option);
    });

    // Handle course selection change
    courseSelect.addEventListener('change', function () {
        const selectedCourse = this.value;
        displayTeacherList(selectedCourse);
    });

    // Display the list of teachers for the selected course
    function displayTeacherList(course) {
        const teachers = courses[course];
        teacherListDiv.innerHTML = '';  // Clear previous teacher list

        if (teachers) {
            const teacherHeading = document.createElement('h3');
            teacherHeading.textContent = `Select a teacher for ${course}:`;
            teacherListDiv.appendChild(teacherHeading);

            teachers.forEach((teacher, index) => {
                const teacherBtn = document.createElement('button');
                teacherBtn.textContent = teacher.name;
                teacherBtn.classList.add('teacher-btn');
                teacherBtn.addEventListener('click', () => {
                    displayTeacherProfile(teacher);
                });
                teacherListDiv.appendChild(teacherBtn);
            });
        }
    }

    // Display the selected teacher's profile details
    function displayTeacherProfile(teacher) {
        teacherProfileSection.style.display = 'block';  // Show profile section

        teacherProfileDiv.innerHTML = `
            <h3>${teacher.name}</h3>
            <p><strong>Rating:</strong> ${teacher.rating}</p>
            <p><strong>Research Projects (Last 4 years):</strong> ${teacher.projects}</p>
            <p><strong>Patents:</strong> ${teacher.patents}</p>
            <p><strong>Academic Background:</strong> ${teacher.background}</p>
        `;
    }
});
