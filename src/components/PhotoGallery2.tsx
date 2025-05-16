
import '../CSS/photoGallery2.css';

const photos = [
  {
    url: './public/p3.jpg',
    caption: 'A Beautiful coast – Konkan',
  },
  {
    url: './public/p4.jpg',
    caption: 'Rainy road',
  },
  {
    url: './public/p5.jpg',
    caption: 'Damp Road',
  },
  {
    url: './public/p6.jpg',
    caption: 'Rainy Reflection',
  },
  {
    url: './public/p8.jpg',
    caption: 'Falling Drops',
  },
  {
    url: './public/p10.jpg',
    caption: 'Greenish path',
  },
  {
    url: './public/p11.jpg',
    caption: 'Diwali Decor',
  },
  {
    url: './public/p12.jpg',
    caption: 'Silent path',
  },
  {
    url: './public/p13.jpg',
    caption: 'Waterfall - Imagica',
  },
  {
    url: '/public/p14.jpg',
    caption: 'Marine Drive',
  },
  {
    url: './public/p15.jpg',
    caption: 'Bombay Stock Exchange',
  },
  {
    url: './public/p18.jpg',
    caption: 'TTMM - E-Summit',
  },
  {
    url: './public/p20.jpg',
    caption: 'Concert - Mood Indigo',
  },
  {
    url: './public/p21.jpg',
    caption: 'firefly lighting',
  },
  {
    url: './public/p22.jpg',
    caption: 'Inception',
  },
  {
    url: './public/p23.jpg',
    caption: 'Beach Cricket',
  },
  {
    url: './public/p24.jpg',
    caption: 'Sunset',
  },
  {
    url: './public/p25.jpg',
    caption: 'Kasheli Beach',
  },
  {
    url: './public/p26.jpg',
    caption: 'Hometown',
  },
  {
    url: './public/p27.jpg',
    caption: 'Vasai-Virar',
  },
  {
    url: './public/p28.jpg',
    caption: 'Hostel Road',
  },
  {
    url: './public/p29.jpg',
    caption: 'Creativity at its peak',
  },
  {
    url: './public/p32.jpg',
    caption: 'Lumma Cafe',
  },
  {
    url: './public/p33.jpg',
    caption: 'peace',
  },
  {
    url: './public/p35.jpg',
    caption: 'Contrast',
  },
  {
    url: './public/p36.jpg',
    caption: 'Tatva Restraunt',
  },
  {
    url: './public/p37.jpg',
    caption: 'Chrismas Tree',
  },
  {
    url: './public/p38.jpg',
    caption: 'Insti Road',
  },
  {
    url: './public/p41.jpg',
    caption: 'Riverfront - Kota',
  },
  {
    url: './public/p43.jpg',
    caption: 'Strawbeery - panchgani',
  },
  {
    url: './public/p45.jpg',
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