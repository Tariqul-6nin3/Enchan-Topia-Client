// save a user to database
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

// // Get role
// export const getRole = async email => {
//   const response = await fetch(
//     `${import.meta.env.VITE_API_URL}/users/${email}`
//   );
//   const user = await response.json();
//   return user?.role;
// };
