import React from 'react';
import styled from "styled-components";
import Header2 from './components/Header2.jsx';
import FlowText from './components/FlowText.jsx';


function App() {
  return (
    <>
    <Header2/>
	{/* <FlowText/> */}
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <div className="rounded-lg md:w-56">
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          Marketing
        </div>
        <a href="/get-started" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
          Finding customers for your new business
        </a>
        <p className="mt-2 text-gray-600">
          Getting a new business off the ground is a lot of hard work.
          Here are five ideas you can use to find your first customers.
        </p>
      </div>
      <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">Hello</button>
    </div>
    <div className="flex flex-col bg-white p-5 flex-wrap gap-10">
	    <div className="flex gap-10 flex-col md:flex-row m-auto md:m-0">
		{/* 	      <img src="https://avatars.githubusercontent.com/u/117346967?v=4" alt="프로필" className="w-48 aspect-square">*/}
		<div>
	        <h1 className="text-4xl text-[#EFA43D] md:mt-10">Gyuri Kim </h1>
	        <p className="text-gray-500 mt-2">Frontend developer</p>
	      </div>
	    </div>
	
	    <div className="flex flex-row">
	      <div className="flex flex-col gap-10 md:flex-row md:gap-10">
	        <div className="md:w-[200px] shrink-0 px-2">
	          <h2 className="text-xl text-[#2390B3] font-bold border-l-4 border-[#2390B3] pl-2 mb-2">Contact</h2>
	          <ul className="space-y-2 mb-10">
	            <li><i className="fas fa-envelope text-gray-400 mr-1"></i> aaaa@aaa.com</li>
	            <li><i className="fas fa-phone text-gray-400 mr-1"></i>010-0000-0000</li>
	            <li><i className="fab fa-github text-gray-400 mr-1"></i> gyulls2</li>
	          </ul>
	
	          <div>
	            <h2 className="text-xl text-[#2390B3] font-bold border-l-4 border-[#2390B3] pl-2 mb-2">About</h2>
	            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptatem eveniet voluptatibus harum
	              quidem culpa?</p>
	          </div>
	        </div>
	
	
	        <div className="flex flex-col gap-10">
	          <div>
	            <h2 className="text-xl text-[#2390B3] font-bold border-l-4 border-[#2390B3] pl-2 mb-2">Profile</h2>
	            <p className="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, cumque obcaecati tenetur
	              pariatur reiciendis
	              vel possimus eligendi consequuntur suscipit quas delectus sed dignissimos necessitatibus quia, doloribus
	              illum! Enim, esse animi!</p>
	          </div>
	          <div className="space-y-2">
	            <h2 className="text-xl text-[#2390B3] font-bold border-l-4 border-[#2390B3] pl-2 mb-2">Project History</h2>
	            <div className="pl-4">
	              <div className="text-xl inline-block">Weniv world</div>
	              <span className="text-sm text-gray-500 ml-2">2023.07 ~ 2023.11</span>
	              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptatem eveniet voluptatibus
	                harum
	                quidem culpa?</p>
	            </div>
	            <div className="pl-4">
	              <div className="text-xl inline-block">Weniv world</div>
	              <span className="text-sm text-gray-500 ml-2">2023.07 ~ 2023.11</span>
	              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptatem eveniet voluptatibus
	                harum
	                quidem culpa?</p>
	            </div>
	
	          </div>
	          <div>
	            <h2 className="text-xl text-[#2390B3] font-bold border-l-4 border-[#2390B3] pl-2 mb-2">Skill</h2>
	            <ul className="grid grid-cols-3 pl-4 list-disc">
	              <li>HTML</li>
	              <li>CSS</li>
	              <li>JAVASCRIPT</li>
	              <li>REACT</li>
	            </ul>
	          </div>
	        </div>
	
	      </div>
	    </div>
	  </div>
    </>
  );
}

export default App;
