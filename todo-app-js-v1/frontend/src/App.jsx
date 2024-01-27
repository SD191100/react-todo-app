/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Card, TextField, Typography } from '@mui/material';
import { ReactTyped } from "react-typed";
import './App.css'
import Todo from './components/Todo';



function App() {
	const [newTodoTitle, setNewTodoTitle] = useState('');
	const [newTodoDescription, setNewTodoDescription] = useState('');
	const [todos, setTodos] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get('http://localhost:3000/todos');
			// console.log(res.data);
			setTodos(res.data);
		}
		fetchData();

		setInterval(() => {
			fetchData();
		}, 1000);
	}, []);

	const handleAddTodo = () => {

		const addData = async () => {
			const body = {
				title: newTodoTitle,
				description: newTodoDescription,
			};

			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const res = await axios.post('http://localhost:3000/todos/', body, config);
			console.log(res.data);
			setNewTodoTitle(' ');
			setNewTodoDescription(' ');
		}
		addData();
	}
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '60px' }}>
				<Card style={{ paddingLeft: 10, paddingRight: 10, maxHeight: '800px', overflowY: 'auto' }}>
					<Card style={{ width: '170px', height: '60px', marginTop: '10px', marginBottom: '10px', paddingTop: '18px', paddingLeft: '9px' }}>
						<Typography style={{ color: '#181818', fontWeight: 'bolder' }} variant="h3" component="div" gutterBottom>
						<ReactTyped cursorChar='_' strings={["todos"]} typeSpeed={140} />
						</Typography>
					</Card>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Card style={{ marginRight: '3px' }}>
							<TextField size='small' id="Title" label={newTodoTitle} variant="outlined" color="secondary" onChange={(e) => setNewTodoTitle(e.target.value)} />
						</Card>
						<Card>
							<TextField size='small' id="Description" label={newTodoDescription} variant="outlined" color="secondary" onChange={(e) => setNewTodoDescription(e.target.value)} />
						</Card>
						<Card style={{ marginLeft: '10px' }} >
							<Button style={{ borderRadius: '3px', }} onClick={handleAddTodo}>Add Todo</Button>
						</Card>
					</div>
					<hr style={{ borderColor: 'white' }} />
					<div style={{ maxHeight: '600px', overflowY: 'auto' }}>
						{todos.map((todo) => {
							return (
								<Todo key={todo._id} id={todo._id} title={todo.title} description={todo.description} />
							)
						})}
					</div>
				</Card>
			</div>
		</>
	)
}






export default App
