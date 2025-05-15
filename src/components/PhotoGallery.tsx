
import '../CSS/PhotoGallery.css';

const photos = [
  {
    src: '/public/P16.jpg',
    caption: 'A Stunning Performance – TechFest',
  },
  {
    src: '/public/P17.jpg',
    caption: 'Armaan Malik Concert – Mood Indigo',
  },
  {
    src: '/public/P19.jpg',
    caption: 'Kabir Cafe Band at Mood Indigo',
  },
  {
    src: '/public/P2.jpg',
    caption: 'EDM Night – Techfest',
  },
  {
    src: '/public/P30.jpg',
    caption: 'Sportlights',
  },
  {
    src: '/public/P31.jpg',
    caption: 'Mood Indigo',
  },
  {
    src: '/public/P1.jpg',
    caption: 'Bombay Skyline',
  },
  {
    src: '/public/P44.jpg',
    caption: 'Sahyadri',
  },
  {
    src: '/public/P42.jpg',
    caption: 'Ellipse - Kota',
  },
  {
    src: '/public/P39.jpg',
    caption: 'Juhu Beach',
  },
  {
    src: '/public/P46.jpg',
    caption: 'Sea meets the sky',
  },
  {
    src: '/public/P47.jpg',
    caption: 'Mahabaleshwar',
  },
];

const PhotoGallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-heading">Photography</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div className="gallery-card" key={index}>
            <img src={photo.src} className="gallery-image" />
            <p className="gallery-caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
