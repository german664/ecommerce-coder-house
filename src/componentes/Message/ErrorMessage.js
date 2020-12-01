import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = ({ children }) => {
    return (

        <Alert className="text-center p-4 border text-danger w-75 border-danger">
            <h4>{children}</h4>
        </Alert>
    )
}

export default ErrorMessage
