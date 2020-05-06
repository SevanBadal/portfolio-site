export const addCard = ({ name, created_at, description, html_url }) => {
  const projectRoot = document.querySelector("#projects");
  const formattedDate = created_at.toString().replace(/(\d{2}\:.*)/, '');
  const card = `
    <div class='card' style='width: 18rem; border-radius: 8px; overflow: hidden;'>
      <div class='card-body'>
        <h5 class='card-title'>${name}</h5>
        <h6 class='card-subtitle text-muted'>${formattedDate}</h6>
        <p class='card-text'>${description}</p>
        <div class="link-container">
          <a href='${html_url}' target='_blank' class='card-link'>
            <i class='fas fa-code-branch'></i>
          </a>
        </div>
      </div>
    </div>`;
  projectRoot.insertAdjacentHTML("beforeend", card);
};
