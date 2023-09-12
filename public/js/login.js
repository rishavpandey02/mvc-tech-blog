const loginFormHandler = async (event) => {
    event.precentDefault();

    const usernameEl = document.querySelector('#username-login');
    const passwordEl = document.querySelector('#password-login');

    const response = await fetch ('./api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        DocumentFragment.location.replace('/dashboard');
    } else {
        alert ('Something Wrong')
    }
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler)