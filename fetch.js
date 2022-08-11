const createPostBtn = document.getElementById('create-btn');

async function fetchAPI(url) {
    const response = await fetch(url);
    const response_json = await response.json();

    if(response.status == 200) {
        return response_json;
    }
}
async function createPost() {
    const name = await fetchAPI("https://randomuser.me/api/");
    const text = await fetchAPI("https://meowfacts.herokuapp.com/");
    const img = await fetchAPI("https://dog.ceo/api/breeds/image/random");

    addPostElements(
        name.results[0].name.first+" "+name.results[0].name.last,
        text.data,
        img.message
    );
}

createPostBtn.onclick = async function () {
    const name = await fetchAPI("https://randomuser.me/api/");
    const text = await fetchAPI("https://meowfacts.herokuapp.com/");
    const img = await fetchAPI("https://dog.ceo/api/breeds/image/random");

    addPostElements(
        name.results[0].name.first+" "+name.results[0].name.last,
        text.data,
        img.message
    );
}