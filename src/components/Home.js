import React from 'react';
import Banner from './Banner';
import Card from "./Card";
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
        <Banner />
        <div className='home_section'>
          <Card 
            src="https://a0.muscache.com/im/pictures/miso/Hosting-1249782926113604395/original/c68432ce-519b-46fc-afa2-35987cb7a722.jpeg?im_w=720&im_format=avif"
            title="Islands Experiences"
            description="Unique activities we can do together, led by world of hosts."
          />

          <Card 
            src="https://a0.muscache.com/im/pictures/miso/Hosting-1050570021780851760/original/12ac9d27-1212-4b85-9f2e-fab4da4c9c7a.jpeg?im_w=720&im_format=avif"
            title="Farm stays"
            description="Spaces that are more than just a place to sleep."
          />

          <Card 
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA5NTQxNDc4NDM3MTkzODU2NQ%3D%3D/original/9ce4f044-3b5b-4fc0-9ec0-144d62669dc0.jpeg?im_w=720&im_format=avif"
            title="Unique homes"
            description="Home away from home."
          />
        </div>

        <div className='home_section'>
          <Card 
            src="https://a0.muscache.com/im/pictures/miso/Hosting-758725/original/78aadeef-7d1e-43e6-a81f-59ffa6f4259b.jpeg?im_w=720&im_format=avif"
            title="Online Experiences"
            description="Unique activities we can do together, led by world of hosts."
            price="R7500/night"          />

          <Card 
            src="https://a0.muscache.com/im/pictures/7aaa1a8f-c3a3-466c-9ac5-ceca1f915e5d.jpg?im_w=720&im_format=avif"
            title="Unique stays"
            description="Spaces that are more than just a place to sleep."
            price="R5000/night"
          />

          <Card 
            src="https://a0.muscache.com/im/pictures/ae37fdf0-440e-45b0-aae3-8c93a40d547f.jpg?im_w=720&im_format=avif"
            title="Entire homes"
            description="Home away from home."
            price="R2000/night"
          />
        </div>
    </div>
  )
}

export default Home