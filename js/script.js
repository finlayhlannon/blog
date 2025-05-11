// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded - initializing blog");

    // Check if a user is logged in
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const profileIcon = document.getElementById("profile-icon");
    const headerRight = document.querySelector(".header-right");

    if (currentUser) {
        // Replace profile icon with user's name
        const userNameElement = document.createElement("span");
        userNameElement.textContent = currentUser.name;
        userNameElement.classList.add("user-name");
        headerRight.replaceChild(userNameElement, profileIcon);
    } else {
        // Redirect to sign-in/sign-up page on profile icon click
        profileIcon.addEventListener("click", () => {
            window.location.href = "signin.html";
        });
    }

    // Initialize the blog
    initBlog();

    // Set up event listeners for UI interactions
    setupUIEventListeners();
});

// Initialize the blog
function initBlog() {
  console.log("Initializing blog");
  // Render the home page content
  renderHomePage();
}

// Render the home page
function renderHomePage() {
  console.log("Rendering home page");
  const appContainer = document.getElementById("app");
  const template = document.getElementById("home-template");
  
  // Clone the template
  const content = template.content.cloneNode(true);
  
  // Clear the app container
  appContainer.innerHTML = "";
  
  // Append the content
  appContainer.appendChild(content);
  
  // Render featured blogs
  renderFeaturedBlogs();
  
  // Render recent blogs
  renderRecentBlogs();
  
  // Add click events to blog cards
  addBlogCardClickEvents();
  
  // Update document title
  document.title = "Fin's Blog";
}

// Render featured blogs
function renderFeaturedBlogs() {
  console.log("Rendering featured blogs");
  const container = document.getElementById("featured-blogs-container");
  if (!container) {
    console.error("Featured blogs container not found");
    return;
  }
  
  // Get featured blogs
  const featuredBlogs = getFeaturedBlogs();
  console.log("Featured blogs:", featuredBlogs);
  
  // Clear the container
  container.innerHTML = "";
  
  // Render each featured blog
  featuredBlogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.className = "blog-card featured";
    blogCard.setAttribute("data-slug", blog.slug);
    
    blogCard.innerHTML = `
      <div class="blog-image">
        <img src="${blog.image}" alt="${blog.title}">
      </div>
      <div class="separator"></div>
      <div class="blog-meta">
        <span class="blog-category">${blog.category}</span>
        <span class="blog-date">${formatDate(blog.date)}</span>
      </div>
      <h4 class="blog-title">${blog.title}</h4>
      <p class="blog-excerpt">${blog.excerpt}</p>
    `;
    
    // Add click event
    blogCard.addEventListener("click", function() {
      showBlogPost(blog);
    });
    
    // Append to container
    container.appendChild(blogCard);
  });
}

// Render recent blogs
function renderRecentBlogs() {
    console.log("Rendering recent blogs");
    const container = document.getElementById("recent-blogs-container");
    if (!container) {
        console.error("Recent blogs container not found");
        return;
    }

    // Get recent blogs sorted by date (most recent first)
    const recentBlogs = getRecentBlogs(); // Already sorted in data.js
    console.log("Recent blogs:", recentBlogs);

    // Clear the container
    container.innerHTML = "";

    // Render each recent blog
    recentBlogs.forEach((blog) => {
        const blogCard = document.createElement("div");
        blogCard.className = "blog-card recent";
        blogCard.setAttribute("data-slug", blog.slug);

        blogCard.innerHTML = `
            <div class="blog-image">
                <img src="${blog.image}" alt="${blog.title}">
            </div>
            <div class="separator"></div>
            <div class="blog-meta">
                <span class="blog-category">${blog.category}</span>
                <span class="blog-date">${formatDate(blog.date)}</span>
            </div>
            <h4 class="blog-title">${blog.title}</h4>
            <p class="blog-excerpt">${blog.excerpt}</p>
        `;

        // Add click event to navigate to the blog post
        blogCard.addEventListener("click", function () {
            showBlogPost(blog);
        });

        // Append the blog card to the container
        container.appendChild(blogCard);
    });
}

// Add click events to blog cards
function addBlogCardClickEvents() {
  const blogCards = document.querySelectorAll(".blog-card");
  
  blogCards.forEach(card => {
    card.addEventListener("click", function() {
      const slug = this.getAttribute("data-slug");
      if (slug) {
        const blog = getBlogBySlug(slug);
        if (blog) {
          showBlogPost(blog);
        }
      }
    });
  });
}

