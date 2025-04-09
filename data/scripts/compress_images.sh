#!/bin/bash
cd "$(dirname "$0")"

image_dir="../../public/images/members"
members_file="../../data/members.ts"

for file in "$image_dir"/*.{jpg,png}; do
  [ -e "$file" ] || continue  
  if [ -f "$file" ]; then
    filename=$(basename -- "$file")
    extension="${filename##*.}"
    filename_no_ext="${filename%.*}"
    output_file="$image_dir/$filename_no_ext.webp"

    convert "$file" -resize 400x400 "$output_file"
    if [ "$extension" != "webp" ]; then
      rm "$file"
    fi
    echo "done"
    echo "$filename"
  fi
done

echo "Updating photo extensions in $members_file..."

# removed sed, updates photo extensions in members.ts using Node.js 
node <<'EOF'
const fs = require('fs');
const path = require('path');

const membersPath = path.resolve(__dirname, '../../data/members.ts');
let content = fs.readFileSync(membersPath, 'utf-8');

// Replace all occurrences of "jpg" or "png" with "webp" (as done by the original sed command)
const updated = content.replace(/(jpg|png)/g, 'webp');
fs.writeFileSync(membersPath, updated);
console.log("Updated photo paths in members.ts to use .webp");
EOF

echo "Done."
