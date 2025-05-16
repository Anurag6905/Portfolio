
import '../CSS/PhotoGallery2.css';

const photos = [
  {
    url: '/public/P3.jpg',
    caption: 'A Beautiful coast – Konkan',
  },
  {
    url: '/public/P4.jpg',
    caption: 'Rainy road',
  },
  {
    url: '/public/P5.jpg',
    caption: 'Damp Road',
  },
  {
    url: '/public/P6.jpg',
    caption: 'Rainy Reflection',
  },
  {
    url: '/public/P8.jpg',
    caption: 'Falling Drops',
  },
  {
    url: '/public/P10.jpg',
    caption: 'Greenish path',
  },
  {
    url: '/public/P11.jpg',
    caption: 'Diwali Decor',
  },
  {
    url: '/public/P12.jpg',
    caption: 'Silent Path',
  },
  {
    url: '/public/P13.jpg',
    caption: 'Waterfall - Imagica',
  },
  {
    url: '/public/P14.jpg',
    caption: 'Marine Drive',
  },
  {
    url: '/public/P15.jpg',
    caption: 'Bombay Stock Exchange',
  },
  {
    url: '/public/P18.jpg',
    caption: 'TTMM - E-Summit',
  },
  {
    url: '/public/P20.jpg',
    caption: 'Concert - Mood Indigo',
  },
  {
    url: '/public/P21.jpg',
    caption: 'firefly lighting',
  },
  {
    url: '/public/P22.jpg',
    caption: 'Inception',
  },
  {
    url: '/public/P23.jpg',
    caption: 'Beach Cricket',
  },
  {
    url: '/public/P24.jpg',
    caption: 'Sunset',
  },
  {
    url: '/public/P25.jpg',
    caption: 'Kasheli Beach',
  },
  {
    url: '/public/P26.jpg',
    caption: 'Hometown',
  },
  {
    url: '/public/P27.jpg',
    caption: 'Vasai-Virar',
  },
  {
    url: '/public/P28.jpg',
    caption: 'Hostel Road',
  },
  {
    url: '/public/P29.jpg',
    caption: 'Creativity at its peak',
  },
  {
    url: '/public/P32.jpg',
    caption: 'Lumma Cafe',
  },
  {
    url: '/public/P33.jpg',
    caption: 'Peace',
  },
  {
    url: '/public/P35.jpg',
    caption: 'Contrast',
  },
  {
    url: '/public/P36.jpg',
    caption: 'Tatva Restraunt',
  },
  {
    url: '/public/P37.jpg',
    caption: 'Chrismas Tree',
  },
  {
    url: '/public/P38.jpg',
    caption: 'Insti Road',
  },
  {
    url: '/public/P41.jpg',
    caption: 'Riverfront - Kota',
  },
  {
    url: '/public/P43.jpg',
    caption: 'Strawbeery - Panchgani',
  },
  {
    url: '/public/P45.jpg',
    caption: '7 Wonders -Kota',
  },
];

const PhotoGallery2 = () => {
  return (
    <section className="gallery-section2">
      {/* <h2 className="gallery-heading2">Photography Gallery</h2> */}
      <div className="gallery-grid2">
        {photos.map((photo, index) => (
          <div className="gallery-card2" key={index}>
            <img src={photo.url} className="gallery-image2" />
            <p className="gallery-caption2">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery2;