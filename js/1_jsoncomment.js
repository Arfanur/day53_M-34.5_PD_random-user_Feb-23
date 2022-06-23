const loadComments = async () => {
    const commentsDiv = document.getElementById('comments');
    commentsDiv.textContent = '';
    const url = 'https://jsonplaceholder.typicode.com/comments';
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayComments(data));

    const res = await fetch(url);
    const data = await res.json();
    displayComments(data);
};
// loadComments();

const displayComments = comments => {
    const commentsDiv = document.getElementById('comments');
    commentsDiv.textContent = '';
    const singleCommentDiv = document.getElementById('single-comment');
    singleCommentDiv.textContent = '';

    // for(const comment of comments){
    //     console.log(comment);
    // }
    comments.forEach(comment => {
        // console.log(comment);
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="loadCommentById(${comment.id})" class="border d-inline-block my-1 py-2 rounded w-100">
            <h4><span class="text-success">Id:</span> <span class="text-warning">${comment.id}</span></h4>
            <h5><span class="text-success">Name:</span> ${comment.name}</h5>
            <h5><span class="text-success">Email:</span> ${comment.email}</h5>
        </div>
        `;
        commentsDiv.appendChild(div);
    });
};

const loadCommentById = async (commentId) => {
    // console.log(commentId);

    const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displaySingleComment(data);
};

const displaySingleComment = comment => {
    // console.log(comment);

    const singleCommentDiv = document.getElementById('single-comment');
    singleCommentDiv.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div onclick="loadCommentById(${comment.id})" class="border my-1 py-2 rounded position-fixed bg-secondary text-white">
        <h4><span class="text-warning">Id:</span> <span class="text-info">${comment.id}</span></h4>
        <h5><span class="text-warning">Name:</span> ${comment.name}</h5>
        <h5><span class="text-warning">Email:</span> ${comment.email}</h5>
        <h6><span class="text-warning">Body:</span> ${comment.body}</h6>
    </div>

    `;
    singleCommentDiv.appendChild(div);
};