import React from 'react';
import { RiPenNibLine, RiLayoutMasonryLine, RiCheckboxLine } from 'react-icons/ri';

function Banner() {
  return (
    <section className="section__container banner__container">
      <div className="banner__card circle-icon">
        <span><RiPenNibLine size={24} /></span>
        <div>
          <h4>Design</h4>
          <p>
            My focus is on delivering engaging and impactful digital content.
          </p>
        </div>
      </div>
      <div className="banner__card circle-icon">
        <span><RiLayoutMasonryLine size={24} /></span>
        <div>
          <h4>Development</h4>
          <p>
            I stay at forefront of technological advancements, ensuring your
            digital presence performant.
          </p>
        </div>
      </div>
      <div className="banner__card circle-icon">
        <span><RiCheckboxLine size={24} /></span>
        <div>
          <h4>Testing & QA</h4>
          <p>
            I understand that your digital presence should not just look good,
            it should deliver traffic & engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner; 