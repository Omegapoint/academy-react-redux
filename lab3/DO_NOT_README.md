# Lab 3 Solutions

## Del 1

### Task 2

I `backgroundColorSlice.ts`:

```javascript
const initialState: BackgroundState = {
  bgColor: "gold",
};
```

### Task 3

I `avatarSlice.ts`:

```javascript
const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    updatedAvatar: (state, action: PayloadAction<string>) => {
      state.currentAvatar = action.payload;
    },
  },
});
```

### Task 4

I `avatarSlice.ts`:

```javascript
const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    updatedAvatar: (state, action: PayloadAction<string>) => {
      state.currentAvatar = action.payload;
    },
    resetAvatar: (state) => {
      state.currentAvatar = null;
    },
  },
});
...
...
export const { updatedAvatar, resetAvatar } = avatarSlice.actions;
```

### Task 5

I `AvatarPicker.tsx`:

```javascript
const dispatch = useDispatch();

const handleOnClick = (avatar: string) => {
  dispatch(updatedAvatar(avatar));
};

const handleOnReset = () => {
  dispatch(resetAvatar());
};
```

### Task 6

I `NavBar.tsx`:

```javascript
const avatar = useSelector(selectCurrentAvatar);
```

## Del 2

Lösningsförslag till del två går att se genom att byta branch till `solutions`. Här finns även alla uppgifter till alla labbar lösta.
