# Lab 3 Solutions

## Del 1

### Task 2

I `backgroundReducers.js`:

```javascript
const initialState = {
  bgColor: "gold",
};
```

### Task 3

I `userActions.js`:

```javascript
    .then((users) => {
        dispatch({
            type: USERS_RECEIVED,
            payload: users
        })
    })
```

### Task 4

I `userReducers.js`:

```javascript
    ...
    case USERS_RECEIVED:
        return {
            all: action.payload,
            error: null
        };
    ...
```

### Task 5

I `Container.js`:

```javascript
useEffect(() => {
  dispatch(getAllUsers());
}, []);
```

### Task 6

I `List.js`:

```javascript
const users = useSelector((state) => state.users.all);
```

## Del 2

Lösningsförslag till del två går att se genom att byta branch till `solutions`. Här finns även alla uppgifter till alla labbar lösta.
