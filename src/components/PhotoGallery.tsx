
import '../CSS/PhotoGallery.css';

const photos = [
  {
    url: './public/p16.jpg',
    caption: 'A Stunning performance – TechFest',
  },
  {
    url: './public/p17.jpg',
    caption: 'Armaan Malik Concert – Mood Indigo',
  },
  {
    url: './public/p19.jpg',
    caption: 'Kabir Cafe Band at Mood Indigo',
  },
  {
    url: './public/p2.jpg',
    caption: 'EDM Night – Techfest',
  },
  {
    url: './public/p30.jpg',
    caption: 'Sportlights',
  },
  {
    url: './public/p31.jpg',
    caption: 'Mood Indigo',
  },
  {
    url: './public/p1.jpg',
    caption: 'Bombay Skyline',
  },
  {
    url: './public/p44.jpg',
    caption: 'Sahyadri',
  },
  {
    url: './public/p42.jpg',
    caption: 'Ellipse - Kota',
  },
  {
    url: './public/p39.jpg',
    caption: 'Juhu Beach',
  },
  {
    url: './public/p46.jpg',
    caption: 'Sea meets the sky',
  },
  {
    url: './public/p47.jpg',
    caption: 'Mahabaleshwar',
  },
];

const photoGallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-heading">photography</h2>
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

export default photoGallery;
