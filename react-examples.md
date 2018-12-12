# Kodexempel från teoridelen

## Att bygga en reactkomponent
```javascript
    //MyComponent.js
    import React, { Component } from 'react';

    class MyComponent extends Component {
        render() {
            return (
                <div>
                    <h2>{this.props.title}</h2>
                    <hr />
                    <p>{this.props.content}</p>
                    <footer>Copyright &copy; React 2018</footer>
                </div>
            );
        }
    }

    export default MyComponent;
```

## Konsumera komponent
```javascript
    //App.js
     import React, { Component } from 'react';
    import App from './MyComponent';

    class MyComponent extends Component {
        render() {
            return (
                <div className="container">
                    <MyComponent title="hello opkoko" content="React is awesome!"/>
                </div>
            );
        }
    }

    export default App;
```

## Component state
```javascript
    import React, { Component } from 'react';

    class ComponentWithState extends Component {

        constructor(props) {
            super(props);
            this.state = {
                active: true
            };
        }

        handleClick = () => {
            this.setState({
                active: !this.state.active
            });
        }

        render() {
            const buttonState = this.state.active ? 'On' : 'Off';
            return (
                <div className="ComponentWithState">
                    <p>Click the button!</p>
                    <button onClick={this.handleClick}>Click me!</button>
                    <p>{buttonState}</p>
                </div>
            );
        }
    }

    export default ComponentWithState;
```

## User events
```javascript
    import React, { Component } from 'react';

    class UserEventComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                input: ''
            };
        }

        handleOnChange(event) {
            const text = event.target.value;
            this.setState({
                input: text
            });
        }

        render() {
            return (
                <input
                    type="text"
                    onChange={this.handleOnChange}
                />
            );
        }
    }

    export default UserEventComponent;
```

## Map + Keys
```javascript
    import React, { Component } from 'react';

    class ComponentWithList extends Component {

        render() {
            return (
                <h1>Awesome people list</h1>
                <ul>
                    {this.props.items.map(item => {
                        return (
                            <li key={item.id}>
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
            );
        }
    }

    export default ComponentWithList;
```
```javascript
    //...konsumera ComponentWithList

    const items = [
        {
            id: 1,
            name: "Robert"
        },
        {
            id: 2,
            name: "Mathias"
        }
    ];
    <ComponentWithList items={items} />
```


