var React = require('react');
var ReactDOM = require('react-dom');

//Create a component the React way (ES6 is different)
// render method: is the only Requirement
var TodoComponent = React.createClass({
    render: function () {
        return (                    //so this is JSX. The <div> required to keepp them together
            <div>
                <h1>Todo comp</h1>  
                < p > Name: {this.props.myProps.name } < /p>
                < p > Description: {this.props.myProps.job } < /p>
            </div>
            );
        }
    });
            
var StateComponent = React.createClass({
    getInitialState: function() {

        return {
            todos: ['thing 1', 'thing2','thing3'],
            nowTime : 'Monday'
        }
    },

    render: function () {
    
       setTimeout(function() {
            this.setState({ nowTime: 'August' })
        }.bind(this), 3000);

            //so this is JSX. The div is required to keep them together
        return (                    
            <div id='todo-list'>
                <h1>State comp</h1>
                <p>{this.state.nowTime} </p>
                <ul>
                    <li>{this.state.todos[0]} </li>
                    <li>{this.state.todos[1]} </li>
                    <li>{this.state.todos[2]} </li>                                
                </ul>

            </div>
            );
        }  // render
    });


var myThing= { name: "David", job: "Kind of a god", age: 55}

// reference the div object frm index.html
ReactDOM.render(<TodoComponent myProps={myThing}/>, document.getElementById('todo-wrap'));
ReactDOM.render(<StateComponent myProps={myThing} />, document.getElementById('state-wrap'));