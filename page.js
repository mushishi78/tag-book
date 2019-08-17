function togglePage(pageId) {
  const pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = pages[i].id === pageId ? "block" : "none";
  }
  const content = document.querySelector(".content");
  content.scrollTo({ top: 0, behavior: "smooth" });
}
