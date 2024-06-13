const searchToggle = document.getElementById("search-toggle");
const searchInput = document.getElementById("search-input");
const dd = document.getElementById('dd');
const topBar = document.querySelectorAll('.top-bar');
const profileImage = document.querySelectorAll('.profile-card-info img');

searchToggle.addEventListener("click", function() {
  searchInput.style.display = searchInput.style.display === "none" ? "block" : "none";
  topBar.classList.add("search-active");
});

dd.addEventListener('click',function(){
    dd.style.border = " 2px solid rgb(185, 184, 184);";
});

const sizeOptions = document.querySelectorAll('.size-option');

sizeOptions.forEach(option => {
  option.addEventListener('click', () => {
    sizeOptions.forEach(otherOption => otherOption.classList.remove('selected')); // Deselect others
    option.classList.add('selected'); // Select current
  });
});

//updates
const cardOptions = document.querySelectorAll('.card-option');



cardOptions.forEach((cardOption, index) => {
  cardOption.addEventListener('click', async() => {
    const profileImage = document.getElementById('profileImage');
    profileImage.src = cardOption.src;
  });
});

cardOptions.forEach(option => {
  option.addEventListener('click', () => {
    cardOptions.forEach(otherOption => otherOption.classList.remove('selected')); // Deselect others
    option.classList.add('selected'); // Select current
  });
});
