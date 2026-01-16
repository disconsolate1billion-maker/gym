# APEX Wrestling - Product Requirements Document

## Original Problem Statement
Rebrand the RAZE Training e-commerce template to APEX Wrestling - an elite compression gear brand for wrestlers and combat athletes.

## User Personas
- **Primary**: Wrestlers (Folkstyle, Freestyle, Greco-Roman) looking for high-quality compression gear
- **Secondary**: Combat athletes (BJJ, MMA, Judo), coaches, and wrestling enthusiasts
- **Global Audience**: International customers in 10+ language markets

## Brand Identity

### Brand Name: APEX
### Tagline: "Forged in the Fire"
### Colors:
- Primary: Deep Red (#DC2626)
- Secondary: Gold (#D4AF37)
- Background: Black (#000000)
- Accent: Gold for highlights

### Brand Story
APEX was created by former NCAA wrestlers who got tired of compression gear that rides up, loses grip, or falls apart after one season. We build battle-tested gear that performs under pressure — from practice to championship matches.

## Core Requirements

### Completed Features
- Full-stack e-commerce application (FastAPI + React + MongoDB)
- User authentication (Email/Password + Google OAuth)
- Product catalog with multiple variants
- Shopping cart with bundle discounts
- Waitlist functionality for upcoming products
- Admin dashboard for order management
- n8n webhook integrations for email automation
- Multi-language support (10 languages)
- Currency localization

### Products
1. **Compression Shirts** - 4 variants
   - Black / Red (Most Popular)
   - Black / Gold
   - Red / Black
   - White / Red

2. **Wrestling Shorts** - 2 variants
   - Black / Red (Most Popular)
   - Black / Gold

### Pricing
- Compression Shirt: $55 (was $75)
- Wrestling Shorts: $65 (was $85)
- Training Set Bundle: $89 (Shirt + Shorts, save $31)

## Architecture

```
/app/
├── backend/           # FastAPI Python backend
│   ├── server.py      # Main server with all routes
│   └── .env           # Environment configuration
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React contexts (Auth, Cart, Wishlist)
│   │   ├── data/        # Product data (products.js, mock.js)
│   │   ├── locales/     # Translation JSON files (10 languages)
│   │   ├── utils/       # Utility functions (currency.js, etc.)
│   │   ├── i18n.js      # i18next configuration
│   │   └── App.js       # Main React app
│   └── public/          # Static assets
└── memory/            # Project documentation
```

## Tech Stack
- **Backend**: FastAPI, Python, Motor (MongoDB async driver)
- **Frontend**: React, react-router-dom, react-i18next
- **Database**: MongoDB
- **Styling**: CSS with custom design system (red/gold theme)
- **i18n**: i18next with browser language detection

## Features

### Battle-Tested Durability
Reinforced seams and abrasion-resistant fabric built to survive thousands of hours on the mat.

### Competition Cut
Streamlined fit that stays in place during takedowns, scrambles, and intense grappling sessions.

### Wrestling Heritage
Designed by former NCAA wrestlers who understand the demands of the sport at every level.

### Weight-Cut Ready
Moisture-wicking technology that helps you maintain focus and performance during intense training.

## API Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/google` - Google OAuth initiation
- `POST /api/waitlist` - Join product waitlist
- `POST /api/webhook/*` - n8n webhook triggers
- `POST /api/checkout/create-session` - Stripe checkout (needs API key)

## Recent Updates

### January 2025 - Brand Transformation
- Rebranded from RAZE Training (gymnastics) to APEX Wrestling (combat sports)
- Updated color scheme: Cyan → Red/Gold
- New product lineup: Compression shirts and wrestling shorts
- Updated copy and messaging for wrestling/combat sports audience
- New hero imagery featuring wrestlers and combat athletes
- Updated About section with wrestling-focused story
