from fastapi import FastAPI
app=FastAPI()
@app.get("/")
def index():
    return {"message": "Hello World", "CY": 200}

@app.get("/data")
def getData(q, p):
    q = int(q)
    p = int(p)
    return {"Q * 2": q * 2, "P * 2": p * 2}