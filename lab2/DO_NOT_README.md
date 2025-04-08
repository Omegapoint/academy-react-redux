# Lab 2 Solutions

## Task 2

I `App.tsx`:

```typescript
<List title="Users" items={/*TODO: Task 4 */ []} />
```

## Task 3

I `App.tsx`:

```typescript
const changeBackgroundColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const color = e.target.value;
  setBackgroundColor(color);
};
```

## Task 4

I `App.tsx`:

```typescript
<List title={"Users"} items={users} />
```

## Task 6

I `List.tsx`:

```typescript
    render() {
        ...
        {
            items.map((item) => (
                <li className="list-group-item" key={item.id}>{item.name}</li>
            ))
        }
        ...
    }
```

## Task 7

I `List.tsx`:

```typescript
const onKeyPressed = (e: React.ChangeEvent<HTMLInputElement>) => {
  const searchTerm = e.target.value;
  setSearchTerm(searchTerm);
};
```

## Task 8

I `List.tsx`:

```typescript
    render() {
        const filteredItems: Array<User> = this.filterListItemsBySearchTerm(searchTerm);
        ...
        {filteredItems.length > 0 &&
            filteredItems.map((item) => (
                <li className="list-group-item" key={item.id}>{item.name}</li>
            ))
        }
        ...
    }
```
