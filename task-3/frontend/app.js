document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('resumeFile');
    const format = document.getElementById('resumeFormat').value;

    if (fileInput.files.length === 0) {
        alert('Please upload a resume file');
        return;
    }

    const file = fileInput.files[0];

    // Dummy categorized data to display
    const categorizedData = {
        career: [
            "Security Engineer (2Y)", 
            "Lead Security Engineer (2Y)", 
            "Security Analyst (2Y)"
        ],
        skills: [
            "Operating Systems", 
            "Cloud & XaaS", 
            "Threat Modeling", 
            "Advanced Threats"
        ],
        hobbies: [
            "Hackathons", 
            "Bio/Brain Hacking", 
            "Transhumanism", 
            "Deep Learning"
        ],
        projects: [
            "Security-Portal.cz (founder)", 
            "Defensive.Network (founder)", 
            "Root.cz"
        ]
    };

    displayCategorizedData(categorizedData);
});

function displayCategorizedData(data) {
    const careerList = document.getElementById('careerList');
    const skillsList = document.getElementById('skillsList');
    const hobbiesList = document.getElementById('hobbiesList');
    const projectsList = document.getElementById('projectsList');

    data.career.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        careerList.appendChild(li);
    });

    data.skills.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        skillsList.appendChild(li);
    });

    data.hobbies.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        hobbiesList.appendChild(li);
    });

    data.projects.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        projectsList.appendChild(li);
    });

    document.getElementById('resumeDetails').style.display = 'block';
}
