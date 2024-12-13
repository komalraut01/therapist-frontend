import React from "react";
function PatientLogin() {
    return (
        <body>
    <div className="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit">Login</button>
        </form>
        <p id="error" className="error-message"></p>
    </div>
    <script src="script.js"></script>
</body>

       
    )
}
export default PatientLogin;