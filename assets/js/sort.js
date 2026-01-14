function sortProjects(key) {
  const tbody = document.querySelector("#project-table tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  rows.sort((a, b) => {
    let av = a.dataset[key];
    let bv = b.dataset[key];

    if (!isNaN(av) && !isNaN(bv)) {
      return Number(av) - Number(bv);
    }
    return av.localeCompare(bv);
  });

  rows.forEach(row => tbody.appendChild(row));
}
