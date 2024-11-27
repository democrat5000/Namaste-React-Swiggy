import {BANNER_URL} from "../utils/constants";

// =============STYLING=============

const masterContainer = "w-full flex justify-start items-center border-b-2 border-b-gray-300 bg-ltorange";

const textContainer = "w-6/12 flex justify-center items-center";

const bannerText = "ml-10 p-8 font-light font-mono leading-10 text-4xl tracking-tight";

const imageContainer = "banner-image w-6/12 flex justify-start";

// =============COMPONENT==============

const Banner = ()=> {
  return (
    <div className={masterContainer}>

      <div className={textContainer}>
        <h1 className={bannerText}>Order Food Online in Bangalore</h1>  
      </div>

      <div className={imageContainer}>
        <img src={BANNER_URL} className="w-4/6" alt="Banner Photo" />
      </div>

    </div>
  );
}

export default Banner;