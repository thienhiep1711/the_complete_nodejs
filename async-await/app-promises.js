const users = [{
    id: 1,
    name: 'Andrew',
    schoolID: 101
  },
  {
    id: 2,
    name: "David",
    schoolID: 999,
  }
]


const grades = [{
    id: 1,
    grade: 80,
    schoolID: 101
  },
  {
    id: 2,
    grade: 100,
    schoolID: 999,
  },
  {
    id: 3,
    grade: 100,
    schoolID: 101,
  }
];

const getUser = (id) => {
  return new Promise((reslove, reject) => {
    const user = users.find((user) => {
      return user.id === id;
    })

    if (user) {
      reslove(user)
    } else {
      reject(`Unable to find user with id of ${id}`);
    }
  })
}

const getGrade = (schoolID) => {
  return new Promise((reslove, reject) => {
    reslove(grades.filter((grade) => grade.schoolID === schoolID))
  })
}

const getStatus = (userId) => {
  var user;
  return getUser(userId).then((tempUser) => {
    user = tempUser;
    return getGrade(user.schoolID);
  }).then((grades) => {
    //average
    var average = 0;
    // return out string
    if (grades.length > 0) {
      average = grades.map((grade) => grade.grade).reduce((a, b) => {
        return (a + b) / grades.length;
      })
    }

    return `${user.name} has a ${average}% in the class`;

  })
}

const getStatusAlt = async (userId) => {
  const user = await getUser(userId);
  const grades = await getGrade(user.schoolID)

  var average = 0;
  // return out string
  if (grades.length > 0) {
    average = grades.map((grade) => grade.grade).reduce((a, b) => {
      return (a + b) / grades.length;
    })
  }

  return `${user.name} Has a ${average}% in the class`;
}


getStatusAlt(2).then((status) => {
  console.log(status);
}).catch((e) => {
  console.log(e);
})

// getUser(1).then((user) => {
//   console.log(user)
// }).catch((e) => {
//   console.log(e);
// })

// getGrade(999).then((grades) => {
//   console.log(grades)
// }).catch((e) => {
//   console.log(e);
// })

// getStatus(1).then((grades) => {
//   console.log(grades)
// }).catch((e) => {
//   console.log(e);
// })