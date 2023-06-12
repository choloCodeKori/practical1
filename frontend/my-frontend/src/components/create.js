// Filename - Create.js
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './data';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
	// Making usestate for setting and
	// fetching a value in jsx
	const [country, setcountry] = useState('');
	const [capital, setcapital] = useState('');

	// Using useNavigation for redirecting to pages
	let history = useNavigate();

	// Function for creating a post/entry
	const handelSubmit = (e) => {
		e.preventDefault(); // Prevent reload

		const ids = uuid() // Creating unique id
		let uni = ids.slice(0, 8) // Slicing unique id

		// Fetching a value from usestate and
		// pushing to javascript object
		let a = country, b = capital
		array.push({ id: uni, Country: a, Capital: b })
        console.log(a, b);
        axios({
            method: "post",
            url: "/create/",
            data: { id: uni, Country: a, Capital: b },
            headers: { "Content-Type": "multipart/form-data" },
          })
          .catch(function (error) {
            console.log(error);
       });
       
		// Redirecting to home page after creation done
		history('/')
	}

	return (
		<div >
			<Form className="d-grid gap-2"
				style={{ margin: '15rem' }}>

				{/* Fetching a value from input textfirld
					in a setcountry using usestate*/}
				<Form.Group className="mb-3"
					controlId="formBasicName">
					<Form.Control onChange=
						{e => setcountry(e.target.value)}
						type="text"
						placeholder="Enter Country Name" required />
				</Form.Group>

				{/* Fetching a value from input textfirld in
					a setcapital using usestate*/}
				<Form.Group className="mb-3"
					controlId="formBasicAge">
					<Form.Control onChange=
						{e => setcapital(e.target.value)}
						type="text"
						placeholder="Capital" required />
				</Form.Group>

				{/* handing a onclick event in button for
					firing a function */}
				<Button
					onClick={e => handelSubmit(e)}
					variant="primary" type="submit">
					Submit
				</Button>

				{/* Redirecting back to home page */}
				<Link className="d-grid gap-2" to='/'>
					<Button variant="info" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	)
}

export default Create
