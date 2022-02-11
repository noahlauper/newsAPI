const wrapper = document.querySelector(".wrapper"),
inputPart = document.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input"),
locationBtn = inputPart.querySelector("button"),
arrowBack = wrapper.querySelector("header i");

let api;

inputField.addEventListener("keyup", e => {
    if(e.key == "Enter" && inputField.value != "") {
        RequestNews(inputField.value, "top", "118a60ab92cb4a91a26308c036d20e94");
    }
});

arrowBack.addEventListener("click", () => {
    wrapper.classList.remove("active");
});


function RequestNews(source, sortBy, apiKey)
{
    infoTxt.innerText = "Getting news...";
    infoTxt.classList.add("pending");
    let mainUrl = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=${apiKey}`;

    fetch(mainUrl).then(res => res.json()).then(result => requestDetails(result)).catch(() => {
        infoTxt.innerText = "Something went wrong";
        infoTxt.classList.replace("pending", "error");
    });
}

function requestDetails(info)
{
    if(info.cod == "404" || info.cod == "400")
    {
        infoTxt.classList.replace("pending", "error");
        infoTxt.innerText = `${inputField.value} isn't a news source`;
    }
    else
    {

        for (let i = 0; i < 10; i++)
        {
            
            const title = info.articles[i].title;
            const author = info.articles[i].author;
            const description = info.articles[i].description;

            infoTxt.innerText += "Title: " + title + "\n\nAuthor: " + author + "\n\nDescription: " + description;
            infoTxt.innerText += "\n\n\nNEXT NEWS:\n\n\n";
        }
        
    }
}