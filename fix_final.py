import re, os
from PIL import Image

# Fix og:title
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(
    r'<meta property="og:title"[^>]*/?>',
    '<meta property="og:title" content="Big Dee Security Solutions | #1 Security Nairobi Kenya" />',
    content
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ og:title fixed")

# Compress image as JPEG instead of PNG (much smaller)
img = Image.open('public/logophoto.png')
img = img.resize((1200, 630), Image.LANCZOS)
img.convert('RGB').save('public/logophoto.jpg', 'JPEG', quality=75, optimize=True)

size = os.path.getsize('public/logophoto.jpg') / 1024
print(f"✅ Saved as JPEG: {size:.1f} KB")
