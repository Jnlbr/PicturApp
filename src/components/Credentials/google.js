import React from 'react'

const Google = ({handleLogin, ...props}) => (
    <button onClick={handleLogin}> Sign with a Google Account! </button>
)

export default Google