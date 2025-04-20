import pymongo

client = pymongo.MongoClient("mongodb+srv://benson:871231@cluster0.twrgm20.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

db=client.test
collection=db.users

collection.insert_one({"name":"benson",
    "age":70,
    "gender":"male"})

print("新增成功")