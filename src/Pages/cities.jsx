import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cities() {
    const navigate = useNavigate();
    return (
        <>
            <div>Cities</div>
            <p>This is cities</p>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    )
};

