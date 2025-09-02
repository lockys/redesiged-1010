import React from 'react';
import photo1 from '../../assets/photo1.svg';
import photo2 from '../../assets/photo2.svg';
import photo3 from '../../assets/photo3.svg';

// Horizontal scrollable photo gallery
const images = [
  { src: photo1, alt: '慶典照片一', width: 800, height: 600 },
  { src: photo2, alt: '慶典照片二', width: 800, height: 600 },
  { src: photo3, alt: '慶典照片三', width: 800, height: 600 }
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2><span className="accent">｜</span>相片錦集</h2>
        <div className="scroll" tabIndex="0" data-reveal>
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
