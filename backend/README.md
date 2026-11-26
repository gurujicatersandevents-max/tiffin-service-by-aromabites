# Aroma Bites CMS & Backend (Laravel 8.x / PHP 8.2 / MySQL)

## 📌 Technology Stack
- **Backend Language:** PHP 8.2
- **Backend Framework:** Laravel 8.x
- **Database:** MySQL
- **Admin CMS UI:** Laravel Blade + Responsive Tailwind CSS
- **API Architecture:** RESTful JSON API
- **Frontend Integration:** Communicates with public Next.js frontend

---

## 🚀 Quick Setup Instructions

### 1. Requirements
Ensure your host machine or deployment server has:
- PHP 8.2 (`php -v`)
- Composer (`composer --version`)
- MySQL 8.x or 5.7+ (`mysql --version`)

### 2. Install PHP & Composer (macOS Homebrew Example)
```bash
brew install php@8.2 composer mysql
brew services start mysql
```

### 3. Configure Database (.env)
Edit `backend/.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=aroma_b_tiffin
DB_USERNAME=aromabites
DB_PASSWORD="K#xrR=N5n;"
```

Create the database in MySQL:
```sql
CREATE DATABASE IF NOT EXISTS aroma_b_tiffin CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'aromabites'@'localhost' IDENTIFIED BY 'K#xrR=N5n;';
GRANT ALL PRIVILEGES ON aroma_b_tiffin.* TO 'aromabites'@'localhost';
FLUSH PRIVILEGES;
```

### 4. Install Dependencies, Migrate & Seed
Inside the `backend/` directory:
```bash
cd backend
composer install
php artisan key:generate
php artisan migrate --seed
```

This sets up:
- Complete database schema (19 relational tables).
- Default Admin Account:
  - **Email:** `admin@aromabites.in`
  - **Password:** `Admin@AromaBites2024`
- Preloaded company profiles, 16 delivery areas, 3 tiered subscription plans, and 14 FAQs.

### 5. Start Laravel Development Server
```bash
php artisan serve --port=8000
```
- **Admin CMS Portal:** `http://localhost:8000/admin`
- **Public API Base:** `http://localhost:8000/api/public/`

---

## 📡 REST API Endpoints Overview

### Public Endpoints (Consumed by Frontend)
- `GET /api/public/home` — Full published homepage bundle
- `GET /api/public/company-profile` — Contact, phone, address, timings
- `GET /api/public/meal-plans` — Active subscription plans & features
- `GET /api/public/delivery-areas` — 16 East Delhi / Ghaziabad hubs
- `GET /api/public/faqs` — Frequently Asked Questions
- `POST /api/public/leads/submit` — Submit incoming lead / trial request

### Admin Endpoints (Protected CMS API)
- `POST /api/admin/login` / `POST /api/admin/logout`
- `GET /api/admin/dashboard` & `analytics`
- `GET /api/admin/leads` (CRUD + status updates)
- `GET|PUT /api/admin/website/home`
- `GET|POST|PUT|DELETE /api/admin/website/plans`
- `GET|POST|PUT|DELETE /api/admin/website/faqs`
- `GET|PUT /api/admin/company-profile`
- `GET|POST|DELETE /api/admin/media`
