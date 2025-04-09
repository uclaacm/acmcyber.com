rm -rf tmp/
mkdir tmp/
src="../members.ts"
new="tmp/members-new.ts"
extra_code="console.log(JSON.stringify(members));"
sed 's/export//g' "$src" > "$new"
sed -i '$d' "$new"
echo "$extra_code" >> "$new"
npx ts-node --transpileOnly "$new" > tmp/old-member-data
python3 /data/scripts/check_images.py
rm -rf tmp/
