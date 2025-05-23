# 🏠 Roommate Finder

Welcome to **Roommate Finder** — a web application designed to help people find suitable roommates by posting and browsing listings with ease and convenience.

🔗 **Live Site:** [https://roommate-finderz.web.app](https://roommate-finderz.web.app)

---

## 🚀 Key Features

- ✅ **User Authentication**  
  - Register or log in using email/password or Google authentication.
  - Authenticated users see a profile picture and logout button, while unauthenticated users see login and register buttons.

- 🏡 **Post a Roommate Listing**  
  - Authenticated users can post roommate listings with required fields such as title, location, rent, room type, lifestyle preference, availability, description, and contact info.
  - User name and email are auto-filled and read only (cannot change).

- 📋 **Browse Listings**  
  - Displays all roommate listings in a table format.
  - Each row includes title, name, email, location, and a "See More" button that redirects to the details page.

- ✨ **Home Page Highlights**  
  - Includes a theme toggle button, hero slider, and a "Featured Roommates" section (shows 6 available listings).
  - Sections like "How it Works" and "What Our Users Say" provide a great introduction to new users.

- 🔐 **Protected Routes**  
  - Only authenticated users can access:  
    - Add to Find Roommate  
    - My Listings  
    - Details

- 🧾 **My Listings Management**  
  - Authenticated users can view, update, or delete their own listings via a table-based layout.

- ❤️ **Like & Contact Reveal**  
  - On the details page, users can like a listing (but not their own).  
  - Liking a listing reveals the contact info and updates the like counter.

- ❌ **404 Error Page**  
  - Invalid routes are gracefully handled with a custom error page.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, DaisyUI, SweetAlert2  
- **Backend:** Express.js, MongoDB  
- **Authentication:** Firebase Auth  
- **Other Tools:** dotenv, CORS

---

## 📂 Project Structure Highlights

- `Home Page` — Theme control, slider, featured listings, and info sections.  
- `Add Roommate` — Form to submit new roommate listing (requires login).  
- `Browse Listings` — Table of all listings with details link.  
- `My Listings` — User's posts with edit/delete options.  
- `Details Page` — Listing information with like button and contact reveal.  
- `Authentication` — Email/password and Google sign-in supported.  
- `Error Page` — Shown for any invalid route.

---

## 🔒 Security & Environment

- Firebase configuration is secured using `.env.local`.
- Backend API routes are protected and CORS enabled.
- Sensitive keys and endpoints are never exposed in frontend code.

---


Thank you for visiting! 🎉
