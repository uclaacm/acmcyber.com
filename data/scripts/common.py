from typing import NamedTuple

class OtherInfo(NamedTuple):
    fields = [f'field{i}' for i in range(22)]
    fields[15] = 'name' 
    fields[16] = 'pronouns'
    fields[19] = 'year'       
    fields[20] = 'major'   
    fields[21] = 'photo'      
    __annotations__ = {field: str for field in fields}
    

member_template = {
    "name": "",
    "role": "",
    "bio": "",
    "pronouns": "",
    "photo": ""
}

def find_new_member_data(member_name, extradata):
    norm_name = member_name.strip().lower()
    for member in extradata:
        if member.name.strip().lower() == norm_name:
            return member
    return None