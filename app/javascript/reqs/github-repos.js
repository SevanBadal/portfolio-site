import { addCard } from '../components/card-projects';

export const getRepos = () => {
  return fetch("https://api.github.com/users/sevanbadal/repos")
    .then(res => res.json())
    .then((data) => {
      return data.map(({ name, created_at, description, html_url })=> {
        const project = {
          name,
          created_at,
          description: description || "Sorry, no description. Please click to view the repo!",
          html_url
        };
        addCard(project);
        return project;
      });
    });
};
