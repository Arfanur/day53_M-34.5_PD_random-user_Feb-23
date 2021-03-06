const autoloadComments = async () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayComments(data));

    const res = await fetch(url);
    const data = await res.json();
    DisplayComments2(data);
};
autoloadComments();

const DisplayComments2 = (comments) => {
    const commentsDiv = document.getElementById('autoLoadComments');
    // for(const comment of comments){
    //     console.log(comment);
    // }
    comments.forEach(comment => {
        // console.log(comment);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border d-inline-block my-1 py-2 rounded">
            <h4><span class="text-success">Id:</span> ${comment.id}</h4>
            <h5><span class="text-success">Name:</span> ${comment.name}</h5>
            <h5><span class="text-success">Email:</span> ${comment.email}</h5>
            <h6><span class="text-success">Body:</span> ${comment.body}</h6>
        </div>
        `;
        commentsDiv.appendChild(div);
    });
};