// --- DOM References ---
const cardsContainer = document.getElementById("cardsContainer");
const statusContainer = document.getElementById("statusContainer");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

// --- In-Memory Cache ---
let resources = [];
const API_URL = "http://localhost:5000/data.json";

/**
 * Asynchronously fetch data from a target JSON link/file.
 * Handles HTTP failures, JSON parsing, and network issues.
 */
async function fetchResources() {
  try {
    statusContainer.textContent = "Fetching JSON data...";
    statusContainer.className = "status-msg";

    const response = await fetch(API_URL);

    // fetch doesnot throw on 404 or 500 status codes; we check ok explicitly
    if (!response.ok) {
      throw new Error(`Failed to load: ${response.status} (${response.statusText})`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Payload error: Expected JSON array of objects.");
    }

    resources = data;
    renderCards(resources);
  } catch (error) {
    statusContainer.textContent = `Error: ${error.message}`;
    statusContainer.className = "status-msg error";
    cardsContainer.innerHTML = "";
  }
}

/**
 * Render cards into the DOM using destructuring and map()
 */
function renderCards(items) {
  if (items.length === 0) {
    cardsContainer.innerHTML = "";
    statusContainer.textContent = "No matching records found.";
    statusContainer.className = "status-msg";
    return;
  }

  // Clear any status messages once we have content to render
  statusContainer.textContent = "";

  // Transform array into HTML markup strings
  const markup = items
    .map(
      ({ title, category, description, tags, level, timeMinutes }) => `
      <article class="card">
        <div>
          <div class="card-header">
            <span class="badge">${category}</span>
            <span class="level-tag">${level}</span>
          </div>

          <h2 class="card-title">${title}</h2>
          <p class="card-description">${description}</p>
        </div>

        <div>
          <div class="tags-list">
            ${tags.map(tag => `<span class="tag">#${tag}</span>`).join("")}
          </div>
          <footer class="card-footer">
            <span>Estimated Reading</span>
            <strong>${timeMinutes} mins</strong>
          </footer>
        </div>
      </article>
    `
    )
    .join("");

  cardsContainer.innerHTML = markup;
}

/**
 * Filter data using modern array iteration methods
 */
function handleFilter() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value;

  const filtered = resources.filter(({ title, description, category, tags }) => {
    const matchesCategory =
      selectedCategory === "ALL" || category === selectedCategory;

    const matchesQuery =
      title.toLowerCase().includes(query) ||
      description.toLowerCase().includes(query) ||
      tags.some(tag => tag.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  renderCards(filtered);
}

// --- Event Listeners ---
searchInput.addEventListener("input", handleFilter);
categorySelect.addEventListener("change", handleFilter);

// --- Entry Point ---
fetchResources();