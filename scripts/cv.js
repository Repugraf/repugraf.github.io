import data from "../data/cv/index.js";

const cv = document.createElement("div");
cv.id = "cv";
document.body.appendChild(cv);

const myName = document.createElement("my-name");
const myInfo = document.createElement("my-info");
const mySummary = document.createElement("my-summary");
const mySkills = document.createElement("my-skills");
const myExperience = document.createElement("my-experience");

// name section
myName.innerHTML += data.name;
cv.appendChild(myName);

// info section
myInfo.innerHTML = data.info;
cv.appendChild(myInfo);

// summary section
mySummary.innerHTML = "<h1>SUMMARY</h1>";
const summaryContend = document.createElement("div");
summaryContend.classList.add("summary-contend");
summaryContend.innerHTML += data.summary;
mySummary.appendChild(summaryContend);
cv.appendChild(mySummary);

// skills section
mySkills.innerHTML = "<h1>SKILLS</h1>";
const skillSectionsContainer = document.createElement("div");
skillSectionsContainer.classList.add("section-container", "skills-section-container");

data.skills.forEach(({ name, sections }) => {
  const skillContainer = document.createElement("div");
  skillContainer.classList.add("skill-container");

  const skillName = document.createElement("h2");
  skillName.innerText = `${name}:`;
  skillContainer.appendChild(skillName);

  const skillSections = document.createElement("div");
  skillSections.classList.add("skill-sections-container");

  sections.forEach(({ title, items }) => {
    const skillSubSection = document.createElement("div");
    skillSubSection.classList.add("skill-sub-section");

    if (title) {
      const subSectionTitle = document.createElement("h3");
      subSectionTitle.innerText = title;
      skillSubSection.appendChild(subSectionTitle);
    }

    if (items) {
      const subSectionUL = document.createElement("ul");
      subSectionUL.classList.add("section-list");
      items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item;
        subSectionUL.appendChild(li);
      });
      skillSubSection.appendChild(subSectionUL);
    }

    skillSections.appendChild(skillSubSection);
  });

  skillContainer.appendChild(skillSections);
  skillSectionsContainer.appendChild(skillContainer);
});

mySkills.appendChild(skillSectionsContainer);
cv.appendChild(mySkills);

// experience section
myExperience.innerHTML = "<h1>EXPERIENCE</h1>";
const experienceContainter = document.createElement("div");
experienceContainter.classList.add("section-container", "experience-section-container");

data.experience.forEach(({ title, content }) => {
  const experienceItem = document.createElement("div");

  const experienceTitle = document.createElement("h2");
  experienceTitle.innerText = `${title}:`;
  experienceItem.appendChild(experienceTitle);

  const experienceContent = document.createElement("div");
  experienceContent.classList.add("experience-content");
  experienceContent.innerHTML = content;
  experienceItem.appendChild(experienceContent);

  experienceContainter.appendChild(experienceItem);
});

myExperience.appendChild(experienceContainter);
cv.appendChild(myExperience);
