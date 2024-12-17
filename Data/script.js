document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("content-slides");
  
    fetch("/Data/data.json")
      .then(response => response.json())
      .then(data => {        
        data.sections.forEach(section => {
          // Create Section Header
          const sectionHeader = document.createElement("div");
          sectionHeader.className = "top-content-slides";
          sectionHeader.innerHTML = `
            <h2 style="padding-left: 1rem">${section.title}</h2>
            <a href="#">Tout voir</a>
          `;
          container.appendChild(sectionHeader);
  
          // Create Posts Container
          const postsContainer = document.createElement("div");
          postsContainer.className = "container-home";
  
          section.posts.forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.className = "post-home";
  
            postDiv.innerHTML = `
              <img src="${post.image}" alt="${post.title}" />
              <div class="details">
                <p class="title">${post.title}</p>
                <p class="author">${post.author}</p>
                ${post.badge ? `<div class="badge-homepage">${post.badge}</div>` : ""}
                ${post.stats ? `<p class="stats">${post.stats}</p>` : ""}
                <a href="${post.pdf}" target="blanck"><button class="telecharger-homepage">Télécharger maintenant</button></a>
              </div>
            `;
            postsContainer.appendChild(postDiv);
          });
  
          container.appendChild(postsContainer);
        });
      })
      .catch(error => console.error("Error loading data:", error));
  });