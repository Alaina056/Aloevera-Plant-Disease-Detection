from fastapi import FastAPI, UploadFile, File
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import requests
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) 

endpoint = "http://localhost:8501/v1/models/aloevera_model:predict"    #carefully note this
class_names = ['healthy_leaf','rot','rust']

@app.get('/ping')
async def ping():
    return "hello pinging starrrr"

def read_file_as_img(data) -> np.ndarray:
   image = np.array(Image.open(BytesIO(data)))
   return image
    
@app.post('/predict')
async def predict(
    file: UploadFile = File(...)         #type hint in python
):
    image = read_file_as_img(await file.read())
    
    img_batch = np.expand_dims(image,0)           #to add a dimension
    
    json_data = {
        "instances" : img_batch.tolist()
    }
    response = requests.post(endpoint, json=json_data)
  
    prediction = response.json()['predictions'][0]

    
    predicted_class = class_names[np.argmax(prediction)]
    confidence = np.max(prediction)
    print(predicted_class, confidence)
    return {"class": predicted_class, "confidence": float(confidence)}
    
if __name__ =='__main__':
    uvicorn.run(app,host='localhost',port=8000)