from PIL import Image

img = Image.open('public/logophoto.png')
img = img.resize((1200, 630), Image.LANCZOS)
img.save('public/logophoto.png', 'PNG', optimize=True, compress_level=9)

import os
size = os.path.getsize('public/logophoto.png') / 1024
print(f"✅ Compressed to {size:.1f} KB")
