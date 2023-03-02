//find the user by Username

function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user){
      return user.username === username;
    })
  }

//remove the user

  function removeUser(usersArray, username) {
    let foundIndex = usersArray.findIndex(function(user){
      return user.username === username;
    })
    if(foundIndex === -1) return;
  
    return usersArray.splice(foundIndex,1)[0];
  }