const getRandomColor = () => {
    const g = Math.floor(Math.random() * 128) + 128;
    const r = Math.floor(Math.random() * 128) + 128;
    const b = Math.floor(Math.random() * 128) + 128;
    return `rgb(${r}, ${g}, ${b})`;
};

const addButton = document.querySelector(".add-note-button");
const divNotes = document.querySelector(".notes");
addButton.addEventListener("click", () => {
    const divTextArea = document.createElement("div");
    divTextArea.classList.add("textarea-container");

    const notesArea = document.createElement("textarea");
    notesArea.classList.add("notes-textarea");
    notesArea.textContent = "Type a new note here...";
    notesArea.style.backgroundColor = getRandomColor();
    notesArea.addEventListener("click", () => {
        notesArea.textContent = "";
    });
    divTextArea.appendChild(notesArea);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-note-button");
    deleteButton.textContent = "⤫";
    deleteButton.addEventListener("click", () => {
        divTextArea.remove();
    });


    divTextArea.appendChild(deleteButton);
    divNotes.appendChild(divTextArea);
});