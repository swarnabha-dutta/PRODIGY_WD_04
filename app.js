document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Projects Data
    const projects = [
        {
            title: 'E-commerce Platform',
            description: 'Full-stack e-commerce website with React and Node.js',
            technologies: ['React', 'Node.js', 'MongoDB'],
            imageUrl: 'project1.jpg',
            githubLink: '#'
        },
        {
            title: 'Weather App',
            description: 'Real-time weather application using OpenWeatherMap API',
            technologies: ['JavaScript', 'API', 'HTML/CSS'],
            imageUrl: 'project2.jpg',
            githubLink: '#'
        },
        {
            title: 'Task Management System',
            description: 'Collaborative task tracking web application',
            technologies: ['Vue.js', 'Firebase', 'Authentication'],
            imageUrl: 'project3.jpg',
            githubLink: '#'
        }
    ];

    // Render Projects
    const projectContainer = document.getElementById('project-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}">
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <a href="${project.githubLink}" target="_blank" class="project-link">View Project</a>
            </div>
        `;
        projectContainer.appendChild(projectCard);
    });

    // Skills Data
    const skills = [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Node.js', icon: 'fab fa-node' },
        { name: 'Git', icon: 'fab fa-git-alt' }
    ];

    // Render Skills
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <p>${skill.name}</p>
        `;
        skillsContainer.appendChild(skillItem);
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Basic form validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // In a real-world scenario, you would send this data to a backend
        console.log('Form Submitted:', { name, email, message });
        
        // Optional: Show success message
        alert('Message sent successfully! I will get back to you soon.');
        contactForm.reset();
    });
});