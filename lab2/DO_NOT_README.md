# Lab 2 Solutions

## Task 2

I `App.jsx`:

```javascript
<List title="Users" items={/*TODO: Task 4 */ []} />
```

## Task 3

I `App.jsx`:

```javascript
const changeBackgroundColor = (e) => {
  const color = e.target.value;
  setBackgroundColor(color);
};
```

## Task 4

I `App.jsx`:

```javascript
<List title={"Users"} items={users} />
```

## Task 6

I `List.jsx`:

```javascript
    render() {
        ...
        {
            items.map((item, index) => (
                <li className="list-group-item" key={index}>{item.name}</li>
            ))
        }
        ...
    }
```

## Task 7

I `List.jsx`:

```javascript
const onKeyPressed = (e) => {
  const searchTerm = e.target.value;
  setSearchTerm(searchTerm);
};
```

## Task 8

I `List.jsx`:

```javascript
    render() {
        const filteredItems = this.filterListItemsBySearchTerm(searchTerm);
        ...
        {filteredItems.length > 0 &&
            filteredItems.map((item, index) => (
                <li className="list-group-item" key={index}>{item.name}</li>
            ))
        }
        ...
    }
```
