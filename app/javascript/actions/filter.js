import { getRepos } from '../reqs/github-repos';
import { addCard } from '../components/card-projects';
const myRepos = getRepos();
console.log(myRepos)
const filters = {
  searchText: ''
}

const textQuery = document.querySelector('.text-input');
textQuery.addEventListener('input', updateFilter)

function updateFilter(e) {
  const text = e.target.value;
  filters.searchText = text;
  filterProjects(myRepos, filters);
};

const filterProjects = (repos, filters) => {
  const filteredRepos = repos.then((projects) => {
    return projects.filter(function (project) {
      const searchTextMatch = project.tags.toLowerCase().includes(filters.searchText.toLowerCase());
      return searchTextMatch;
    });
  });
  const header = document.querySelector('.header__title');
  document.querySelector('#projects').innerHTML = ''
  filteredRepos.then((filteredRepos) => {
    filteredRepos.forEach(repo => {
      addCard(repo);
    });
    const count = filteredRepos.length;
    header.innerHTML = (
      count === 1 ? `${count} result` : `${count} results`
      );
  });

};

