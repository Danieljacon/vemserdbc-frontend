const contentPost = document.querySelector(".content");
const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
let data;

const createPost = () => {

}

const getPosts = async () => {
  try {
    const response = await fetch(url);
    data = await response.json();

    data.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
                <img src="${post.url}" alt="" class="post-image">
                <p class="post-text">${post.title}</p>
            `;
      contentPost.appendChild(postElement);
    });
  } catch (error) {
    console.log(error);
  }
};

getPosts();
