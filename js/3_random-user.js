document.getElementById('error-message').style.display = 'none';
const loadUsers = async () => {
    const url = 'https://randomuser.me/api/';
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUsers(data.results[0]);
    }
    catch (error) {
        document.getElementById('error-message').style.display = 'block';
    }
};
const displayUsers = user => {
    // console.log(user.location);
    const userDetails = document.getElementById('user-details');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="my-2">
        <img src="${user.picture.large}">
        <h4>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h4>
        <p>
            <span class="text-info">Country: </span>${user.location.country};<br>

            <span class="text-info">City: </span>${user.location.city};<br>

            <span class="text-info">State: </span>${user.location.state};<br>

            <span class="text-success">Location: </span><br>
            <span class="text-info">Street Number: </span>${user.location.street.number}, <span class="text-info">Street Name: </span>${user.location.street.name};<br>

            <span class="text-success">Coordinates: </span><br>
            (<span class="text-info">Latitude: </span>${user.location.coordinates.latitude}, <span class="text-info">longitude: </span>${user.location.coordinates.longitude});<br>

            <span class="text-info">PostCode: </span>${user.location.postcode};<br>

            <span class="text-success">TimeZone: </span><br>
            (<span class="text-info">Description: </span>${user.location.timezone.description}, <span class="text-info">Offset: </span>${user.location.timezone.offset}

        </p>
    </div>
    `;
    userDetails.textContent = '';
    userDetails.appendChild(div);
};