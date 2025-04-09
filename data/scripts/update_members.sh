#!/bin/bash
set -e
cd "$(git rev-parse --show-toplevel)"
MEMBERS_FILE="data/members.ts"
TMP_DIR="data/scripts/tmp"
TMP_JSON="$TMP_DIR/old-member-data"
TMP_SCRIPT="$TMP_DIR/members-clean.ts"
rm -rf "$TMP_DIR"
mkdir -p "$TMP_DIR"
sed -E 's/^export //g' "$MEMBERS_FILE" > "$TMP_SCRIPT"
sed -i '' '/^default members/d' "$TMP_SCRIPT" 2>/dev/null || sed -i '/^default members/d' "$TMP_SCRIPT"
npx ts-node --transpileOnly "$TMP_SCRIPT" > "$TMP_JSON"
python3 data/scripts/update_members.py
rm -rf "$TMP_DIR"
echo "output saved to data/scripts/out/data"