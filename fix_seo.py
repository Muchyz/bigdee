import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix title
content = re.sub(
    r'<title>.*?</title>',
    '<title>Big Dee Security Solutions | #1 Security Nairobi Kenya</title>',
    content,
    flags=re.DOTALL
)

# Fix og:description
content = re.sub(
    r'<meta property="og:description"[^>]*/?>',
    '<meta property="og:description" content="Kenya\'s most trusted security company. Guards, armed response, CCTV, VIP protection & electric fencing. 300+ officers. Call +254 725 336 860." />',
    content
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Title fixed")
print("✅ og:description fixed")
