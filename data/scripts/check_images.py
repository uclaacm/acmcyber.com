import json
from common import OtherInfo, find_new_member_data

with open('tmp/old-member-data','r') as f:
    old_data = f.read()
old_data_json = json.loads(old_data)
with open('clubdata/membership.tsv','r') as f:
    new_extra_data = list(filter(lambda x: "Not found" not in x,[OtherInfo(*i.split('\t')[:19]) for i in f.read().split('\n')[1:]]))
members = []

for member in old_data_json:
    if member['photo']:
        continue
    data = find_new_member_data(member['name'],new_extra_data)
    if data and data.photo:
        print(f'{data.photo} for {data.name}')