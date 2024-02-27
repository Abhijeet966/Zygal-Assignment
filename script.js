document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "/page2.html";
        } else {
          alert("Invalid credentials. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
