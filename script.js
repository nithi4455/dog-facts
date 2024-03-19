document.addEventListener("DOMContentLoaded", function () {
    const factContainer = document.getElementById("fact-container");
    const factText = document.getElementById("fact-text");
    const factImage = document.getElementById("fact-image");
    const nextBtn = document.getElementById("next-btn");
  
    // Function to fetch random dog fact and image
    function fetchRandomDogFact() {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
          const imageUrl = data.message;
          factImage.src = imageUrl;
        })
        .catch(error => console.error("Error fetching dog image:", error));
  
      fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all")
        .then(response => response.json())
        .then(data => {
          const facts = data.facts;
          const randomFact = facts[Math.floor(Math.random() * facts.length)];
          factText.textContent = randomFact;
        })
        .catch(error => console.error("Error fetching dog fact:", error));
    }
  
    // Fetch random fact when page loads
    fetchRandomDogFact();
  
    // Add event listener to Next Fact button
    nextBtn.addEventListener("click", fetchRandomDogFact);
  });
  