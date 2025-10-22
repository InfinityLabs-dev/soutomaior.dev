    const folderContents = {
        about: `
            <h2>Resume</h2>
                <iframe
                    src="images/Resume.pdf" 
                    width="100%" 
                    height="900px" 
                    style="border: none; border-radius: 10px;">
                </iframe>
                <p>Hello! I'm a passionate web developer and software engineer specializing in cutting-edge technologies...</p>
                `,
        projects: '',



        skills: `
            <h2>Technical Skills</h2>
            <div class="project-card">
                <h3>Account Management</h3>
                <p>Solidity, Web3.js, Ethers.js, Smart Contract Development, DApp Development, IPFS</p>
            </div>
            <div class="project-card">
                <h3>Application Development</h3>
                <p>TensorFlow, PyTorch, OpenAI API, Natural Language Processing, Computer Vision, Model Training</p>
            </div>
            <div class="project-card">
                <h3>Project Management</h3>
                <p>React, Vue.js, Next.js, TypeScript, Tailwind CSS, Three.js, WebGL</p>
            </div>
            <div class="project-card">
                <h3>Business Development</h3>
                <p>Node.js, Python, Django, Flask, PostgreSQL, MongoDB, Redis, AWS</p>
            </div>
        `,
        experience: `
            <h2>Work Experience</h2>
            <div class="project-card">
                <h3>Regional Sales Manager</h3>
                <p><strong>OG Inc.</strong> | 04/2025 - Current</p>
                <p>
                <ul>
                    <li>Oversee multi-state sales operations across three territories</li>
                    <li>Build and maintain key client relationships, driving growth through 
account management and long-term partnerships.</li>
                    <li> Analyze sales performance and market data to identify trends, optimize 
territory coverage, and implement performance plans. </li>
                    <li> Design and implement SOPs to streamline sales workflows, onboarding, 
and team communication  </li>
                </ul>
                </p>
            </div>

            <div class="project-card">
                <h3>Senior Account Manager</h3>
                <p><strong>Safe-Reach Digital Marketing </strong> |  09/2021 - 02/2024</p>
                <p>Developed full-stack web applications using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.</p>
            </div>

            <div class="project-card">
                <h3>Owner</h3>
                <p><strong>Market Consulting Solutions</strong> | 01/2020 - 02/2022 </p>
                <p>Built responsive web interfaces and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality products.</p>
            </div>
        `,
        contact: `
            <h2>Get In Touch</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <div class="project-card">
                <h3>📧 Email</h3>
                <p>your.email@example.com</p>
            </div>
            <div class="project-card">
                <h3>💼 LinkedIn</h3>
                <p>linkedin.com/in/yourprofile</p>
            </div>
            <div class="project-card">
                <h3>🐙 GitHub</h3>
                <p>github.com/InfinityLabs-dev</p>
            </div>
            <div class="project-card">
                <h3>🐦 Twitter</h3>
                <p>@yourhandle</p>
            </div>
        `
    };

    // Dynamically load projects HTML content
    fetch('content/projects.html')
        .then(response => response.text())
        .then(html => folderContents.projects = html)
        .catch(err => console.error("Couldn't load projects.html:", err));

    let currentFolder = 'home';

    function openFolder(folderName) {
        currentFolder = folderName;
        const contentArea = document.getElementById('content-area');
        const currentFolderSpan = document.getElementById('current-folder');
        const separator = document.getElementById('separator');

        currentFolderSpan.textContent = folderName.charAt(0).toUpperCase() + folderName.slice(1);
        currentFolderSpan.style.display = 'inline';
        separator.style.display = 'inline';

        // Build the shell first (without inserting large HTML)
        contentArea.innerHTML = `
            <button class="back-button" onclick="navigateTo('home')">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                </svg>
                Back
            </button>
            <div class="folder-content"></div>
        `;

        // Then safely append the large content
        const folderContentDiv = contentArea.querySelector('.folder-content');
        folderContentDiv.innerHTML = folderContents[folderName];
    }


    function navigateTo(location) {
        if (location === 'home') {
            currentFolder = 'home';
            const contentArea = document.getElementById('content-area');
            const currentFolderSpan = document.getElementById('current-folder');
            const separator = document.getElementById('separator');
            
            currentFolderSpan.style.display = 'none';
            separator.style.display = 'none';
            
            contentArea.innerHTML = `
                <div class="folders-grid" id="folders-view">
                    <div class="folder" onclick="openFolder('about')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#667eea" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div class="folder-name">Resume</div>
                    </div>
                    <div class="folder" onclick="openFolder('projects')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#764ba2" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div class="folder-name">Projects</div>
                    </div>
                    <div class="folder" onclick="openFolder('skills')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div class="folder-name">Skills</div>
                    </div>
                    <div class="folder" onclick="openFolder('experience')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#4facfe" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div class="folder-name">Experience</div>
                    </div>
                    <div class="folder" onclick="window.open('https://github.com/InfinityLabs-dev', '_blank')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div class="folder-name">GitHub</div>
                    </div>
                    <div class="folder" onclick="openFolder('contact')">
                        <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="#43e97b" stroke-width="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div class="folder-name">Contact</div>
                    </div>
                </div>
            `;
        }
    }
    function activateRickRoll() {
        document.body.classList.toggle('flipped');

        const btn = document.querySelector('.secret-button');
        btn.textContent = document.body.classList.contains('flipped')
            ? 'LOL'
            : 'DO NOT PUSH';
    }
