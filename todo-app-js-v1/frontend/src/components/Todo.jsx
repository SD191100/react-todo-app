import { Button, Card, Typography } from "@mui/material";
import axios from "axios";

function Todo(props) {
    // Add a delete button here so user can delete a TODO.
    const handleDeleteTodo = () => {
        const deleteData = async () => {
            const res = await axios.delete(`http://localhost:3000/todos/${props.id}`);
            console.log(res.data)
        }
        deleteData();
    }
    return (
        <>
            <div>
                <Card style={{ padding: '10px', margin: '10px', display: "flex", justifyContent: "space-between" }} >
                    <div>
                        <Typography variant="body2" gutterBottom component="div"><strong>{props.title}</strong></Typography>
                        <Typography variant="subtitle" gutterBottom component="div">{props.description}</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }} >
                        <Button style={{ borderRadius: '3px' }} variant="outlined" onClick={handleDeleteTodo} >Delete</Button>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Todo;
// Enjoy Coding

// return (
//     <>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '60px' }}>
//         <Card style={{ paddingLeft: 10, paddingRight: 10, maxHeight: '800px', overflowY: 'auto' }}>
//           <Typography style={{ color: '#181818', marginTop: 20, fontWeight: 'bolder' }} variant="h3" component="div" gutterBottom>todos_</Typography>
//           <Card style={{ display: 'flex', alignItems: 'center' }}>
//             <Card style={{ marginRight: '3px' }}>
//               <TextField size='small' id="Title" label="Title" variant="outlined" color="secondary" />
//             </Card>
//             <Card>
//               <TextField size='small' id="Description" label="Description" variant="outlined" color="secondary" />
//             </Card>
//             <Card>
//               <Button style={{ borderRadius: '3px' }} variant="outlined" onClick={handleAddTodo}>Add Todo</Button>
//             </Card>
//           </Card>
//           <hr style={{ borderColor: 'lightgray' }} />
//           <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
//             {todos.map((todo) => {
//               return (
//                 <Todo key={todo._id} id={todo._id} title={todo.title} description={todo.description} />
//               )
//             })}
//           </div>
//         </Card>
//       </div>
//     </>
//   )