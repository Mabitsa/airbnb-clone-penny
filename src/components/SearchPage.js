import React from 'react'
import Button from '@mui/material/Button';
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className='searchPage'>
         <div className='searchPage_info'>
            <p>62 stays . 26 September to 30 September . 2 guest</p>
            <h1>Stays nearby</h1>
            <Button variant='outlined'>Cancellation Flexibility</Button>
            <Button variant='outlined'>Type of place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and beds</Button>
            <Button variant='outlined'>More filters</Button>
         </div>
         <SearchResult 
            img="https://a0.muscache.com/im/pictures/miso/Hosting-1275109301584784801/original/4f28c6e4-9505-4890-87a6-32b983414045.jpeg?im_w=720&im_format=avif" 
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
            star={4.3}
            price="R7000 / night"
            total="R28 000 total"
         />
         <SearchResult 
            img="https://a0.muscache.com/im/pictures/miso/Hosting-30524488/original/03eba5ec-16b9-4e56-ba52-c7a019222a16.jpeg?im_w=720&im_format=avif" 
            location="Private room with ocean views in Langebaan"
            title="Stay at this Private Beach House"
            description="2 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
            star={4.8}
            price="R2000 / night"
            total="R10 000 total"
         />

          <SearchResult 
            img="https://a0.muscache.com/im/pictures/228e9151-97c8-4e44-83fc-52993da09761.jpg?im_w=720&im_format=avif" 
            location="Private room with ocean views in Langebaan"
            title="Stay at this Private Beach House"
            description="2 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
            star={4.7}
            price="R2000 / night"
            total="R10 000 total"
         />

          <SearchResult 
            img="https://a0.muscache.com/im/pictures/miso/Hosting-30524488/original/03eba5ec-16b9-4e56-ba52-c7a019222a16.jpeg?im_w=720&im_format=avif" 
            location="Private room with ocean views in Langebaan"
            title="Stay at this Private Beach House"
            description="2 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
            star={4.5}
            price="R2000 / night"
            total="R10 000 total"
         />

          <SearchResult 
            img="https://a0.muscache.com/im/pictures/miso/Hosting-1253445943519139032/original/6289b62b-9bd1-4353-8690-3d697ed65a8c.jpeg?im_w=720&im_format=avif" 
            location="Private accommodation stay in the bush"
            title="Stay at this Private Beach House"
            description="2 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
            star={4.4}
            price="R2000 / night"
            total="R5000 total"
         />
    </div>
  );
};

export default SearchPage;