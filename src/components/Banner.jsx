import React from 'react';
import { RiPenNibLine, RiLayoutMasonryLine, RiCheckboxLine } from 'react-icons/ri';

function Banner() {
  return (
    <section className="section__container banner__container">
      <div className="banner__card">
        <span><RiPenNibLine size={24} /></span>
        <div>
          <h4>Design</h4>
          <p>
            Our designers and content creators are committed to delivering
            engaging digital content.
          </p>
        </div>
      </div>
      <div className="banner__card">
        <span><RiLayoutMasonryLine size={24} /></span>
        <div>
          <h4>Development</h4>
          <p>
            I stay at forefront of technological advancements, ensuring your
            digital presence performant.
          </p>
        </div>
      </div>
      <div className="banner__card">
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