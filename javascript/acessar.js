function simular(event) {
    event.preventDefault(); 

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!firstname || !lastname || !email || !number || !password || !confirmPassword) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (password !== confirmPassword) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'As senhas não coincidem.';
        errorMsg.style.color = 'red';
        document.getElementById('confirmPassword').parentNode.appendChild(errorMsg);
        return;
    }

    const user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        number: number,
        password: password
    };
    localStorage.setItem('user', JSON.stringify(user));

    window.location.href = "/index.html";
}

document.querySelector('.continue-button button').addEventListener('click', simular);
