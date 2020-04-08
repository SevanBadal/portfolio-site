import { addCard } from '../components/card-projects';

export const getRepos = () => {
  return fetch("https://api.github.com/users/sevanbadal/repos")
    .then(res => res.json())
    .then((data) => {
      return data.map(({ name, created_at, updated_at, description, html_url }) => {
        const project = {
          name: name.toLowerCase(),
          updated_at: new Date(updated_at),
          created_at: new Date(created_at),
          description: description || "Sorry, no description. Please click to view the repo!",
          tags: `${description} ${name}`,
          html_url
        };
        return project;
      }).sort((a, b) => {
        return a.created_at < b.created_at ? 1 : -1;
      }).map((project) => {
        addCard(project);
        return project;
      });
    })
    .catch(err => {
      const project = {
        name: "visit my github",
        updated_at: new Date(Date.now()),
        created_at: new Date(Date.now()),
        description: "due to heavy traffic, my github api has exceeded that max # of requests for the day",
        tags: "error",
        html_url: 'https://github.com/SevanBadal'
      };
      return addCard(project);
    })
};
