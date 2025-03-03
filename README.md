# PriceWise: Your Real-time Price Comparison Assistant

Welcome to PriceWise, your go-to platform for real-time price comparison, intelligent product tracking, and insightful price trend analysis. PriceWise empowers users to make informed purchasing decisions by providing a seamless experience for comparing prices across different marketplaces, receiving price drop alerts, and exploring price fluctuation graphs.

## Introduction

PriceWise is a web application designed to simplify the process of finding the best prices for products across various online marketplaces. Leveraging real-time data scraping and a user-friendly interface, PriceWise enables users to make informed choices, save money, and stay up-to-date with price fluctuations.

## Features

### 1. Real-time Price Comparison

Users can search for any product, and PriceWise dynamically scrapes real-time data from different marketplaces, allowing for a side-by-side comparison of prices.

### 2. Direct Mailing System

Set your desired price threshold, and PriceWise will notify you via direct email when the price of a tracked product drops below your specified amount.

### 3. Call-to-Action UI

The user interface is designed with a call-to-action approach, ensuring users can quickly and effortlessly dive into product searches and price comparisons.

### 4. Price Fluctuation Graphs (Future Aspect)

In the future, users will have access to insightful graphs depicting the historical fluctuation of product prices, aiding in making predictions and informed decisions.

### 5. Price Prediction Using ML (Future Aspect)

As a future enhancement, machine learning will be incorporated to predict potential price changes for products, providing users with advanced insights.

## Tech Stack

PriceWise is built using a diverse tech stack:

- Google Custom Search Engine API for obtaining marketplace links
- Beautiful Soup for scraping product data
- Node.js for the backend, utilizing Nodemailer for the mailing system
- Flask for the scraping logic
- Next.js for the frontend

## Getting Started

To get started with PriceWise, follow these steps:

1. Clone the repository:

2. Install dependencies:

   ```bash
   cd backend
   npm install
   ```
   ```bash
   cd frontend
   npm install
   ```
   ```bash
   cd flask
   pip install -r requirements.txt
   ```

3. Set up your environment variables.

4. Run the application:

   ```bash
   cd backend
   node index.js
   ```
   ```bash
   cd frontend
   npm run dev
   ```
   ```bash
   cd flask
   python app.py
   ```
   Visit `http://localhost:3000` in your browser.
