
fetch("https://petstore3.swagger.io/api/v3/user/user1")
    .then(userData => userData.json())
    .then(userData => console.log(userData))

