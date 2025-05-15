
import '../CSS/PhotoGallery2.css';

const photos = [
  {
    src: '/public/P3.jpg',
    caption: 'A Beautiful coast – Konkan',
  },
  {
    src: '/public/P4.jpg',
    caption: 'Rainy road',
  },
  {
    src: '/public/P5.jpg',
    caption: 'Damp Road',
  },
  {
    src: '/public/P6.jpg',
    caption: 'Rainy Reflection',
  },
  {
    src: '/public/P8.jpg',
    caption: 'Falling Drops',
  },
  {
    src: '/public/P10.jpg',
    caption: 'Greenish path',
  },
  {
    src: '/public/P11.jpg',
    caption: 'Diwali Decor',
  },
  {
    src: '/public/P12.jpg',
    caption: 'Silent Path',
  },
  {
    src: '/public/P13.jpg',
    caption: 'Waterfall - Imagica',
  },
  {
    src: '/public/P14.jpg',
    caption: 'Marine Drive',
  },
  {
    src: '/public/P15.jpg',
    caption: 'Bombay Stock Exchange',
  },
  {
    src: '/public/P18.jpg',
    caption: 'TTMM - E-Summit',
  },
  {
    src: '/public/P20.jpg',
    caption: 'Concert - Mood Indigo',
  },
  {
    src: '/public/P21.jpg',
    caption: 'firefly lighting',
  },
  {
    src: '/public/P22.jpg',
    caption: 'Inception',
  },
  {
    src: '/public/P23.jpg',
    caption: 'Beach Cricket',
  },
  {
    src: '/public/P24.jpg',
    caption: 'Sunset',
  },
  {
    src: '/public/P25.jpg',
    caption: 'Kasheli Beach',
  },
  {
    src: '/public/P26.jpg',
    caption: 'Hometown',
  },
  {
    src: '/public/P27.jpg',
    caption: 'Vasai-Virar',
  },
  {
    src: '/public/P28.jpg',
    caption: 'Hostel Road',
  },
  {
    src: '/public/P29.jpg',
    caption: 'Creativity at its peak',
  },
  {
    src: '/public/P32.jpg',
    caption: 'Lumma Cafe',
  },
  {
    src: '/public/P33.jpg',
    caption: 'Peace',
  },
  {
    src: '/public/P35.jpg',
    caption: 'Contrast',
  },
  {
    src: '/public/P36.jpg',
    caption: 'Tatva Restraunt',
  },
  {
    src: '/public/P37.jpg',
    caption: 'Chrismas Tree',
  },
  {
    src: '/public/P38.jpg',
    caption: 'Insti Road',
  },
  {
    src: '/public/P41.jpg',
    caption: 'Riverfront - Kota',
  },
  {
    src: '/public/P43.jpg',
    caption: 'Strawbeery - Panchgani',
  },
  {
    src: '/public/P45.jpg',
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
            <img src={photo.src} className="gallery-image2" />
            <p className="gallery-caption2">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery2;