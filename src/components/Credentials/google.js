import React from 'react'

const Google = ({handleClick, ...props}) => (
    <button onClick={handleClick}> Sign with a Google Account! </button>
)

export default Google