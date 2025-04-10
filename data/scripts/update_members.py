#!/usr/bin/env python3
import json
import re
from typing import NamedTuple
from common import OtherInfo, member_template, find_new_member_data


class RequirementInfo(NamedTuple):
    name: str
    role: str


with open("data/scripts/tmp/old-member-data", "r", encoding="utf-8") as f:
    old_data_json = json.load(f)

with open("data/scripts/clubdata/requirement.tsv", "r", encoding="utf-8") as f:
    lines = f.read().splitlines()
    if not lines:
        print("requirement.tsv is empty!")
        exit(1)
    header, *data_lines = lines
    new_data = []
    for line in data_lines:
        if not line.strip() or "#N/A" in line:
            continue
        parts = line.split("\t")
        if len(parts) < 29:
            continue
        req = RequirementInfo(name=parts[28].strip(), role=parts[2].strip())
        new_data.append(req)

with open("data/scripts/clubdata/membership.tsv", "r", encoding="utf-8") as f:
    lines = f.read().splitlines()
    if not lines:
        print("membership.tsv is empty!")
        exit(1)
    header, *data_lines = lines
    new_extra_data = []
    for line in data_lines:
        if not line.strip() or "Not found" in line:
            continue
        cols = line.split("\t")
        new_extra_data.append(OtherInfo(*cols[:22]))

presidents = []
advisors = []
officers = []
members = []


def check_member(member_name, member_list):
    for member in member_list:
        if member["name"] == member_name:
            return member
    return None


for member in old_data_json:
    print(member["name"])
    off = input("is this an officer? ")
    if off == "y":
        member["role"] = "Officer"
        officers.append(member)
        continue
    elif off == "g":
        continue
    pres = input("is this a president? ")
    if pres == "y":
        member["role"] = "Co-President"
        presidents.append(member)
        continue
    adv = input("is this an advisor? ")
    if adv == "y":
        member["role"] = "Advisor"
        advisors.append(member)
        continue

print(f"there are {len(presidents)} presidents")
print(f"there are {len(officers)} non-president officers")

for new_member in new_data:
    name = new_member.name
    other_data = find_new_member_data(name, new_extra_data)
    if other_data is None:
        print(f"Information not found for {name}")
    else:
        print(f"Found {name}")
        offpres = input("Is this an officer or president? ")
        if offpres == "y":
            continue
    old_member = check_member(name, old_data_json)
    if not old_member:
        print(f"Not found: {name}")
        recheck = input("Is there another name that was entered in old data? ")
        if recheck == "y":
            new_member_json = check_member(input("Enter a name: "), old_data_json)
        else:
            new_member_json = member_template.copy()
            new_member_json["name"] = name
            new_member_json["role"] = new_member.role
    else:
        new_member_json = old_member
    print(other_data)
    if other_data:
        if other_data.pronouns:
            new_member_json["pronouns"] = other_data.pronouns
        if other_data.year:
            parts = other_data.year.split()
            transfer = len(parts) > 3 and parts[3].lower() == "transfer"
            year = " ".join(parts[:2])
            if transfer:
                year += " Transfer"
        else:
            year = input("Enter year: ")
        print(other_data.major)
        major = input("What major is this? ")
        if major == "y":
            new_member_json["bio"] = f"{year} {other_data.major} major"
        else:
            new_member_json["bio"] = f"{year} {major} major"
    members.append(new_member_json)

final_json = presidents + officers + advisors + members

with open("data/scripts/out/data.ts", "w", encoding="utf-8") as f:
    output = json.dumps(final_json, indent=2)
    ts_str = re.sub(r'"([^"]+)":', r"\1:", output)
    f.write(ts_str)
