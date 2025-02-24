from typing import NamedTuple

class OtherInfo(NamedTuple):
    fields = [f'field{i}' for i in range(21)]
    fields[14] = 'name'
    fields[15] = 'pronouns'
    fields[18] = 'year'
    fields[19] = 'major'
    fields[20] = 'photo'
    __annotations__ = {field: str for field in fields}

member_template = {
        "name": "",
        "role": "",
        "bio": "",
        "pronouns": "",
        "photo": ""
}

def find_new_member_data(member_name,extradata):
    #print(member_name, extradata[0])
    for member in extradata:
        if member.name == member_name:
            return member
    return None