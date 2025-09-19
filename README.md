# Scalable Booking Website

A full-stack booking platform (web-only) designed for scalability and performance.  
Built using **Next.js (React + TypeScript)** for the frontend, **Node.js (NestJS + TypeScript)** for the backend, and **PostgreSQL** as the database.  

Supports secure **payment gateway integration** (Stripe/Razorpay), user authentication, and booking management.  
The project is structured to be scalable with Docker, Redis (for caching), and optional ElasticSearch for advanced search capabilities.

## 🚀 Features
- User authentication & account management
- Search and booking system
- Secure payments with Stripe / Razorpay
- Admin dashboard for managing bookings
- Scalable architecture (Docker + AWS-ready)

## 🛠️ Tech Stack
- **Frontend:** Next.js (React + TypeScript), Tailwind CSS
- **Backend:** Node.js (NestJS / Express + TypeScript)
- **Database:** PostgreSQL + Redis
- **Payments:** Stripe / Razorpay
- **Infrastructure:** Docker, AWS (EC2, RDS, S3, CloudFront)

## 📦 Setup
1. Clone the repository
2. Install dependencies (`npm install` or `yarn install`)
3. Configure `.env` file with DB + Payment Gateway keys
4. Run the app (`npm run dev`)

---

This project is designed as a foundation for building a **travel booking platform** (similar to Airbnb/MakeMyTrip but web-only).
