import smtplib
from email.mime.text import MIMEText

import config


def send_otp(receiver, otp):
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.login(config.SMTP.username, config.SMTP.password)

    msg = MIMEText(f'Please use {otp} as your one time password')
    msg['Subject'] = 'Road Eye - One Tine Password'
    msg['From'] = config.SMTP.username
    msg['To'] = receiver

    server.sendmail(config.SMTP.username, receiver, msg.as_string())
    server.quit()
