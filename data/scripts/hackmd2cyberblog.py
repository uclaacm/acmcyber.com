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

import sys, re
from pathlib import Path
import requests

if len(sys.argv) < 2:
    print("Usage: hackmd2cyberblog.py <file>")
    sys.exit(1)

# Read the file
file_path = Path(sys.argv[1])
if not file_path.exists():
    print(f"[*] File not found: {sys.argv[1]}")
    sys.exit(1)

with open(file_path, "r") as f:
    content = f.read()

# Return a list of all image urls
images = re.findall(r"https://hackmd\.io/_uploads/[^)]+", content)


def download_image(dowload_folder: Path, url: str):
    """
    Download an image from a given URL and return the path to the downloaded image.
    """
    response = requests.get(url)
    if response.status_code != 200:
        print(f"[*] Failed to download image: {url}")
        return None

    # Save the image
    filename = url.split("/")[-1]
    path = dowload_folder / filename
    print(f"[*] Downloading image: {url} -> {path}")
    with open(path, "wb") as f:
        f.write(response.content)


print("[*] Downloading images...")

shim = file_path.stem
download_folder = Path("public/images/blog") / shim

# Create the download folder
download_folder.mkdir(parents=True, exist_ok=True)

for image in images:
    download_image(download_folder, image)

# Replace the image URLs
content = re.sub(
    r"https://hackmd\.io/_uploads/([^)]+)",
    lambda x: f"/images/blog/{shim}/{x.group(1)}",
    content,
)

# Write the new content
with open(file_path, "w") as f:
    f.write(content)

print("[*] Done!")
