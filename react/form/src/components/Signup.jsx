import { useState } from 'react';
import '../App.css';


function Signup({formData, handleOnChange, handleSubmit, handleBlur, handleFocus, isValid}) {    
    return (
        <>
            <div className="main">
                <div className="content">
                    <h1>Signup</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="">Username</label>
                        <input type="text" className={!isValid.username ? 'invalid' : ''} onBlur={handleBlur} onFocus={handleFocus} placeholder="username" value={formData.username} name="username" onChange={handleOnChange}/>
                        {!isValid.username ? <span className='err-msg'>cannot be less than 6 characters</span> : ''}
                        <label htmlFor="">Email</label>
                        <input type="text" className={!isValid.email ? 'invalid' : 'valid'} onBlur={handleBlur} onFocus={handleFocus} placeholder="email" value={formData.email} name="email" onChange={handleOnChange} />
                        {!isValid.email ? <span className='err-msg'>email must contain @ in it</span> : ''}
                        <label htmlFor="">Password</label>
                        <input type="text" className={!isValid.password ? 'invalid' : 'valid'} onBlur={handleBlur} onFocus={handleFocus} placeholder="password" value={formData.password} name="password" onChange={handleOnChange} />
                        {!isValid.password ? <span className='err-msg'>Enter the special character and number</span> : ''}
                        <input type='submit' className='form-btn' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;