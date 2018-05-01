# Lab 3 Solutions

## Del 1

### Task 2
I `backgroundReducers.js`:
```javascript
    const initialState = {
    bgColor: 'gold'
};
```

### Task 3
I `userActions.js`:
```javascript
    .then((users) => {
        dispatch({
            type: GET_USERS,
            payload: {
                users
            }
        })
    })
```

### Task 4
I `userReducers.js`:
```javascript
    ...
    case GET_USERS:
        return {
            users: action.payload.users,
            error: null
        };
    ...
```

### Task 5
I `Container.js`:
```javascript
    componentDidMount() {
        this.props.getAllUsers();
    }
```

### Task 6
I `List.js`:
```javascript
    const mapStateToProps = (state) => {
        return {
            items: state.users.users
        };
    }
```

### Task 7
I `Container.js`:
```javascript
    ...
    <List title={'Users'} />
    ...
```

## Del 2
Lösninsförslag till del två går att se genom att byta branch till `solutions`. Här finns även alla uppgifter till alla labbar lösta.
