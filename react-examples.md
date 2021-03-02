# Kodexempel från teoridelen

## Att bygga en reactkomponent

```javascript
//MyComponent.js
import React from "react";

const MyComponent = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <hr />
      <p>{content}</p>
      <footer>Copyright &copy; React 2018</footer>
    </div>
  );
};

export default MyComponent;
```

## Konsumera komponent

```javascript
//MyComponent.js
import React from "react";
import Hello from "./Hello";

const MyComponent = () => {
  return (
    <div className="container">
      <Hello title="hello opkoko" content="React is awesome!" />
    </div>
  );
};

export default MyComponent;
```

## Component state

```javascript
import React, { useState } from "react";

const ComponentWithState = () => {
  const [active, setActive] = useState(true);

  handleClick = (e) => {
    setActive(!active);
  };

  const buttonText = active ? "On" : "Off";
  return (
    <div className="ComponentWithState">
      <p>Click the button!</p>
      <button onClick={handleClick}>Click me!</button>
      <p>{buttonText}</p>
    </div>
  );
};

export default ComponentWithState;
```

## User events

```javascript
import React from "react";

const UserEventComponent = () => {
  const [input, setInput] = useState("");

  const handleOnChange = (event) => {
    const text = event.target.value;
    setInput(text);
  };

  return <input type="text" onChange={handleOnChange} />;
};

export default UserEventComponent;
```

## Map + Keys

```javascript
    import React from 'react';

    const ComponentWithList = (items) => {
            return (
                <h1>Awesome people list</h1>
                <ul>
                    {items.map(item => {
                        return (
                            <li key={item.id}>
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
            );
    }

    export default ComponentWithList;
```

```javascript
//...konsumera ComponentWithList

const items = [
  {
    id: 1,
    name: "Anton",
  },
  {
    id: 2,
    name: "Mathias",
  },
];
<ComponentWithList items={items} />;
```
