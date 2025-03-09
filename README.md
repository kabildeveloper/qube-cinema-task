# Qube Cinema Task

## Overview
This repository contains my implementation of the Qube Cinema task for frontend role as per the given requirements. The project has been developed using best practices also added some additional features as well

## Technologies Used
- React
- Typescript
- Vite
- Styled Components
- React Router Dom
- Jest & RTL

## Features Implemented
- List of collections in a table
- Multi-Select filter for Type
- Search Functionality
- Debounce pattern for search (300ms)
- Search History (Max 5)
- Handled empty data
- Click Show details to switch to Collection Details Page through React Router
- Calculated Total Size and Total Duration from the list of songs
- Developed own Node js - Express server for Backend
- Used Context API for Header and Breadcrumbs
- Breadcrumbs created using array, so it is scalable
- Added necessary tabIndex to make it more accessible.
- You can control the whole webisite using keyboard (Search history alone excluded intentionally)
- Added Sample Unit Test cases including Mocking API, Context Provider etc.

## Installation & Setup
- Clone the repository
- Do `npm i` in both frontend and backend folders
- npm run dev in both frontend and backend folders
- open http://localhost:5173/