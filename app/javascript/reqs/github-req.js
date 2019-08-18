fetch("https://api.github.com/users/sevanbadal")
  .then(res => res.json())
  .then((data) => {
    const repos = document.getElementById('repos');
    const followers = document.getElementById('followers');
    repos.innerHTML = data.public_repos;
    followers.innerHTML = data.followers;
  });
