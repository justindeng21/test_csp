import requests

x = requests.get('https://test-api-page.herokuapp.com/nothing/898/dsfass')

print(x.text)