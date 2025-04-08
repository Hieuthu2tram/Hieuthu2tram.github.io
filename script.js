function toggleContent(index) {
    const contents = document.querySelectorAll(".content");
    contents[index].style.display =
      contents[index].style.display === "block" ? "none" : "block";
  }
  