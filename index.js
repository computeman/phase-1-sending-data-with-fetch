function submitData(userName, userEmail) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    }),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((data) => {
      const newId = data.id;
      const newElement = document.createElement("p");
      newElement.textContent = newId;
      document.body.appendChild(newElement);
      return data;
    })
    .catch((error) => {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = error.message;
      document.body.appendChild(errorMessage);
    });
}