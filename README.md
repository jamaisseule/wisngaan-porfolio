# wisngaan — Portfolio

Modern personal portfolio built with React + Vite.

Designed and developed by **Ngan Truong**.

---

## 🚀 Live Demo

You can view my portfolio here:  
👉 https://wisngaan-porfolio.vercel.app/

---

## Features

- Responsive modern UI
- Smooth scrolling navigation
- Animated section reveal on scroll
- Interactive custom cursor
- Contact form with email integration
- Mobile-friendly layout
- Modular reusable components
- Clean folder structure

---

## Project Structure

```bash
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Experience/
│   ├── Projects/
│   ├── Skills/
│   ├── Contact/
│   └── Cursor/
│   └── Footer/
│
├── constants/
│   └── data.js
│
├── hooks/
│   ├── useInView.js
│   └── useActiveSection.js
│
├── styles/
│   └── global.css
│
├── App.jsx
└── main.jsx

backend/
├── .env
├── server.js
└── package.json
```

---

## Installation

### Frontend

```bash
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

### Backend

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```bash
http://localhost:5175
```

---

## Environment Variables

Create the backend environment file at:

```bash
backend/.env
```

Add:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_google_app_password
```

For production, add a frontend env file at the project root:

```bash
.env
```

Add:

```env
VITE_API_URL=https://your-backend-url.com
```

You can keep local testing working with the default fallback to `http://localhost:5175/send`.

> Note: Never commit `.env` files to GitHub. Use `.env.example` as the template for required environment variables and keep actual secrets local.

---

## Contact Form

The contact section uses:

- React form handling
- Express backend API
- Nodemailer + Gmail SMTP

Messages submitted through the website are sent directly to your email inbox.

---

## Deployment

Frontend:

- Netlify
- Vercel

Backend:

- Render
- Railway

Before deployment, update:

```env
VITE_API_URL=https://your-backend-url.com
```

---

**wisngaan**
