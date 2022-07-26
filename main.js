const url = 'http://localhost:5500/api';

function getUsers() {
  axios
    .get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch(error => console.error(error));
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then(response => {
      const data = response.data;

      userName.textContent = data.name;
      userId.textContent = data.id;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error));
}

function addNewUser(user) {
  axios.post(url, user)
    .then(response => {
      alertApi.textContent = response.data
    })
    .catch(error => console.error(error));
}

function updateUser(user, id) {
  axios
    .put(`${url}/${id}`, user)
    .then(response => {
      alertApi.textContent = response.data
    })
    .catch(error => console.error(error));
}

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then(response => {
      alertApi.textContent = response.data
    })
    .catch(error => console.error(error))
}

getUsers();
getUser(1);

const newUser = {
  name: 'Pedro Duarte',
  avatar: 'https://github.com/pduartesilva2005.png',
  city: 'Atibaia'
};

// addNewUser(newUser);

const userUpdated = {
  name: 'Jack Quaid',
  avatar: 'https://pbs.twimg.com/profile_images/1536486867201413121/GObYWe5z_400x400.jpg',
  city: 'Los Angeles'
};

updateUser(userUpdated, 1);

deleteUser(3)