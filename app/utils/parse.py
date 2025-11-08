import uuid
from ast import literal_eval

def parse_string_to_list(value):
    """This is to covert the csv list into a python list"""
    if not isinstance(value, str):
        return value
    
    try:
        return literal_eval(value)
    except (ValueError, SyntaxError):
        return value
    
def generate_generic_id():
  """This is just to generate a ID"""
  return str(uuid.uuid4())