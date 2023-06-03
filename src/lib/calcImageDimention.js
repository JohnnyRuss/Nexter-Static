function calcImageDimention() {
  const galleryImageFigures = Array.from(
    document.querySelectorAll(".gallery-img ")
  );

  galleryImageFigures[0] &&
    galleryImageFigures.forEach((fig) => {
      const imgNode = fig.querySelector("img");
      const img = document.createElement("img");
      img.setAttribute("src", imgNode?.src || "");

      img.addEventListener("load", function (e) {
        if (!e.target) return;

        const { width, height } = e.target;

        if (height > width) fig.classList.add("gallery-img--portrate");
        else if (width / height < 1.7)
          fig.classList.add("gallery-img--landscape");
        else if (width / height > 1.7)
          fig.classList.add("gallery-img--landscapeLarge");
      });
    });
}

export default calcImageDimention;