// Show a blog post
function showBlogPost(blog) {
  console.log("Showing blog post:", blog.title);
  const appContainer = document.getElementById("app");
  const template = document.getElementById("blog-post-template");
  
  // Clone the template
  const content = template.content.cloneNode(true);
  
  // Set blog data
  content.querySelector(".blog-category").textContent = blog.category;
  content.querySelector(".blog-date").textContent = formatDate(blog.date);
  content.querySelector(".blog-title").textContent = blog.title;
  content.querySelector(".blog-post-image img").src = blog.image;
  content.querySelector(".blog-post-image img").alt = blog.title;
  content.querySelector(".blog-post-content").innerHTML = blog.content;
  
  // Set tags
  const tagsContainer = content.querySelector(".blog-post-tags");
  blog.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });
  
  // Clear the app container
  appContainer.innerHTML = "";
  
  // Append the content
  appContainer.appendChild(content);
  
  // Add a back button
  const backButton = document.createElement("button");
  backButton.textContent = "← Back to Home";
  backButton.className = "back-button";
  backButton.style.cssText = "margin-bottom: 20px; background: #000; color: #fff; border: none; padding: 10px 15px; cursor: pointer;";
  backButton.addEventListener("click", function() {
    renderHomePage();
  });
  
  appContainer.insertBefore(backButton, appContainer.firstChild);
  
  // Update document title
  document.title = `${blog.title} - Fin's Blog`;
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Show a category page
function showCategoryPage(category) {
  console.log("Showing category page:", category);
  const appContainer = document.getElementById("app");
  const template = document.getElementById("category-template");
  
  // Clone the template
  const content = template.content.cloneNode(true);
  
  // Set the category title
  content.querySelector(".category-title").textContent = category.charAt(0).toUpperCase() + category.slice(1);
  
  // Clear the app container
  appContainer.innerHTML = "";
  
  // Append the content
  appContainer.appendChild(content);
  
  // Add a back button
  const backButton = document.createElement("button");
  backButton.textContent = "← Back to Home";
  backButton.className = "back-button";
  backButton.style.cssText = "margin-bottom: 20px; background: #000; color: #fff; border: none; padding: 10px 15px; cursor: pointer;";
  backButton.addEventListener("click", function() {
    renderHomePage();
  });
  
  appContainer.insertBefore(backButton, appContainer.firstChild);
  
  // Get blogs for this category
  const blogs = getBlogsByCategory(category);
  
  // Sort blogs by date (newest first)
  blogs.sort((a, b) => b.date - a.date);
  
  // Render blogs
  const container = document.getElementById("category-blogs-container");
  
  // Clear the container
  container.innerHTML = "";
  
  // Render each blog
  blogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.className = "blog-card";
    blogCard.setAttribute("data-slug", blog.slug);
    
    blogCard.innerHTML = `
      <div class="blog-image">
        <img src="${blog.image}" alt="${blog.title}">
      </div>
      <div class="separator"></div>
      <div class="blog-meta">
        <span class="blog-category">${blog.category}</span>
        <span class="blog-date">${formatDate(blog.date)}</span>
      </div>
      <h4 class="blog-title">${blog.title}</h4>
      <p class="blog-excerpt">${blog.excerpt}</p>
    `;
    
    // Add click event
    blogCard.addEventListener("click", function() {
      showBlogPost(blog);
    });
    
    // Append to container
    container.appendChild(blogCard);
  });
  
  // Update document title
  document.title = `${category.charAt(0).toUpperCase() + category.slice(1)} - Fin's Blog`;
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Set up UI event listeners
function setupUIEventListeners() {
  // Navigation links
  document.addEventListener("click", function(e) {
    // Check if the clicked element is a navigation link
    if (e.target.classList.contains("nav-link") || e.target.parentElement.classList.contains("nav-link")) {
      e.preventDefault();
      
      // Get the href attribute
      const link = e.target.classList.contains("nav-link") ? e.target : e.target.parentElement;
      const href = link.getAttribute("href");
      
      // Set active class
      document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
      });
      link.classList.add("active");
      
      // Handle navigation
      if (href === "/") {
        renderHomePage();
      } else {
        const category = href.replace(/^\//, ""); // Remove leading slash
        if (["athletics", "academics", "hobbies", "lifestyle"].includes(category.toLowerCase())) {
          showCategoryPage(category);
        }
      }
    }
  });
  
  // Subscribe button functionality
  const subscribeButtons = document.querySelectorAll(".subscribe-btn");
  
  subscribeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Create modal overlay
      const overlay = document.createElement("div");
      overlay.className = "modal-overlay";
      
      // Create modal content
      const modal = document.createElement("div");
      modal.className = "modal";
      
      // Create modal header
      const modalHeader = document.createElement("div");
      modalHeader.className = "modal-header";
      modalHeader.innerHTML = '<h3>Subscribe to Fin\'s Blog</h3><button class="close-btn">&times;</button>';
      
      // Create modal body
      const modalBody = document.createElement("div");
      modalBody.className = "modal-body";
      modalBody.innerHTML = `
        <p>Stay updated with the latest posts from Fin's Blog.</p>
        <form id="subscribe-form">
          <input type="email" placeholder="Your email address" required>
          <button type="submit" class="subscribe-btn">Subscribe</button>
        </form>
      `;
      
      // Append modal parts
      modal.appendChild(modalHeader);
      modal.appendChild(modalBody);
      overlay.appendChild(modal);
      document.body.appendChild(overlay);
      
      // Add styles for modal
      const style = document.createElement("style");
      style.textContent = `
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .modal {
          background-color: white;
          padding: 30px;
          border-radius: 5px;
          max-width: 500px;
          width: 90%;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
        
        .modal-body p {
          margin-bottom: 20px;
        }
        
        #subscribe-form {
          display: flex;
          flex-direction: column;
        }
        
        #subscribe-form input {
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
        }
        
        #subscribe-form button {
          align-self: flex-start;
        }
      `;
      document.head.appendChild(style);
      
      // Close modal functionality
      const closeBtn = document.querySelector(".close-btn");
      closeBtn.addEventListener("click", () => {
        document.body.removeChild(overlay);
        document.head.removeChild(style);
      });
      
      // Close modal when clicking outside
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          document.body.removeChild(overlay);
          document.head.removeChild(style);
        }
      });
      
      // Form submission
      const form = document.getElementById("subscribe-form");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your server
        console.log("Subscription email:", email);
        
        // Show success message
        modalBody.innerHTML = "<p>Thank you for subscribing! You will receive updates from Fin's Blog.</p>";
        
        // Close modal after 3 seconds
        setTimeout(() => {
          document.body.removeChild(overlay);
          document.head.removeChild(style);
        }, 3000);
      });
    });
  });
}
