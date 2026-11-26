# Tiffin Service by Aromabites

Full-stack application for Tiffin Service by Aromabites with separate backend and frontend architectures.

## Project Structure

```
tiffin-service-by-aromabites/
├── frontend/             # Next.js (TypeScript, Tailwind CSS, App Router)
│   ├── src/
│   │   └── app/          # App router pages & layouts
│   ├── public/           # Static assets
│   ├── package.json      # Frontend dependencies
│   └── README.md
│
└── backend/              # Python (FastAPI, Uvicorn, Pydantic)
    ├── app/
    │   └── main.py       # FastAPI application & API endpoints
    ├── requirements.txt  # Python dependencies
    ├── venv/             # Virtual environment
    └── README.md
```

## Getting Started

### 1. Frontend (Next.js)
```bash
cd frontend
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the web app.

### 2. Backend (Python / FastAPI)
```bash
cd backend
source venv/bin/activate
uvicorn app.main:app --reload --port 8000
```
Open [http://localhost:8000/docs](http://localhost:8000/docs) for the interactive Swagger API documentation.
