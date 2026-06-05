from PIL import Image

img = Image.open('public/logophoto.png')
img_resized = img.resize((1200, 630), Image.LANCZOS)
img_resized.save('public/logophoto.png')
print(f"✅ Resized to {img_resized.size}")
