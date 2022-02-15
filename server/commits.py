import requests
from datetime import datetime, date, timedelta
    
from dotenv import dotenv_values

def has_commited():
    env = dotenv_values(".env")  # config = {"USER": "foo", "EMAIL": "foo@example.org"}
    repo_api_url = "https://api.github.com/user/repos?per_page=100"
    date_string = str((datetime.today() - timedelta(days=1))).split(" ")[0] + "T21:00:00.000000"
    bearer_token = env['GITHUB_OAUTH']
    headers={"Authorization":bearer_token}
    repo_json = requests.get(repo_api_url, headers=headers)
    repos = repo_json.json()
    for repo in repos:
        commit_api_url = "https://api.github.com/repos/zrwaite/" + str(repo['name']) + "/commits"
        commit_api_params = {"author":"zrwaite","since": date_string}
        commit_json = requests.get(commit_api_url, headers=headers, params=commit_api_params)
        commits = commit_json.json()
        if len(commits) != 0:
            return True
    return False

print(has_commited())