export const saveUser = (user, photoUrl, displayName) => {
  console.log("this is user", user);
  const currentUser = {
    name: user.name,
    email: user.email,
    image: photoUrl, // Use the provided photoUrl parameter
    displayName: displayName, // Use the provided displayName parameter
    role: "student",
  };

  return fetch(`http://localhost:5000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data, "saved to db");
      return data;
    });
};

export const getRole = async email => {
  const response = await fetch(`http://localhost:5000/users/${email}`);
  const user = await response.json();
  return user?.role;
};

// // become a host
// export const becomeHost = email => {
//   const currentUser = {
//     role: "host",
//   };

//   return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(currentUser),
//   }).then(res => res.json());
// };

// update room status
export const updateStatus = async (id, status) => {
  const response = await fetch(`http://localhost:5000/class/status/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  const data = await response.json();
  return data;
};

// export const deleteClass = async classId => {
//   try {
//     const response = await axios.delete(`/classes/${classId}`);
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };
