#!/bin/bash
set -e
cd "$(git rev-parse --show-toplevel)"

IMAGE_DIR="public/images/members"
MEMBERS_FILE="data/members.ts"

for file in "$IMAGE_DIR"/*.{jpg,png}; do
  [ -e "$file" ] || continue
  if [ -f "$file" ]; then
    filename=$(basename -- "$file")
    extension="${filename##*.}"
    filename_no_ext="${filename%.*}"
    output_file="$IMAGE_DIR/$filename_no_ext.webp"

    convert "$file" -resize 400x400 "$output_file"
    rm "$file"
    echo "done"
    echo "$filename"
  fi
done

perl -pi -e 's/\b(jpg|png)\b/webp/g' "$MEMBERS_FILE"
