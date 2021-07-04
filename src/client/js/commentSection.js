const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const ul = document.getElementById("Ul")
const li = document.querySelector(".video__comment")
const deleteBtn = document.querySelector(".deleteBtn");


const addComment = (text, id) => {
    const videoComments = document.querySelector(".video__comments ul");
    const newComment = document.createElement("li");
    newComment.dataset.id = id;
    newComment.className = "video__comment";
    const icon = document.createElement("i");
    icon.className = "fas fa-comment";
    const span = document.createElement("span");
    span.innerText = ` ${text}`;
    const span2 = document.createElement("span");
    span2.innerText = "❌";
    span2.className = "deleteBtn"
    span2.onclick = function() {
        ul.removeChild(this.parentNode);
        const response = fetch(`/api/videos/${id}/comment`, { method: "DELETE" })
    }
    newComment.appendChild(icon);
    newComment.appendChild(span);
    newComment.appendChild(span2);
    videoComments.prepend(newComment);
};

const handleSubmit = async(event) => {
    event.preventDefault();
    const textarea = form.querySelector("textarea");
    const text = textarea.value;
    const videoId = videoContainer.dataset.id;
    if (text === "") {
        return;
    }
    const response = await fetch(`/api/videos/${videoId}/comment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });
    if (response.status === 201) {
        textarea.value = "";
        const { newCommentId } = await response.json();
        addComment(text, newCommentId);
    }
};


if (form) {
    form.addEventListener("submit", handleSubmit);
}