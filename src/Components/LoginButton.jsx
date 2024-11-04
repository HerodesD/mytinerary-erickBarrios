import React from 'react';

export default function LoginButton() {
    const handleLogin = () => {

        console.log('Login');
    };

    return (
        <button
            onClick={handleLogin}
            className="items-center text-sm md:text-base p-1 md:p-2 h-12 md:h-14 flex bg-blue-600  text-white rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
            <img
                src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
                alt="generic user"
                className="w-8 md:w-10 h-8 md:h-10 rounded-full mr-1 "
            />
            <span className='text-orange-400'>Login</span>
        </button>
    );
}



