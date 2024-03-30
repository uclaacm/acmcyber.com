mkdir tmp/
src="../members.ts"
new="tmp/members-new.ts"
extra_code="console.log(JSON.stringify(members));"
sed 's/export//g' "$src" > "$new"
sed -i '$d' "$new"
echo "$extra_code" >> "$new"
npm install -g typescript
tsc "$new"
node tmp/members-new.js > tmp/old-member-data
python3 update_members.py
python3 clean.py
rm -rf tmp/
