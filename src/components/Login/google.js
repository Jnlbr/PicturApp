import React from 'react'
import Button from '@material-ui/core/Button'

const Google = ({handleLogin, ...props}) => (
    <Button onClick={handleLogin}> SIGN WITH GOOGLE! </Button>
)

export default Google