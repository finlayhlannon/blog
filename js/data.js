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
      <p>For the final term of AP Computer Science, our class had an ambitious idea. We were going to build an app that takes in text messages from customers and automatically places their orders at our school’s cafe.</p>
      <p>This project involves significant technical challenges, such as handling SMS messages, using AI to turn conversations into structured orders, managing user accounts, and much more. It was exciting, and for a while, our class was fully invested in bringing the idea to life.</p>
      <p>But as AP exams approached, priorities shifted. Stacks of code were replaced by stacks of notes, and slowly, the energy around the project started to fade.</p>
      <p>But not for me.</p> 
      <p>Alongside a few other dedicated classmates, I continued working—both during school hours and outside of them—to keep this project alive. We refused to let the idea die with the shift in class focus. Through persistence and a lot of trial and error, we’ve made incredible progress. While there are still hundreds of bugs to squash, dozens of features to build, and more than a few seemingly impossible problems to solve, we’re pushing through. We're in the final sprint.</p>
      <p>Finishing this project will be a major breakthrough. From a personal standpoint, this full-stack, hands-on experience is one of the most ambitious development projects I’ve taken on. The combination of deep technical problem-solving and the need for strong collaboration has pushed me to grow as both a developer and a teammate. I know this will leave me better prepared for future, more complex projects.</p>
      <p>Looking at the community impact, completing this app could be a game-changer. I’ve experienced firsthand how frustrating the cafe lines can be. With a working SMS ordering system, not only will wait times for users drop significantly, but so will the lines for everyone else. The cafe staff will benefit, too—receiving clear, organized orders and being able to serve customers more efficiently.</p>
      <p>We’re close. And we’re not giving up.</p>
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
        <p>In the summer of 2023, I ran my first ever 10k.</p>
        <p>With a time of 47:something, I was hooked. I thought I'd finish in well over an hour and I'd want to sleep for the next 3 days, but I was more alive than ever! I was so energized and ready to run 3 more right then and there.</p>
        <p>After that, I started to run more and more. I would wake up before school and go, go right after school, go in between sports, whenever I could find time. I even ran in the 30 degree mornings during our vacation in mexico.</p>
        <p>Once I heard about the Times Colonist 10k in 2024, I knew I had to run it. So I signed up immediately.</p>
        <p>That race was, at the time, the fastest 10k I had run. I came in at 41:34, after never even breaking 43:00 before. I was possessed by the energy of the whole thing, and I signed up for the next year right then and there.</p>
        <p>That year was this year.</p>
        <p>I knew I could break 40 minutes. I had already broken 40 in training, and I knew that the energy of the race would only make me faster.</p>
        <p>I was so set...except for my injuries.</p>
        <p>Being in the middle of my Track and Field season, my shins were splinted like they've never before, my hips were those of a 100 year old grandfather, and my knees were just there to make everything worse.</p>
        <p>HOWEVER!</p>
        <p>Am I a quitter? No.</p>
        <p>Am I going accept that I'm broken give up? Absolutley not.</p>
        <p>Am I going to push through and get that sub 40 I have trained so hard for? One hundred percent yes!</p>
        <p>And that is exactly what I did. I finished with a time of 39:19. It wasn’t easy, and it definitely wasn’t painless—but it was worth every step. Breaking 40 had been my goal for over a year, and now that I’ve done it, I’m more motivated than ever. This is just the beginning.</p>
    `,
    isFeatured: true,
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
        <p><h2>Track and Field Photos</h2></p>
        <p><img src="static/img/polevault.png" alt="Photo 1" width="60%"></p>
        <p>Martin Winnett moments before clearing over 3 meters, placing him first in cities, and securing a new PB.<br></p>
        <p><br></p>
        <p><img src="static/img/track.png" alt="Photo 2" width="60%"></p>
        <p>Adam Zilber gapping everyone else in his 400m heat by at least 50m, placing him first.<br></p>
        <p><br></p>
        <p><img src="static/img/highjump.png" alt="Photo 3" width="60%"></p>
        <p>Tommy Hong clearing an impressive height to come in first place at the first track meet of the season.<br></p>
        <p><br></p>
        <p><img src="static/img/race.jpg" alt="Photo 4" width="60%"></p>
        <p>Tommy Hong starting the 200m race strong in the second furthest lane.</p>
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
  {
    id: "podcast",
    title: "NYT Podcast Contest",
    slug: "podcast",
    category: "ACADEMICS",
    date: new Date("2025-05-12"),
    image: "static/img/podcast.png",
    excerpt: "Find out about what I'm working on for the 2025 New York Times podcast contest!",
    content: `
        <p>If you are not aware, just as I was, New York Times hosts an annual podcast contest for teens aged 13-19, and basically you make a podcast about whatever you want and hope and pray that the judges think its good. I found out about this contest, read exactly that, and signed up immediately.</p>
        <p>May 4th, 2025 - I found out podcast contest. 10 days until the due date.</p>
        <p>May 12, 2025 - I actually started working on it. It is now a mere 2 days until the due date.</p>
        <p>I really should have started earlier...</p>
        <p>But I didn't! And that wont stop me! So welcome to how exactly I am going to create this podcast in 48 hours.</p>
        <p>i haven't started yet...  come back later :)</p>
    `,
    isFeatured: false,
    tags: ["podcast", "contest", "nyt"],
  },
  {
    id: "blog",
    title: "This Blog Website Itself",
    slug: "blog",
    category: "HOBBIES",
    date: new Date("2025-05-09"),
    image: "static/img/blog.png",
    excerpt: "This blog website, the one you're currently on, is actually something I have been working on coding.",
    content: `
        <p></p>
    `,
    isFeatured: false,
    tags: ["development", "coding", "blog"],
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
