
import '../CSS/PhotoGallery.css';

const photos = [
  {
    url: '/p16.jpg',
    caption: 'A Stunning performance – TechFest',
  },
  {
    url: '/p17.jpg',
    caption: 'Armaan Malik Concert – Mood Indigo',
  },
  {
    url: '/p19.jpg',
    caption: 'Kabir Cafe Band at Mood Indigo',
  },
  {
    url: '/p2.jpg',
    caption: 'EDM Night – Techfest',
  },
  {
    url: '/p30.jpg',
    caption: 'Sportlights',
  },
  {
    url: '/p31.jpg',
    caption: 'Mood Indigo',
  },
  {
    url: '/p1.jpg',
    caption: 'Bombay Skyline',
  },
  {
    url: '/p44.jpg',
    caption: 'Sahyadri',
  },
  {
    url: '/p42.jpg',
    caption: 'Ellipse - Kota',
  },
  {
    url: '/p39.jpg',
    caption: 'Juhu Beach',
  },
  {
    url: '/p46.jpg',
    caption: 'Sea meets the sky',
  },
  {
    url: '/p47.jpg',
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
