import React, {Component} from 'react';


class addTaskField extends Component {
    state = {
        content: ''
    }

    addText = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    submitText = (e) => {
        e.preventDefault();
        this.props.addTasks(this.state);
        this.setState({content: ''})
    }
    
    
    render(){
    return(
        <div>
          <form className="form" onSubmit={this.submitText}>
          <input type="text" className="text-todo" placeholder="New to-do" onChange={this.addText} value={this.state.content} />
          <input type="submit" className="button" value="+" />
          </form>
        </div>
    );
}
}



export default addTaskField;