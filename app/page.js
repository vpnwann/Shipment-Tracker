"use client"
import React from 'react'
import { useState, useEffect } from 'react';

export default function page() {
  const sampleData = {
    '323238748234': { id: '32312313123', status: 'Raste me Hein', via: 'BlueDart', estimatedDelivery: '2024-06-20', location: 'New Delhi' },
    '324i23i423234': { id: '45613123132', status: 'Anne Wala Hai', estimatedDelivery: '2024-06-15', deliveryDate: '2024-06-10', location: 'Aburoad' },
    '789': { id: '78912313121', status: 'Out for Delivery', estimatedDelivery: '2024-06-15', location: 'Chicago' },
  };
  const [trackingId, setTrackingId] = useState('323238748234');
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const deliveryId = '789';  // The ID you want to render
const deliveryInfo = sampleData[deliveryId];

  const handleInputChange = (event) => {
    setTrackingId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setDetails(null);

    setTimeout(() => {
      const detail = sampleData[trackingId];
      setLoading(false);

      if (detail) {
        setDetails(detail);
        setError(null);
      } else {
        setDetails(null);
        setError('Tracking ID not found.');
      }
    }, 1);
  };
  return (<>
  <nav class="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
    <a class="font-bold text-xl tracking-tight" href="#">Shipment 🚚 Tracker</a>
    <div class="flex items-center">
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Home</a>
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Track</a>
        
    </div>
</nav>
    <div class="flex pt-2  px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
    <div class="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div class="w-full md:w-1/2 lg:pr-32">
            <h2 class="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">Universal Shipment Tracker</h2>
            <h3
                class="mt-0 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                World-Class Services You Can Count On
            </h3>
            <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
             </div>
        </div>
        <div class="w-full md:w-1/2 flex justify-center md:justify-end">
            <img className=' rounded-2xl' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fdelivery-shipping-4%2F32%2Fdelivery-25-1024.png&f=1&nofb=1&ipt=0d8651cbb53d6c0c36efa63ea69ad020e8c0e009312f4dc6ef1b945c080b144f&ipo=images"/>
        </div>
    </div>
</div>
<h1 className=' text-center'>SAMPLE IDS U CAN TRY<br></br> 1. 323238748234 <br></br>2. 324i23i423234</h1>
<h1 className=' text-2xl text-center font-bold p-5 mt-20'>Enter Tracking Id</h1>
<div style={{height:"240px", marginTop:"10px"}}>
<div   class="flex items-center bg-gray-900 p-4 rounded-md  mt max-w-xs mx-auto  p-23">
 
    <span class="text-green-500">🚚</span>
    <form onSubmit={handleSubmit}>
    <input 
    
    onChange={handleInputChange}
    value={trackingId}
    
    type="text" class="bg-gray-900    text-white p-0.5 outline-none ml-2 max-w-sm" placeholder="Tracking ID"/>
   
    </form>
</div>
{error && <p style={{ color: 'red' }}>{error}</p>}
      {details && (
       
<div class=" max-w-lg  -lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

    <div class="text-center">
        <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
            Ref Id: {details.id}
        </p>
        <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
             <span class="text-indigo-600">Product & Tracking Info</span><br></br>
             
        </h3>
        <p className='m-10'>Shipping Agent: {details.via}</p>

    </div>

    <div class="mt-20">
        <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

            <li class=" bg-gray-100 p-5 pb-10 text-center">
                <div class="flex flex-col items-center">
                    <div class="flex-shrink-0 relative top-0 -mt-16">
                        <div
                            class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            1
                        </div>
                    </div>
                    <div class="mt-4">
                        <h4 class="text-lg leading-6 font-semibold text-gray-900">Status</h4>
                        <p class="mt-2 text-base leading-6 text-gray-500">
                            {details.status}
                        </p>
                    </div>
                </div>
            </li>
            <li class=" bg-gray-100 p-5 pb-10 text-center">
                <div class="flex flex-col items-center">
                    <div class="flex-shrink-0 relative top-0 -mt-16">
                        <div
                            class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            2
                        </div>
                    </div>
                    <div class="mt-4">
                        <h4 class="text-lg leading-6 font-semibold text-gray-900">Estimated Delivery</h4>
                        <p class="mt-2 text-base leading-6 text-gray-500">
                            {details.estimatedDelivery}
                        </p>
                    </div>
                </div>
            </li>
            <li class=" bg-gray-100 p-5 pb-10 text-center">
                <div class="flex flex-col items-center">
                    <div class="flex-shrink-0 relative top-0 -mt-16">
                        <div
                            class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            3
                        </div>
                    </div>
                    <div class="mt-4">
                        <h4 class="text-lg leading-6 font-semibold text-gray-900">Location</h4>
                        <p class="mt-2 text-base leading-6 text-gray-500">
                           {details.location}
                        </p>
                    </div>
                </div>
            </li>

        </ul>
    </div>

</div>



      )}
</div>


</>
  )
}
