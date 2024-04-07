# GitHub Scraper

This project scrapes GitHub topics and picks up the top 10 repositories from each topic. For each topic, it lists the issues of the repositories in the form of a PDF file. This project is useful for open source enthusiasts looking to find trending topics and repositories, and to see the issues they can contribute to.

## Features

- Scrapes GitHub topics to find trending repositories.
- Picks the top 10 repositories from each topic.
- Lists issues from each repository and saves the links as a PDF file.
- Provides an easy way for open source enthusiasts to discover and contribute to trending projects.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/shanyaverma03/github-scraper.git
   cd github-scraper

   ```

2. Install dependencies:

   ```sh
   npm install

   ```

3. Run the script:
   ```sh
    npm start
   ```

## Dependencies

- request - Simplified HTTP request client.
- cheerio - Fast, flexible, and lean implementation of core jQuery designed specifically for the server.
- pdfkit - A JavaScript PDF generation library for Node and the browser.
