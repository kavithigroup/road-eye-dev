import random
from hashlib import md5, sha256

from fastapi import APIRouter
from starlette.requests import Request

import mailing
from db_connector import query, update

router = APIRouter(prefix="/api")


@router.get("/")
def root():
    return "Road Eye API v1.0"


@router.post("/login")
def login():
    pass


@router.post("/otp")
async def send_otp(request: Request):
    data = await request.json()
    email = data["email"]
    otp = random.randint(111111, 999999)
    update("INSERT INTO otp(email, otp) VALUES (%s, %s)", (email, otp))
    mailing.send_otp(email, otp)


@router.post("/register")
async def register(request: Request):
    data: dict = await request.json()
    data["role"] = 0
    data["password"] = sha256(data["password"].encode()).hexdigest()[:64]
    otp = query("SELECT otp FROM otp WHERE email = %s ORDER BY reg_time DESC LIMIT 1", (data["email"],))
    if len(otp) == 0:
        return "Email not verified"
    if otp[0]["otp"] != data["otp"]:
        return "Invalid OTP"
    try:
        update("INSERT INTO user (first_name, last_name, email, phone, nic, username, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(phone)s, %(nic)s, %(username)s, %(password)s)", data)
    except:
        return "Email already exists"
