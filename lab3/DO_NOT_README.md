# Lab 3 Solutions

## Del 1

### Task 2

I `avatarSlice.js`:

```javascript
const initialState = {
  bgColor: "gold",
};
```

### Task 3

I `avatarSlice.js`:

```javascript
const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    updatedAvatar: (state, action) => {
      state.currentAvatar = action.payload;
    },
  },
});
```

### Task 4

I `avatarSlice.js`:

```javascript
const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    updatedAvatar: (state, action) => {
      state.currentAvatar = action.payload;
    },
    resetAvatar: (state, action) => {
      state.currentAvatar = null;
    },
  },
});
...
...
export const { updatedAvatar, resetAvatar } = avatarSlice.actions;
```

### Task 5

I `AvatarPicker.jsx`:

```javascript
const dispatch = useDispatch();

const handleOnClick = (avatar) => {
  dispatch(updatedAvatar(avatar));
};

const handleOnReset = () => {
  dispatch(resetAvatar());
};
```

### Task 6

I `NavBar.jsx`:

```javascript
const avatar = useSelector(selectCurrentAvatar);
```

## Del 2

Lösningsförslag till del två går att se genom att byta branch till `solutions`. Här finns även alla uppgifter till alla labbar lösta.
