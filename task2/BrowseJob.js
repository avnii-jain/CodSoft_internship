const jobs = [
{
    title: "Software Engineer",
    image: "https://cdn-icons-png.flaticon.com/512/5969/5969450.png",
    details: 
    "Responsible for designing, developing and maintaining software systems and applications",
    openPosition: "20",
    link: "SoftwareEngineer.html",
 },

 {
    title: "Data Scientist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSrLAs51_iNsVa1r-zLyATquREgSQ-Onhlw&s",
    details: 
    "Responsible for collecting, analyzing and interpreting complex data to help in decision making",
    openPosition: "3",
    link: "DataScientist.html",
 },
 {
    title: "Project Manager",
    image: "https://png.pngtree.com/png-vector/20230428/ourmid/pngtree-project-management-line-icon-vector-png-image_6738629.png",
    details:
      "Responsible for planning, executing and closing projects on time and within budget.",
    openPosition: "3",
    link: "ProjectManager.html",
  },
  {
    title: "Product Manager",
    image: "https://cdn-icons-png.flaticon.com/512/8386/8386263.png",
    details:
      "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPosition: "10",
    link: "ProductManager.html",
  },

 {
    title: "Sales Representative",
    image: "https://cdn-icons-png.flaticon.com/512/8635/8635199.png",
    details: 
    "Responsible for reaching out to potential customers to present and sell products or services",
    openPosition: "6",
    link: "SalesRepresentative.html",
 },

 {
    title: "Marketing Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5fTpSGz7wo_qqSpb8qH0zbCiWSyQaVtyeQ&s",
    details: 
    "Responsible for creating and executing marketing strategies to promote products or services",
    openPosition: "7",
    link: "MarketingManager.html", 
 },

 {
    title: "Diploma Engineer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4Mp1XthzQ_GAFWCW3DwKyVGoIAQD1jQ6TA&s",
    details: 
    "Responsible for overseeing production lines, coordinate activities on the shop floor, and ensure adherence to safety standards. ",
    openPosition: "6",
    link: "DiplomaEngineer.html", 
 },
];

const jobsHeading = document.querySelector(".navbar h2");
const jobsContainer = document.querySelector(".navbar .jobs");
const jobSearch = document.querySelector(".navbar .job-search");

let searchTerm = "";

if(jobs.length == 1){
    jobsHeading.innerHTML = `${jobs.length} Job`;
} else{
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createjobListingCards = () => {
    jobsContainer.innerHTML = "";

    jobs.forEach((job) => {
        if(job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");

        let image = document.createElement("img");
        image.src = job.image;

        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");

        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");

        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");

        let openPosition = document.createElement("span");
        openPosition.classList.add = ("open-position");

        if(job.openPosition == 1){
            openPosition.innerHTML = `${job.openPosition} open position`;
        } else{
            openPosition.innerHTML = `${job.openPosition} open positions`;
        }
        
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPosition);

        jobsContainer.appendChild(jobCard);
    }
    });
};

createjobListingCards();

jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;

    createjobListingCards();
})