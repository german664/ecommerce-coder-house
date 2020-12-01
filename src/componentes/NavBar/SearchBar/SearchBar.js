import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const SearchBar = () => {

    const history = useHistory()
    const [search, setSearch] = useState("")
    const searchHandler = (e) => {
        e.preventDefault()
        if (search) {
            setSearch("")
            history.push(`/search/${search.trim()}`)
        }
    }
    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    return (
        <Form className="d-flex" onSubmit={searchHandler} inline>
            <Form.Control type="text" placeholder="Busca un producto" value={search} className="mr-md-2" onChange={inputHandler}></Form.Control>
            <Button type="submit" variant="outline-success" className="mt-3 mt-md-0 mx-auto">Buscar</Button>
        </Form>
    )
}

export default SearchBar
