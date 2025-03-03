"use client"
import React, { useState } from "react";
import ProductCard from "../one/ProductCard";
import Image from "next/image";
import homeimg from '../media/home.png'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null); // State to store fetched data
  const [error, setError] = useState(null); // State to store error messages
  const [loading, setLoading] = useState(false); // State to show loading indicator

  const handleSearch = async (event) => {
    setLoading(true);
    setSearchResults(null);
    event.preventDefault(); // Prevent page reload
    if (searchQuery.trim()) {
      const url = `http://localhost:5000/api/price/find/${encodeURIComponent(searchQuery)}`;
      console.log("Fetching data from:", url);

      setLoading(true); // Start loading indicator
      setError(null); // Reset error state

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setSearchResults(data); // Store data in state
        console.log("Fetched Data:", data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false); // Stop loading indicator
      }
    } else {
      alert("Please enter a valid search query.");
    }
    setLoading(false);
  };

  return (
    <div className="px-2 [isolation:isolate]">
      <div
        className="min-h-[90vh] text-center grid place-items-center overflow-clip"
        id="hero">
        <div className="flex w-full flex-col justify-center items-center">
          
          <div className="flex flex-col  md:flex-row">
  <div className="w-full flex justify-center items-center md:items-start flex-col p-5">
    <h1 className="p-5 md:text-left font-bold" id="heading">
      $hop Smart,
      <br />
      Save Big!
    </h1>
    <p className="text-[hsl(0,0%,54%)] text-center text-lg mt-4 w-4/5 md:w-1/2 mb-12">
      Making smart shopping effortless with a powerful tool to track and compare product prices across top e-commerce platforms.
    </p>
  </div>
  <div className="hidden md:flex">
    <Image 
      className="h-[50vh] w-[50vw] object-contain" 
      src={homeimg} 
      alt="Homepage Illustration" 
    />
  </div>
</div>

          <form onSubmit={handleSearch} className="relative w-max mx-auto gap-2">
            <input
              type="search"
              placeholder="Search for ranges of products"
              className="outline-none rounded-full px-8 py-3 w-96 placeholder:text-center"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2">
            </button>
          </form>
        </div>

        {loading ? (
  <div className="text-white text-3xl">Loading...</div>
) : (
  searchResults && (
    <div
      id="grid"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 rounded mt-4 text-white bg-gray-700 p-10"
    >
      {searchResults.map((product) => (
        <ProductCard item={product} key={product.name} />
      ))}
    </div>
  )
)}

      </div>
    </div>
  );
}
