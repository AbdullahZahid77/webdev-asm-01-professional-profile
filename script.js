// Define translations for each language
// Define translations for each language
const translations = {
    en: {
        home: "Home",
        contact: "Contact",
        skillsTitle: "Skills:",
        softSkillsTitle: "Soft Skills:",
        educationTitle: "Education:",
        certificationsTitle: "Certifications:",
        projectsTitle: "Projects:",
        skills: [
            "c++", "python", "pytorch", "scikit-learn", "seaborn", "matplotlib",
            "numpy", "opencv", "shapely", "contextily"
        ],
        softSkills: [
            "Team Work", "Time Management", "Problem Solving", "Adaptability"
        ],
        education: [
            "Information Technology University (BSCS)",
            "New Middle East International School (A-Levels)"
        ],
        certifications: [
            "Google Data Analytics Certificate",
            "IBM Data Analysis with Python",
            "OpenCVUniversity OpenCV Bootcamp",
            "Kaggle- Machine Learning"
        ],
        projects: [
            "Enhancing Military Operations and Logistics with Geospatial Analysis: Selected Standout Project",
            "NASDAQ Price Prediction with Machine Learning: Stock Price Movement Prediction",
            "Real-Time Color Detector using HSV Colorspace- Computer Vision"
        ],
        youtubeVideo: "Most Viewed video from my youtube channel:"
    },
    ur: {
        home: "گھر",
        contact: "رابطہ",
        skillsTitle: "مہارتیں:",
        softSkillsTitle: "نرم مہارتیں:",
        educationTitle: "تعلیم:",
        certificationsTitle: "سرٹیفیکیشن:",
        projectsTitle: "پراجیکٹس:",
        skills: [
            "سی++", "پائتھن", "پائی ٹورچ", "سائیکیٹ-لرن", "سیبورن", "میٹ پلوٹ لب",
            "نیم پائی", "اوپن سی وی", "شیپلی", "کانٹیکسٹلی"
        ],
        softSkills: [
            "ٹیم ورک", "وقت کی انتظام", "مسئلہ حل کرنا", "ڈھالنے کی صلاحیت"
        ],
        education: [
            "انفارمیشن ٹیکنالوجی یونیورسٹی (بی ایس سی ایس)",
            "نیو مڈل ایسٹ انٹرنیشنل اسکول (اے-لیول)"
        ],
        certifications: [
            "گوگل ڈیٹا اینالیٹکس سند",
            "آئی بی ایم ڈیٹا اینالیسس ود پائتھن",
            "اوپن سی وی یونیورسٹی اوپن سی وی بوٹ کیمپ",
            "کگل- مشین لرننگ"
        ],
        projects: [
            "فوجی آپریشنز اور لاجسٹکس کو جغرافیائی تجزیہ کے ساتھ بڑھانا: منتخب نمایاں پروجیکٹ",
            "مشین لرننگ کے ساتھ NASDAQ قیمت کی پیش گوئی: اسٹاک قیمت کی نقل و حرکت کی پیش گوئی",
            "ہوایس وی رنگ کی جگہ کا تعین کرنے والا - کمپیوٹر وژن"
        ],
        youtubeVideo: "میرے یوٹیوب چینل سے سب سے زیادہ دیکھا جانے والا ویڈیو:"
    },
    ar: {
        home: "الرئيسية",
        contact: "اتصال",
        skillsTitle: "المهارات:",
        softSkillsTitle: "المهارات الشخصية:",
        educationTitle: "التعليم:",
        certificationsTitle: "الشهادات:",
        projectsTitle: "المشاريع:",
        skills: [
            "C++", "بايثون", "بايتورتش", "سايكيت-ليرن", "سيبورن", "ماتبلوتليب",
            "نومباي", "أوبن سي في", "شابيلي", "كونتكستيلي"
        ],
        softSkills: [
            "العمل الجماعي", "إدارة الوقت", "حل المشكلات", "التكيف"
        ],
        education: [
            "جامعة تكنولوجيا المعلومات (بكالوريوس)",
            "مدرسة نيو ميدل إيست الدولية (مستوى A)"
        ],
        certifications: [
            "شهادة تحليل بيانات جوجل",
            "تحليل بيانات IBM باستخدام بايثون",
            "معسكر تدريب OpenCV من OpenCVUniversity",
            "كاجل - تعلم الآلة"
        ],
        projects: [
            "تعزيز العمليات العسكرية والخدمات اللوجستية من خلال التحليل الجغرافي: مشروع بارز",
            "توقع سعر NASDAQ باستخدام التعلم الآلي: توقع حركة سعر الأسهم",
            "كاشف اللون في الوقت الحقيقي باستخدام مساحة ألوان HSV - رؤية الكمبيوتر"
        ],
        youtubeVideo: "أكثر فيديو مشاهدة من قناتي على يوتيوب:"
    },
    fr: {
        home: "Accueil",
        contact: "Contact",
        skillsTitle: "Compétences:",
        softSkillsTitle: "Compétences Douces:",
        educationTitle: "Éducation:",
        certificationsTitle: "Certifications:",
        projectsTitle: "Projets:",
        skills: [
            "c++", "python", "pytorch", "scikit-learn", "seaborn", "matplotlib",
            "numpy", "opencv", "shapely", "contextily"
        ],
        softSkills: [
            "Travail en équipe", "Gestion du temps", "Résolution de problèmes", "Adaptabilité"
        ],
        education: [
            "Université de Technologie de l'information (BSCS)",
            "Nouvelle École Internationale du Moyen-Orient (A-Levels)"
        ],
        certifications: [
            "Certificat d'analyse de données Google",
            "Analyse de données IBM avec Python",
            "Bootcamp OpenCVUniversity OpenCV",
            "Kaggle - Apprentissage automatique"
        ],
        projects: [
            "Amélioration des opérations militaires et de la logistique grâce à l'analyse géospatiale : Projet sélectionné",
            "Prédiction des prix NASDAQ avec apprentissage automatique : Prédiction des mouvements des prix des actions",
            "Détecteur de couleur en temps réel utilisant l'espace couleur HSV - Vision par ordinateur"
        ],
        youtubeVideo: "Vidéo la plus regardée de ma chaîne YouTube :"
    }
};

