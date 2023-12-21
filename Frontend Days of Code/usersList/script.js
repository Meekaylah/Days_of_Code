const card = document.querySelector(".list")
fetch("./data.json")
    .then(res => res.json()
    .then(data => {
        data.forEach(post => {
            card.insertAdjacentHTML("beforeend", 
                `<div class="card">
                    <div class="profile">
                        <div id="pfp" style="background-image: url(${post.avatar});"></div>
                        <div class="info">
                            <h3 class="name">${post.user}</h3>
                            <span class="state">${post.state}</span>
                            <div class="ptags">
                                ${post.tags.map(tag => `<span>${tag}</span>`).join("")}
                            </div>
                        </div>
                    </div>
                </div>`
            )
        })
    })
)

const tags = document.querySelectorAll(".tag");
let selected = null;

function addStyle(tag) {
    tag.classList.add("selected");
    selected = tag;
}

function removeStyle(tag) {
    tag.classList.remove("selected");
    selected = null;
}

tags.forEach(tag => {
    tag.addEventListener("click", () => {
        if(tag.classList.contains("selected")) {
            removeStyle(tag);
        } else if (selected!==null) {
            removeStyle(selected);
            addStyle(tag);
        } else {
            addStyle(tag);
        }
    });
});