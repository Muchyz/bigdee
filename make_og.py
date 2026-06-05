from PIL import Image, ImageDraw
import os

# Create 1200x630 red canvas
canvas = Image.new('RGB', (1200, 630), '#dc2626')

# Open logo
logo = Image.open('/storage/emulated/0/Download/logo.png').convert('RGBA')

# Resize logo to fit with padding — keep full shield visible
logo_height = 560
ratio = logo_height / logo.size[1]
logo_width = int(logo.size[0] * ratio)
logo = logo.resize((logo_width, logo_height), Image.LANCZOS)

# Center logo
x = (1200 - logo_width) // 2
y = (630 - logo_height) // 2

# Paste with transparency
canvas.paste(logo, (x, y), logo)

# Add website text
draw = ImageDraw.Draw(canvas)
draw.text((600, 610), 'bigdeesecurity.co.ke', fill='#f59e0b', anchor='mm')

# Save
canvas.convert('RGB').save('public/logophoto.jpg', 'JPEG', quality=85)
size = os.path.getsize('public/logophoto.jpg') / 1024
print(f"✅ Done! Size: {size:.1f} KB")
