export class UserServiceClient{

  createUser(username, password){
    const user = {
      username: username,
      password: password
    };
    return fetch('https://bhargavi-padhya-mean-server.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      headers: {'content-type': 'application/json'},
      method: 'post',
      credentials: 'include'
    });
  }

  login(username, password){
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://bhargavi-padhya-mean-server.herokuapp.com/api/login', {
      credentials: 'include',
      body: JSON.stringify(credentials),
      headers: {'content-type': 'application/json'},
      method: 'post'
    })
  }

  logout(){
    return fetch('https://bhargavi-padhya-mean-server.herokuapp.com/api/logout', {
      credentials: 'include',
      method: 'post'
    });
  }

  profile(){
    return fetch('https://bhargavi-padhya-mean-server.herokuapp.com/api/profile', {credentials: 'include'})
      .then(response => response.json());
  }

  findUserById(userId){
    return fetch('https://bhargavi-padhya-mean-server.herokuapp.com/api/user' + '/' + userId, {credentials: 'include'})
      .then(response => response.json());
  }

  findCurrentUser(){
    return fetch('https://bhargavi-padhya-mean-server.herokuapp.com/api/profile',{
      credentials:'include',
    })
      .then(response => response.json());
  }

  updateUser(user){
    return fetch('https://bhargavi-padhya-mean-server.herokuapp.com/api/profile', {
      credentials: 'include',
      method: 'put',
      body:JSON.stringify(user),
      headers:{
        'content-type':'application/json'
      }
    })
      .then(response => response.json());
  }

}

