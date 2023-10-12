const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(user => user.gender === gender);
    return filteredUsers.length ? filteredUsers.reduce((acc, user) => acc + user.age, 0) / filteredUsers.length : 0;
} 