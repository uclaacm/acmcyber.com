#!/usr/bin/env python3
"""
    A script to convert HackMD notes to Cyber Blog posts (mostly downloading and replacing images).

    Dependencies:
        You will need to download the `requests` library to run this script.

        pip install requests

    Usage: hackmd2cyberblog.py <file>

    The script will download all images from the HackMD note and replace the URLs with the local paths.
    
    NOTE: Make sure to run this from the root of the repository (uses relative paths).

    Example:
        python3 data/scripts/hackmd2cyberblog.py data/blog/2024-12-03-fall-2024-fuzzing-lab.md
"""

import sys, os, re
import requests

if len(sys.argv) < 2:
    print("Usage: hackmd2cyberblog.py <file>")
    sys.exit(1)

# Read the file
with open(sys.argv[1], "r") as f:
    content = f.read()

# Return a list of all image urls
images = re.findall(r"https://hackmd\.io/_uploads/[^)]+", content)


def download_image(dowload_folder: str, url: str) -> str:
    """
    Download an image from a given URL and return the path to the downloaded image.
    """
    response = requests.get(url)
    if response.status_code != 200:
        print(f"[*] Failed to download image: {url}")
        return None

    # Save the image
    filename = url.split("/")[-1]
    path = os.path.join(dowload_folder, filename)
    print(f"[*] Downloading image: {url} -> {path}")
    with open(path, "wb") as f:
        f.write(response.content)


shim = sys.argv[1].split("/")[-1].replace(".md", "")
download_folder = os.path.join("public", "images", "blog", shim)

# Create the download folder
os.makedirs(download_folder, exist_ok=True)

for image in images:
    download_image(download_folder, image)

# Replace the image URLs
content = re.sub(
    r"https://hackmd\.io/_uploads/[^)]+",
    lambda x: f'/images/blog/{shim}/{x.group(0).replace("https://hackmd.io/_uploads/", "")}',
    content,
)

# Write the new content
with open(sys.argv[1], "w") as f:
    f.write(content)

print("[*] Done!")
