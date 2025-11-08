import os
from pathlib import Path
import pandas as pd
from dotenv import load_dotenv

load_dotenv()

tmdb_api_key = os.getenv("TMDB_API_KEY")
tmdb_base_url = os.getenv("MOVIE_DB_URL", "https://api.themoviedb.org")

headers = {
    "accept": "application/json",
    "Authorization": f'Bearer {tmdb_api_key}'
}

BASE_DIR = Path(__file__).parent.parent.parent
CSV_DIR = BASE_DIR / "csv"

def to_csv(data, csv_file):
    CSV_DIR.mkdir(exist_ok=True)
    df = pd.DataFrame(data)
    csv_path = CSV_DIR / csv_file 
    if os.path.isfile(csv_path):
        df.to_csv(csv_path, mode='a', header=False, index=False)
    else:
        df.to_csv(csv_path, mode='w', header=True, index=False)

def from_csv(csv_file):
    csv_path = CSV_DIR / csv_file 
    if not csv_path.exists():
        print(f"DEBUG: CSV file not found at {csv_path}")
        return []
    df = pd.read_csv(csv_path)
    return df.to_dict(orient="records")

