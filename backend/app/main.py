from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Tiffin Service by Aromabites API",
    description="Backend API for Tiffin Service by Aromabites",
    version="1.0.0"
)

# Enable CORS for the Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "message": "Welcome to Tiffin Service by Aromabites API",
        "status": "online"
    }

@app.get("/api/health")
def health_check():
    return {"status": "ok"}

@app.get("/api/menu")
def get_menu():
    return {
        "daily_specials": [
            {
                "id": 1,
                "name": "Classic North Indian Thali",
                "description": "Paneer Butter Masala, Dal Makhani, 4 Rotis, Jeera Rice, Salad & Sweet",
                "price": 149,
                "type": "Veg"
            },
            {
                "id": 2,
                "name": "Homestyle Meal Box",
                "description": "Seasonal Veg Sabzi, Yellow Dal, 4 Phulkas, Steamed Rice & Pickle",
                "price": 119,
                "type": "Veg"
            }
        ]
    }
