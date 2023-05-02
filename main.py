from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def index():
    return {"message": "Hallo Welt!"}

@app.get("/trans/")
async def translate(text: str, start_lang: str, end_lang: str):
    return {"text": text, "slang": start_lang, "elang": end_lang}
