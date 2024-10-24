import React from 'react';
import slide from '../../image/Slide.png';
import slider from '../../image/Slider.png';
import colection1 from '../../image/colection1.png';
import colection2 from '../../image/colection2.png';

const MainContent = () => (
  <main>
      <section className="hero-section">
          <div className="text-content">
              <h1 className="outline-text">BOOM VAN DEHOEFTE</h1>
              <p>
                  Praesent scelerisque justo vitae neque consectetur aliquam.
                  Sed facilisis nec enim at porta. Suspendisse gravida convallis massa,
                  at interdum dui hendrerit in. Nullam venenatis lorem non massa vehicula,
                  vitae commodo nisi tempus. </p>
              <button className="btn-primary">More information</button>
          </div>
          <div className="images-wrapper">
              <div className="circle-image">
                  <img src={slide} alt="Main fashion image" />
              </div>
              <div className="small-circle">
                  <img src={slider} alt="Additional image" />
              </div>
          </div>
      </section>

      <section className="collection-section">
          <div className="collection-content">
              <h2 className="new-collection-title">NEW COLLECTION</h2>
              <p className="collection-season">Summer 2024</p>
              <button className="btn-secondary">Go To Shop ⟶</button> {/* Використання нового класу */}
              <div className="slider-arrows">
                  <button className="arrow-btn left-arrow">←</button>
                  <button className="arrow-btn right-arrow">→</button>
              </div>
          </div>

          <div className="image-gallery">
              <img src={colection1} alt="Fashion item 1" className="gallery-image" />
              <img src={colection2} alt="Fashion item 2" className="gallery-image" />
          </div>
      </section>
  </main>
);

export default MainContent;
