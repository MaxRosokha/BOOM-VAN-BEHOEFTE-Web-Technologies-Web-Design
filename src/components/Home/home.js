import React from 'react';
import slide from '../../image/Slide.png';
import slider from '../../image/Slider.png';


const MainContent = () => (
    <main>
        <section className="hero-section">
            <div className="text-content">
                <h1 className="outline-text">BOOM VAN DEHOEFTE</h1>
                <p>
                    Praesent scelerisque justo vitae neque consectetur aliquam.
                    Sed facilisis nec enim at porta. Suspendisse gravida convallis massa,
                    at interdum dui hendrerit in. Nullam venenatis lorem non massa vehicula,
                    vitae commodo nisi tempus.                 </p>
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
    </main>
);


const App = () => (
    <div className="App">
        <MainContent/>
    </div>
);

export default App;
