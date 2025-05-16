
import '../CSS/PhotoGallery.css';

const photos = [
  {
    url: './public/P16.jpg',
    caption: 'A Stunning Performance – TechFest',
  },
  {
    url: './public/P17.jpg',
    caption: 'Armaan Malik Concert – Mood Indigo',
  },
  {
    url: './public/P19.jpg',
    caption: 'Kabir Cafe Band at Mood Indigo',
  },
  {
    url: './public/P2.jpg',
    caption: 'EDM Night – Techfest',
  },
  {
    url: './public/P30.jpg',
    caption: 'Sportlights',
  },
  {
    url: './public/P31.jpg',
    caption: 'Mood Indigo',
  },
  {
    url: './public/P1.jpg',
    caption: 'Bombay Skyline',
  },
  {
    url: './public/P44.jpg',
    caption: 'Sahyadri',
  },
  {
    url: './public/P42.jpg',
    caption: 'Ellipse - Kota',
  },
  {
    url: './public/P39.jpg',
    caption: 'Juhu Beach',
  },
  {
    url: './public/P46.jpg',
    caption: 'Sea meets the sky',
  },
  {
    url: './public/P47.jpg',
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
            <img src={photo.url} className="gallery-image"/>
            <p className="gallery-caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
