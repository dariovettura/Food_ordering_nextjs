import React from 'react';
import Dnt_button from '../buttons/Dnt_button';

function Hero(props) {
    return (
        <React.Fragment>
        <div className="containers">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <defs>
            <pattern
              id="imgpattern"
              x="0"
              y="0"
              width="1"
              height="1"
              viewBox="0 0 1024 576"
              preserveAspectRatio="xMidYMid slice"
            >
              <image
                width="1024"
                height="576"
                xlinkHref="confettibg-100.jpg"
              />
            </pattern>
          </defs>

          <path
            fill="url(#imgpattern)"
            stroke="#fafafa"
            strokeWidth="1"
            d="M0,100 C150,500 350,0 500,100 L500,00 L0,0 Z"
          />
        </svg>
      </div>

      <div
        style={{ position: "relative" }}
        className="hero  min-h-40vh md:min-h-80vh grid grid-cols-1 md:grid-cols-12 place-content-center "
      >
        <div className="md:col-start-2 md:col-span-5   order-last md:order-first place-content-center   grid grid-cols-1 md:-mt-0 mt-24">
          {" "}
          <h1 className="md:text-7xl text-center md:text-left text-4xl font-black md:pink marro">
            Le migliori<br></br>Donuts di Milano
          </h1>
          <Dnt_button
            text="Ordina ora"
            classes="mt-5 button_to_menu h-12 flex justify-center md:justify-start   w-full"
            fontEdit="text-lg md:text-xl font-bold"
            btn_oro="btn_don_oro  content-center"
            btn_icon=" btn-icon"
          ></Dnt_button>
        </div>
        <div className="h-3/6 md:h-full hidden  md:flex justify-center items-center md:col-span-6">
          <img
            className="object-contain h-full md:h-3/6"
            src="/piccantes@2x-8.png"
            alt="piccante"
          />
        </div>
      </div>
      </React.Fragment>
    );
}

export default Hero;