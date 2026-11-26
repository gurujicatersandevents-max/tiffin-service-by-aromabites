# Backend - Tiffin Service by Aromabites (Python / FastAPI)

## Prerequisites
- Python 3.9+

## Setup & Run
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the development server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

5. The API will be available at `http://localhost:8000` (Interactive docs at `http://localhost:8000/docs`).
