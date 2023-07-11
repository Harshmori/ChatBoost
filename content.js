function createUploadButton() {
  const button = document.createElement("button");


  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 448 512");
  svg.setAttribute("width", "16");
  svg.setAttribute("height", "16");
  svg.style.marginRight = "5px";

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"
  );

  path.style.fill = "rgba(217, 217, 227, 1)";

  svg.appendChild(path);

  button.appendChild(svg);
  button.appendChild(document.createTextNode("Upload file"));

  button.style.marginRight = "10px";
  button.style.backgroundColor = "rgba(52, 53, 65, 1)";
  button.style.color = "rgba(217, 217, 227, 1)";
  button.style.border = "1px solid rgba(86, 88, 105, 1)";
  button.style.padding = "5px 10px";
  button.style.borderRadius = "5px";
  button.style.fontSize = ".875rem"
  button.style.backgroundClip = "padding-box";
  button.style.position = "relative";
  button.style.display = "flex";
  button.style.alignItems = "center";

  button.addEventListener("click", openFileChooser);

const regenerateButton = document.querySelector(".btn-neutral");

if (regenerateButton) {
  regenerateButton.parentNode.insertBefore(button, regenerateButton);
} else {
  console.error("Could not find the regenerateButton element.");
}


  regenerateButton.parentNode.insertBefore(button, regenerateButton);
}

function openFileChooser() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.addEventListener("change", handleFileSelection);
  fileInput.click();
}

function handleFileSelection(event) {
  const file = event.target.files[0];

  const reader = new FileReader();

  reader.onload = function (event) {
    const fileContents = event.target.result;

    const textarea = document.getElementById("prompt-textarea");
    textarea.value = fileContents;

    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  reader.readAsText(file);
}

createUploadButton();

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.code === "Space") {
    openFileChooser();
  }
});
