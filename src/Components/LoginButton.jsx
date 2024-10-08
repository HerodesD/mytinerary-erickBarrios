import React from 'react';

export default function LoginButton() {
    const handleLogin = () => {
        // Aquí puedes agregar la lógica de autenticación
        console.log('Login');
    };

    return (
        <button onClick={handleLogin} className="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <img
                src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
                alt="generic user"

                className="w-10 h-10 rounded-full mr-2" />
            <h1>Login</h1>
        </button>
    );
}


