import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import AddTaskField from './Components/AddTaskField';
import TaskList from './Components/TaskList';
import Footer from './Components/Footer';

class App extends Component {
    state = {
        tasks: [
            {id: 1,
            content: 'Learn React'},
            {id: 2,
            content: 'Learn Redux'}
        ]
    }

    taskCompleted = (id) => {
        const tasks = this.state.tasks.filter(task => {
            return task.id !== id
        })

        this.setState({
            tasks: tasks
        })
    }

    addTasks = (task) => {
        task.id = Math.random();
        let tasks = [...this.state.tasks, task]
        this.setState({
            tasks: tasks
        })
    }

    render() {
        return ( 
        <div className = "App" >
            <Header />
            <AddTaskField addTasks = {this.addTasks} /> 
            <TaskList tasks = {this.state.tasks} taskCompleted = {this.taskCompleted}/> 
            <Footer />
        </div>
        )

    }
}

export default App;