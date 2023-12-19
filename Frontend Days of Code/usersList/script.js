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

// const tag = document.querySelector(".tag")
const tag = document.getElementsByClassName("tag");




for(let i = 0; i < tag.length; i++) {
    let tagID = document.getElementById(tag[i].id);
    // let color = window.getComputedStyle(tag[i]).getPropertyValue("background-color");
    let color = tag[i].style.backgroundColor;
    console.log(color);

    function addStyle() {
        console.log("this and");
        tagID.setAttribute("style", "color:rgb(255, 255, 255); background-color: rgb(132, 159, 255)")
        return
    }

    function removeStyle() {
        console.log("that happened");
        tagID.setAttribute("style", "color: rgb(0, 0, 0); background-color: rgb(255, 255, 255)")
        return
    }

    // tag[i].addEventListener("click", () => {
    //     if(color === "rgb(132, 159, 255)") {
    //         console.log(color, "white");
    //         removeStyle();
    //     } else {
    //         console.log(color, "lavender");
    //         addStyle();
    //     }
    // })

    tag[i].addEventListener("click", () => {
    if(color === "rgb(132, 159, 255)") {
        addStyle();
    } else if(color === "rgb(255, 255, 255)") {
        removeStyle();
    }
})
}

// tag[i].addEventListener("click", () => {
//     if(tag[i].style.backgroundColor === "rgb(132, 159, 255)") {
//         addStyle();
//     } else if(tag[i].style.backgroundColor === "rgb(255, 255, 255)") {
//         removeStyle();
//     }
// })

// for(let i = 0; i < tag.length; i++) {
//     let tagID = document.getElementById(tag[i].id);
//     tag[i].addEventListener("click", () => {
//         if(tagID.style.color = "white") {
//             tagID.style.color = "#000000"
//             tagID.style.backgroundColor = "#ffffff"
//             console.log("this and");
//         } else if(tagID.style.color = "#000000") {
//             console.log("that happened");
//             tagID.style.backgroundColor = "#849FFF"
//             tagID.style.color = "#ffffff"
//         }
        
        
//     })
// }


// console.log(tag[0].id);
// function removeFilter() {
//     if(tag.style.color === "#000000") {
//         tag.style.color = "white"
//         tag.style.backgroundColor = "#849FFF"
//     }
//     tag.style.backgroundColor = "white"
//     tag.style.color = "#000000"
// }

// function chooseFilter() {
//     if(tag.style.color === "white") {
//         tag.style.color = "#000000"
//         tag.style.backgroundColor = "white"
//     }
//     tag.style.backgroundColor = "#849FFF"
//     tag.style.color = "white"
// }

// tag.addEventListener("click", chooseFilter)
