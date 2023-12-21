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
    tag.style.color = 'rgb(255, 255, 255)';
    tag.style.backgroundColor = 'rgb(132, 159, 255)';
    selected = tag;
}

function removeStyle(tag) {
    tag.style.color = 'rgb(0, 0, 0)';
    tag.style.backgroundColor = 'rgb(255, 255, 255)';
    selected = null;
}

tags.forEach(tag => {
    tag.addEventListener("click", () => {
        const color = window.getComputedStyle(tag).getPropertyValue("background-color");
        
        if(color === "rgb(132, 159, 255)") {
            removeStyle(tag);
        } else if (selected!==null) {
            const selectedColor = window.getComputedStyle(selected).getPropertyValue("background-color");
            if (selectedColor === "rgb(132, 159, 255)") {
                removeStyle(selected);
                addStyle(tag);
            }
        } else {
            addStyle(tag);
        }
    });
});