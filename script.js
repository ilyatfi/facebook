
function addPostElements(respName, respText, respImg) {
    const postsSpace = document.querySelector('.right-posts');

    const postBlock = document.createElement('div');
    postBlock.setAttribute("class", "post-block");
    postsSpace.appendChild(postBlock);
    
    const blockHead = document.createElement('div');
    blockHead.setAttribute("class", "block-head");
    postBlock.appendChild(blockHead);

    const authorInfo = document.createElement('div');
    authorInfo.setAttribute("class", "autor-info");
    blockHead.appendChild(authorInfo);

    const userImg = document.createElement('img');
    userImg.setAttribute("class", "user-img");
    userImg.src = "./assets/prof-picture.png";
    authorInfo.appendChild(userImg);

    const userNameWrap = document.createElement('div');
    userNameWrap.setAttribute("class", "user-name-wrap");
    authorInfo.appendChild(userNameWrap);

    const userName = document.createElement('h2');
    userName.setAttribute("class", "user-name");
    userName.innerHTML = respName;
    userNameWrap.appendChild(userName);

    const userActivity = document.createElement('p');
    userActivity.setAttribute("class", "user-activity");
    userActivity.innerHTML = "Yesterday at 14:03";
    userNameWrap.appendChild(userActivity);

    const showMoreBtn = document.createElement('button');
    showMoreBtn.setAttribute("class", "show-more-btn");
    blockHead.appendChild(showMoreBtn);

    const blockContent = document.createElement('div');
    blockContent.setAttribute("class", "block-content");
    postBlock.appendChild(blockContent);

    const postText = document.createElement('p');
    postText.setAttribute("class", "post-text");
    postText.innerHTML = respText;
    blockContent.appendChild(postText);

    const postImg = document.createElement('img');
    postImg.setAttribute("class", "post-img");
    postImg.src = respImg;
    blockContent.appendChild(postImg);
}

const createPostBtn = document.getElementById('create-btn');

createPostBtn.addEventListener('click', (event) => {
  createPost();
});

const end = document.querySelector("#end");

window.addEventListener('load', (event) => {
    createPost();
  });

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        createPost();
      }
    })
  },)
  
observer.observe(end);