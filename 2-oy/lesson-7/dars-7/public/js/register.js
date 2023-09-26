btn.onclick = async (e) => {
  if (firstname.value && username.value && email.value) {
    let response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        firstname: firstname.value,
        username: username.value,
        email: email.value,
      }),
    });
    let res = await response.json();
    console.log(res);
    if (res.location) {
      window.location = "/" + res.location;
    }
  }
};
