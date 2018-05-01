# Lab 2 Solutions

## Task 2
I `App.js`:
```javascript
    <List title={'Users'} items={/*TODO: Task 4 */[]}/>
```

## Task 3
I `App.js`:
```javascript
    changeBackgroundColor = (e) => {
        const color = e.target.value;
		this.setState({
			bgColor: color
		})
	};
```

## Task 4
I `App.js`:
```javascript
    <List title={'Users'} items={this.state.users}/>
```

## Task 6
I `List.js`:
```javascript
    render() {
        ...
        {this.props.items.length > 0 && 
            console.log("ITEMS", this.props.items)
            this.props.items.map((item, index) => (
                <li className="list-group-item" key={index}>{item.name}</li>
            ))
        }
        ...
    }
```

## Task 7
I `List.js`:
```javascript
    onKeyPressed = (e) => {
		this.setState({
			searchTerm: e.target.value
		})
	};
```

## Task 8
I `List.js`:
```javascript
    render() {
        const filteredItems = this.filterListItemsBySearchTerm(this.state.searchTerm);
        ...
        {this.props.items.length > 0 && 
            console.log("ITEMS", this.props.items)
            filteredItems.map((item, index) => (
                <li className="list-group-item" key={index}>{item.name}</li>
            ))
        }
        ...
    }
```
