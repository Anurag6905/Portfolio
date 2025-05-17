
import '../CSS/PhotoGallery2.css';

const photos = [
  {
    url: '/p3.jpg',
    caption: 'A Beautiful coast – Konkan',
  },
  {
    url: '/p4.jpg',
    caption: 'Rainy road',
  },
  {
    url: '/p5.jpg',
    caption: 'Damp Road',
  },
  {
    url: '/p6.jpg',
    caption: 'Rainy Reflection',
  },
  {
    url: '/p8.jpg',
    caption: 'Falling Drops',
  },
  {
    url: '/p10.jpg',
    caption: 'Greenish path',
  },
  {
    url: '/p11.jpg',
    caption: 'Diwali Decor',
  },
  {
    url: '/p12.jpg',
    caption: 'Silent path',
  },
  {
    url: '/p13.jpg',
    caption: 'Waterfall - Imagica',
  },
  {
    url: '/p14.jpg',
    caption: 'Marine Drive',
  },
  {
    url: '/p15.jpg',
    caption: 'Bombay Stock Exchange',
  },
  {
    url: '/p18.jpg',
    caption: 'TTMM - E-Summit',
  },
  {
    url: '/p20.jpg',
    caption: 'Concert - Mood Indigo',
  },
  {
    url: '/p21.jpg',
    caption: 'firefly lighting',
  },
  {
    url: '/p22.jpg',
    caption: 'Inception',
  },
  {
    url: '/p23.jpg',
    caption: 'Beach Cricket',
  },
  {
    url: '/p24.jpg',
    caption: 'Sunset',
  },
  {
    url: '/p25.jpg',
    caption: 'Kasheli Beach',
  },
  {
    url: '/p26.jpg',
    caption: 'Hometown',
  },
  {
    url: '/p27.jpg',
    caption: 'Vasai-Virar',
  },
  {
    url: '/p28.jpg',
    caption: 'Hostel Road',
  },
  {
    url: '/p29.jpg',
    caption: 'Creativity at its peak',
  },
  {
    url: '/p32.jpg',
    caption: 'Lumma Cafe',
  },
  {
    url: '/p33.jpg',
    caption: 'peace',
  },
  {
    url: '/p35.jpg',
    caption: 'Contrast',
  },
  {
    url: '/p36.jpg',
    caption: 'Tatva Restraunt',
  },
  {
    url: '/p37.jpg',
    caption: 'Chrismas Tree',
  },
  {
    url: '/p38.jpg',
    caption: 'Insti Road',
  },
  {
    url: '/p41.jpg',
    caption: 'Riverfront - Kota',
  },
  {
    url: '/p43.jpg',
    caption: 'Strawbeery - panchgani',
  },
  {
    url: '/p45.jpg',
    caption: '7 Wonders -Kota',
  },
];

const photoGallery2 = () => {
  return (
    <section className="gallery-section2">
      {/* <h2 className="gallery-heading2">photography Gallery</h2> */}
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

export default photoGallery2;