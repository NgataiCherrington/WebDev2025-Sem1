// this is an array of an object called comments
const comments = [
    {
        name: "Ngatai",
        text: "Ngatai is cool"
    },
    {
        name: "Caitlin",
        text: "Caitlin is cool"
    },
    {
        name: "Eden",
        text: "Eden is the best"
    }
]

// this function will display comments using a for loop
function displayComments (comments) {
    for (comment of comments) {
        displayNewComment(comment);
                    
    }
}
displayComments(comments);

function getFormData(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const text = document.querySelector("#comment-text").value;
    const comment = {
        name: name,
        text: text
    }
    displayNewComment(comment);
}

function displayNewComment(comment) {
    document.querySelector("#comment-section").innerHTML += `
        <p>${comment.name} says: ${comment.text}</p>
        `;
}

const btn = document.querySelector("button")
btn.addEventListener("click", getFormData)

