//Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

//Experience Section Logo's
import codeclauseLogo from './assets/company_logo/codeclause_logo.png';

//Education Section Logo's
import kiitLogo from './assets/education_logo/kiit_logo.png';
import andrewsLogo from './assets/education_logo/andrews_logo.png';
import aatreyaLogo from './assets/education_logo/aatreya_logo.png';

//Project Section Logo's
import medkartLogo from './assets/projects_logo/medkart.png';
import expnyLogo from './assets/projects_logo/expny.png';
import quiziverseLogo from './assets/projects_logo/quiziverse.png';
import ecommerceWebsiteLogo from './assets/projects_logo/ecommerce_website.png';
import ssaLogo from './assets/projects_logo/stock_sentiment_analysis.png';


export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Angular', logo: angularLogo },
            { name: 'Next JS', logo: nextjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Material UI', logo: materialuiLogo },
            { name: 'Bootstrap', logo: bootstrapLogo},
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'Firebase', logo: firebaseLogo },
            { name: 'PostgreSQL', logo: postgreLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'JavaScript', logo: javascriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'Github', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Compass', logo: mcLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'Figma', logo: figmaLogo },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: codeclauseLogo,
        role: "Web Development Intern",
        company: "CodeClause",
        date: "August 2023 - September 2023",
        desc: "Built responsive and interactive web applications using HTML, CSS and Javascript. Developed features like a To-Do List and Timer/Stopwatch with a focus on user-friendly design and functionality. Improved frontend logic, practiced clean code, and strengthened problem-solving skills during real-time project development.",
        skills: [
            "HTML",
            "CSS",
            "Javascript",
            "React JS",
            "Node JS",
        ],
    },
];

export const education = [
    {
        id: 0,
        img: kiitLogo,
        school: "KIIT University, Bhubaneswar",
        date: "Oct 2021 - May 2025",
        desc: "I completed my Bachelor's degree in Information Technology (B.Tech) from KIIT University, Bhubaneswar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures & Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at KIIT University allowed me to work on projects that applied theoretical concepts to real-world problems.",
        degree: "Bachelor of Technology - B.Tech (Information Technology)",
    },
    {
        id: 1,
        img: andrewsLogo,
        school: "St. Andrews International School & Jr. College, Panvel",
        date: "Jun 2019 - May 2021",
        grade: "88.10%",
        desc: "I completed my class 12 education from St. Andrews International School & Jr. College, Panvel, under the Maharashtra board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
        degree: "Maharashtra Board(XII) - PCM with Computer Science",
    },
    {
        id: 2,
        img: aatreyaLogo,
        school: "Aatreya Academy, Pratapgarh, Uttar Pradesh",
        date: "Apr 2018 - May 2019",
        grade: "83.60%",
        desc: "I completed my class 10 education from Aatreya Academy, Pratapgarh, under the CBSE board, where I studied Science.",
        degree: "CBSE(X), Science",
    },
];

export const projects = [
    {
        id: 0,
        title: "Medkart - Healthcare Pharma",
        description: "A responsive and easy-to-use web application built to simplify online medicine delivery. Users can browse, search, and order medicines with ease, while also accessing features like health blogs and doctor consultation. Developed with React.js and Node.js, the app ensures a smooth experience with secure payment integration and clean navigation for all users.",
        image: medkartLogo,
        tags: ["HTML", "CSS", "Javascript", "React JS", "Node JS", "Express", "MongoDB", "Tailwind CSS", "API", "Payment Integration"],
        github: "https://github.com/P-dwivedi/major-project-Medkart",
        webapp: "",
    },
    {
        id: 1,
        title: "Expny",
        description: "A smart and responsive web application built to help users track and manage their daily expenses with ease. Developed using React.js and Node.js, the app allows users to add, categorize, and visualize their spending through dynamic graphs. The clean interface and real-time updates make budgeting simple, efficient, and accessible.",
        image: expnyLogo,
        tags: ["HTML", "CSS", "Javascript", "React JS", "Node JS", "Tailwind CSS"],
        github: "https://github.com/P-dwivedi/expense-tracker",
        webapp: "",
    },
    {
        id: 2,
        title: "Quiziverse",
        description: "An interactive and engaging web application designed to help users test their knowledge through various quizzes. Built using HTML, CSS and Javascript, the app offers a smooth quiz-taking experience with instant feedback and score tracking. Its clean design and easy navigation make learning fun and effective for all users.",
        image: quiziverseLogo,
        tags: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/P-dwivedi/Quiziverse_QuizPlatform",
        webapp: "",
    },
    {
        id: 3,
        title: "Ecommerce Website",
        description: "A fully responsive and visually appealing web application designed for a smooth online shopping experience. Developed using HTML, CSS, Javascript, and Bootstrap, the site features product listings, category sections, and intuitive navigation. The user-friendly layout ensures seamless browsing across all devices.",
        image: ecommerceWebsiteLogo,
        tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
        github: "https://github.com/P-dwivedi/Ecommerce_Website",
        webapp: "",
    },
    {
        id: 4,
        title: "Stock Sentiment Analysis",
        description: "A machine learning-based project that analyzes the sentiment of top 25 news headlines to predict stock market trends. Built using Python and a Random Forest Classifier, the model processes text data with NLP techniques and achieves high accuracy. The project helps users understand market mood and make informed decisions.",
        image: ssaLogo,
        tags: ["Python", "Machine Learning", "NLP", "Random Forest Classifier"],
        github: "https://github.com/P-dwivedi/Stock_Sentiment_Analysis",
        webapp: "",
    },
];

