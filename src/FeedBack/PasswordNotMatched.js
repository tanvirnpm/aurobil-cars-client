import React from 'react';

const PasswordNotMatched = ({setPasswordNotMatched}) => {
    return (
        <div className="alert alert-danger alert-dismissible fade show mt-3" role="alert">
            <i className="bi bi-exclamation-circle-fill"></i> Password Not Match.
            <button onClick={()=>setPasswordNotMatched(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
};

export default PasswordNotMatched;