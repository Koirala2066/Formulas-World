const navMount = document.querySelector("[data-nav-component]");

if (navMount) {
  fetch("navigation.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Navigation component failed to load.");
      }

      return response.text();
    })
    .then((html) => {
      navMount.innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
}
