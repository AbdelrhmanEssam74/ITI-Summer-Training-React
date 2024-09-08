import Login from "./components/LoginForm/Login.jsx";
import Register from "./components/RegitserForm/Register.jsx";
import TodoList from "./components/ToDoApp/ToDoApp.jsx";
import './App.css'

function App() {

    return (
        <>
            <h2 className='text-center'>Task 1</h2>
            <Login/>
            <hr/>
            <h2 className='text-center'>Task 2</h2>
            <Register/>
            <hr/>
            <h2 className='text-center'>Task 3</h2>
            <TodoList/>
        </>
    )
}

export default App
