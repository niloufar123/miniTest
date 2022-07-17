import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const Allforms=useSelector(s=>s.data.forms)

  return (
    <div>
      {Allforms ? Allforms.map((item,index)=>
        <Navbar bg="light" key={index} className='mt-4'>
        <Container>
          <Navbar.Brand href={'/' + item.path}>{item.form}</Navbar.Brand>
        </Container>
      </Navbar>
      ):''
        }
 
    </div>
  )
}

export default Home
