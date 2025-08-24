
import "../CSS/Blog.css";

const blogs = [
  {
    title: "Understanding React Hooks",
    date: "August 12, 2025",
    excerpt: "An introduction to React Hooks and how they simplify state management and effects in functional components.",
    link: "/blog/react-hooks",
  },
  {
    title: "Building Responsive Layouts",
    date: "July 28, 2025",
    excerpt: "How to create fluid and adaptive designs using modern CSS techniques and media queries.",
    link: "/blog/responsive-layouts",
  },
  {
    title: "JavaScript Async/Await Explained",
    date: "June 15, 2025",
    excerpt: "A deep dive into asynchronous programming in JavaScript using async/await syntax for cleaner code.",
    link: "/blog/js-async-await",
  },
  // Add more blog posts here
];

function Blog() {
  return (
    <section className="blog-section">
      <h1 className="blog-title">My Blog</h1>
      <div className="blog-grid">
        {blogs.map((post, idx) => (
          <article className="blog-card" key={idx}>
            <h2 className="blog-post-title">{post.title}</h2>
            <time className="blog-post-date">{post.date}</time>
            <p className="blog-post-excerpt">{post.excerpt}</p>
            <a href={post.link} className="read-more-btn" aria-label={`Read more about ${post.title}`}>
              Read More
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;

