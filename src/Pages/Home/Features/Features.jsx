import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featureImage from '../../../assets/home/featured.jpg'
import './Features.css'
const Features = () => {
    return (
        <div className='feature-item text-white bg-fixed pt-8 my-20'>
            <SectionTitle subHeading={'Check it out'} heading={'Featured Item'}></SectionTitle>
          <div className='md:flex justify-center items-center pb-20 pt-12 px-36 '>
              <div>
                <img src={featureImage} alt="" />
            </div>
            <div className='md:ml-10'>
                 <p>Aug 20,2029</p>
                 <p className='uppercase'>Where can i get some</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                 <button className="btn btn-outline border-0 border-b-3">Order Now</button>
            </div>
          </div>
        </div>
    );
};

export default Features;