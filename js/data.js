// Blog data store
const blogData = [
  {
    id: "howards",
    title: "SMS Cafe Ordering App",
    slug: "howards",
    category: "ACADEMICS",
    date: new Date("2025-04-12"),
    image: "static/img/howards.png",
    excerpt: "Currently working on a project where you order a coffee by texting a cafe instead of ordering online.",
    content: `
      <p></p>

    `,
    isFeatured: true,
    tags: ["coding", "app", "development"],
  },
  {
    id: "tc-10k",
    title: "TC10k - My First Offical Sub 40 10k!",
    slug: "tc-10k",
    category: "ATHLETICS",
    date: new Date("2025-04-27"),
    image: "static/img/tc10k4.png",
    excerpt: "36th Annual Times Colonist 10k - My 2nd time running the TC10k, and my first time going sub 40 officially with a time of 39:19",
    content: `
        <p></p>
    `,
    isFeatured: false,
    tags: ["running", "fitness", "tc10k", "race"],
  },
  {
    id: "phtography",
    title: "Recent Phtography Adventures",
    slug: "photography",
    category: "HOBBIES",
    date: new Date("2025-04-30"),
    image: "static/img/highjump.png",
    excerpt: "View a showcase of my recent photos as well as the stories behind them.",
    content: `
        <p><img src="static/img/polevault.png" alt="Photo 1" width="500px"></p>
    `,
    isFeatured: false,
    tags: ["photography", "track", "hobbies", "camera"],
  },
  {
    id: "track",
    title: "2025 Track and Field - Updates",
    slug: "track",
    category: "ATHLETICS",
    date: new Date("2025-04-02"),
    image: "static/img/track.png",
    excerpt: "Updates and results for the 2025 High School Track and Field season!",
    content: `
        <p></p>
    `,
    isFeatured: false,
    tags: ["track and field", "sports", "race"],
  },
  
]

// Function to format dates
function formatDate(date) {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
  return `${months[date.getMonth()]} ${date.getDate()}`
}

// Function to get blogs by category
function getBlogsByCategory(category) {
  if (category === "all") {
    return blogData
  }
  return blogData.filter((blog) => blog.category.toLowerCase() === category.toLowerCase())
}

// Function to get featured blogs
function getFeaturedBlogs() {
  return blogData.filter((blog) => blog.isFeatured)
}

// Function to get recent blogs sorted by date
function getRecentBlogs(limit = 6) {
    return [...blogData].sort((a, b) => b.date - a.date).slice(0, limit); // Sort from earliest to latest
}

// Function to get a blog by slug
function getBlogBySlug(slug) {
  return blogData.find((blog) => blog.slug === slug)
}
