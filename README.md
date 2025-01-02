# Cryptocurrency Tracker

## Description

A cryptocurrency tracker application built with Next.js that allows users to track real-time prices and trends of top cryptocurrencies.

## Project Description

This project is a cryptocurrency tracker that allows users to monitor various cryptocurrencies in real-time.

## Setup Instructions

To set up the project, create a `.env` file in the root directory of the project with the following content:

```
NEXT_PUBLIC_COINGECKO_API=https://api.coingecko.com/api/v3
```

Make sure to replace any existing `.env` file if necessary.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alberto-arce/crypto_tracker.git
   cd crypto_tracker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Docker

To run this project using Docker, follow these steps:

1. **Build the Docker image:**

   ```bash
   docker compose build
   ```

2. **Run the Docker container:**

   ```bash
   docker compose up -d
   ```

3. **Access the application:**
   Open your browser and go to `http://localhost:3000` to access the application.

Make sure you have Docker installed on your machine before running these commands.

## Features

- Real-time cryptocurrency price tracking
- Search functionality to filter cryptocurrencies
- Pagination for easy navigation through large datasets

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Radix UI**: A library of accessible UI components.
- **CoinGecko API**: Provides cryptocurrency market data.

## API Information

The application fetches cryptocurrency data from the CoinGecko API. The main function for fetching data is `getCryptocurrencies`, which retrieves market data based on pagination and currency parameters.
