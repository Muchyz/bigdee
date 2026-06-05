import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'https://bigdeesecurity.co.ke/logo.png',
    'https://bigdeesecurity.co.ke/logophoto.png'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ og:image updated to logophoto.png")