// Function to change the language
function changeLanguage(lang) {
    if (translations[lang]) {
        document.getElementById('home').textContent = translations[lang].home;
        document.getElementById('contact').textContent = translations[lang].contact;
        document.getElementById('skills-title').textContent = translations[lang].skillsTitle;
        document.getElementById('softskills-title').textContent = translations[lang].softSkillsTitle;
        document.getElementById('education-title').textContent = translations[lang].educationTitle;
        document.getElementById('certifications-title').textContent = translations[lang].certificationsTitle;
        document.getElementById('projects-title').textContent = translations[lang].projectsTitle;

        const skillItems = document.querySelectorAll('.skillsection ul li');
        const softSkillItems = document.querySelectorAll('.softskills ul li');
        const educationItems = document.querySelectorAll('.education ul li');
        const certificationItems = document.querySelectorAll('.certifications ul li');
        const projectItems = document.querySelectorAll('.projects ul li');

        translations[lang].skills.forEach((item, index) => skillItems[index].textContent = item);
        translations[lang].softSkills.forEach((item, index) => softSkillItems[index].textContent = item);
        translations[lang].education.forEach((item, index) => educationItems[index].textContent = item);
        translations[lang].certifications.forEach((item, index) => certificationItems[index].textContent = item);
        translations[lang].projects.forEach((item, index) => projectItems[index].textContent = item);

        document.querySelector('.youtube-video h3').textContent = translations[lang].youtubeVideo;
    } else {
        console.error('Language not supported:', lang);
    }
}




document.addEventListener('DOMContentLoaded', function () {
    const data = {
        "personalInfo": {
            "name": "Abdullah Zahid",
            "role": "Deep Learning Engineer"
        },
        "skills": ["c++", "python", "pytorch", "scikit-learn", "seaborn", "matplotlib", "numpy", "opencv", "shapely", "contextily"],
        "softSkills": ["Team Work", "Time Management", "Problem Solving", "Adaptability"],
        "education": [
            "Information Technology University (BSCS)",
            "New Middle East International School (A-Levels)"
        ],
        "certifications": [
            "Google Data Analytics Certificate",
            "IBM Data Analysis with Python",
            "OpenCVUniversity OpenCV Bootcamp",
            "Kaggle- Machine Learning"
        ],
        "projects": [
            {
                "title": "Enhancing Military Operations and Logistics with Geospatial Analysis",
                "description": "Selected Standout Project"
            },
            {
                "title": "NASDAQ Price Prediction with Machine Learning",
                "description": "Stock Price Movement Prediction"
            },
            {
                "title": "Real-Time Color Detector using HSV Colorspace",
                "description": "Computer Vision"
            }
        ],
        "socialMediaLinks": {
            "linkedin": "https://www.linkedin.com/in/abdullah-zahid-410874229/",
            "github": "https://github.com/AbdullahZahid77"
        },
        "youtubeVideo": "https://www.youtube.com/embed/GNDO2G6YySA"
    };

    document.getElementById('person-name').textContent = data.personalInfo.name;
    document.getElementById('person-role').textContent = data.personalInfo.role;
    document.getElementById('linkedin').setAttribute('href', data.socialMediaLinks.linkedin);
    document.getElementById('github').setAttribute('href', data.socialMediaLinks.github);

    const skillsContainer = document.getElementById('skills-list');
    data.skills.forEach(skill => {
        let listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsContainer.appendChild(listItem);
    });

    const softSkillsContainer = document.getElementById('softskills-list');
    data.softSkills.forEach(skill => {
        let listItem = document.createElement('li');
        listItem.textContent = skill;
        softSkillsContainer.appendChild(listItem);
    });

    const educationContainer = document.getElementById('education-list');
    data.education.forEach(edu => {
        let listItem = document.createElement('li');
        listItem.textContent = edu;
        educationContainer.appendChild(listItem);
    });

    const certificationsContainer = document.getElementById('certifications-list');
    data.certifications.forEach(cert => {
        let listItem = document.createElement('li');
        listItem.textContent = cert;
        certificationsContainer.appendChild(listItem);
    });

    const projectsContainer = document.getElementById('projects-list');
    data.projects.forEach(proj => {
        let projItem = document.createElement('div');
        projItem.innerHTML = `<h4>${proj.title}</h4><p>${proj.description}</p>`;
        projectsContainer.appendChild(projItem);
    });

    document.getElementById('youtube-frame').setAttribute('src', data.youtubeVideo);
});


