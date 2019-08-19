import { addCard } from '../components/card-projects';

export const getRepos = () => {
  return fetch("https://api.github.com/users/sevanbadal/repos")
    .then(res => res.json())
    .then((data) => {
      return data.map(({ name, created_at, updated_at, description, html_url })=> {
        const project = {
          name,
          updated_at: new Date(updated_at),
          created_at: new Date(created_at),
          description: description || "Sorry, no description. Please click to view the repo!",
          html_url
        };
        return project;
      }).sort((a, b) => {
        return a.created_at < b.created_at ? 1 : -1;
      }).map((project) => {
        addCard(project);
        return project;
      });
    });
};
