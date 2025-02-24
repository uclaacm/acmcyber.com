import json
from typing import NamedTuple
from common import OtherInfo, member_template, find_new_member_data

class RequirementInfo(NamedTuple):
    fields = [f'field{i}' for i in range(3)]
    fields[0] = 'name'
    fields[2] = 'role'
    __annotations__ = {field: str for field in fields}    

with open('tmp/old-member-data','r') as f:
    old_data = f.read()
old_data_json = json.loads(old_data)
with open('clubdata/requirement.tsv','r') as f:
    new_data = list(filter(lambda x: "#N/A" not in x,[RequirementInfo(*i.split('\t')[:3]) for i in f.read().split('\n')[1:]]))
with open('clubdata/membership.tsv','r') as f:
    new_extra_data = list(filter(lambda x: "Not found" not in x,[OtherInfo(*i.split('\t')[:21]) for i in f.read().split('\n')[1:]]))

presidents = []
advisors = []
officers = []
members = []

def check_member(member_name,member_list):
    for member in member_list:
        if member['name'] == member_name:
            return member
    return None

for member in old_data_json:
    print(member['name'])
    off = input('is this an officer? ')
    if off == 'y':
        member['role'] = "Officer"
        officers.append(member)
        continue
    elif off == 'g':
        continue
    pres = input('is this a president? ')
    if pres == 'y':
        member['role'] = "Co-President"
        presidents.append(member)
        continue
    adv = input('is this an advisor? ')
    if adv == 'y':
        member['role'] = "Advisor"
        advisors.append(member)
        continue

print(f'there are {len(presidents)} presidents')
print(f'there are {len(officers)} non-president officers')
for new_member in new_data:
    name = new_member.name
    other_data = find_new_member_data(name,new_extra_data)
    if other_data is None:
        print(f"Information not found for {name}")
    else:
        print(f"Found {name}")
        offpres = input("Is this an officer or president? ")
        if offpres == 'y':
            continue
    old_member = check_member(name,old_data_json)
    if not old_member:
        print(f'Not found: {name}')
        recheck = input('Is there another name that was entered in old data? ')
        if recheck == 'y':
            new_member_json = check_member(input('Enter a name: ',old_data_json))
        else:
            new_member_json = member_template.copy()
            new_member_json['name'] = name
            new_member_json['role'] = new_member.role
    else:
        new_member_json = old_member
    print(other_data)
    if other_data:
        if other_data.pronouns:
            new_member_json["pronouns"] = other_data.pronouns
        if other_data.year:
            transfer = other_data.year.split()[3] == 'transfer'
            year = ' '.join(other_data.year.split()[:2])
            if transfer:
                year += ' Transfer'
        else:
            year = input("Enter year: ")
        print(other_data.major)
        major = input("What major is this? ")
        if major == 'y':
            new_member_json["bio"] = f"{year} {other_data.major} major"
        else:
            new_member_json["bio"] = f"{year} {major} major"
        
    members.append(new_member_json)
final_json = presidents + officers + advisors + members
print(json.dumps(final_json))

with open('out/data','w') as f:
    f.write(json.dumps(final_json,indent=2))
    
            
            
