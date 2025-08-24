
import "../CSS/Gallery.css";

const photos = [
  "/gallery/photo1.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
  "/gallery/photo5.jpg",
  "/gallery/photo6.jpg",
  // Add all your photo paths here
];

function Gallery() {
  return (
    <section className="gallery-section">
      <h1 className="gallery-title">My Photography Portfolio</h1>
      <div className="gallery-grid">
        {photos.map((src, idx) => (
          <div className="gallery-item" key={idx}>
            <img src={src} alt={`Photography ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

