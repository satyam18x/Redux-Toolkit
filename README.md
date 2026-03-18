# 🎯 Media Search Application (Redux Toolkit)

This is a **media search web application** built using React and Redux Toolkit that allows users to search and explore high-quality images ,videos from multiple sources.

---

## 🚀 Overview

The application enables users to search for media dynamically based on their input. It integrates multiple APIs and uses Redux Toolkit for efficient and scalable state management.

Users can enter a query and instantly get relevant results, making the experience fast and responsive.

---

## 🔍 Features

- Search images,videos in real-time based on user queries  
- Fetch data from multiple APIs:
  - Unsplash API  
  - Pexels API  
- Centralized state management using Redux Toolkit  
- Loading indicators for better user experience  
- Error handling for API failures  
- Clean and responsive UI  
- Reusable and modular component structure  

---

## ⚙️ How It Works

- User enters a search query  
- An action is dispatched using Redux Toolkit  
- Async thunk fetches data from APIs  
- Data is stored in the global store  
- Components access data using `useSelector`  
- UI updates automatically based on state changes  

---

## 🧠 Concepts Used

- Global state management  
- Async data fetching (`createAsyncThunk`)  
- API integration  
- Component-based architecture  
- Separation of concerns  

---

## 🛠️ Tech Stack

- React  
- Redux Toolkit  
- JavaScript  
- REST APIs (Unsplash & Pexels)

---

