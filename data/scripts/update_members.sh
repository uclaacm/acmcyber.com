mkdir tmp/
src="../members.ts"
new="tmp/members-new.ts"
extra_code="console.log(JSON.stringify(members));"
sed 's/export//g' "$src" > "$new"
sed -i '$d' "$new"
echo "$extra_code" >> "$new"
tsc "$new"
node tmp/members-new.js > tmp/old-member-data
python3 update_members.py
rm -rf tmp/
