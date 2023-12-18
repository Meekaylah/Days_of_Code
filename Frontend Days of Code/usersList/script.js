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

const tag = document.querySelector(".tag")
// const tags = document.querySelectorAll(".tags span")

function chooseFilter() {
    if(tag.style.color === "white") {
        tag.style.color = "#000000"
        tag.style.backgroundColor = "white"
        return
    }
    tag.style.backgroundColor = "#849FFF"
    tag.style.color = "white"
}

tag.addEventListener("click", chooseFilter)
