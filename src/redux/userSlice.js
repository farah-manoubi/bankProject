const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    firstName: null,
    lastName: null,
    token: null,
    email: null,
    password: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userConnected: (state, action) =>{
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        saveToken: (state, action) =>{
            state.token = action.payload
        },
        userSignOut: (state) =>{
            state.firstName = null
            state.lastName = null
            state.token = null
            localStorage.clear()
        },
        userRemember: (state, action) =>{
           
            state.email = action.payload.email
            state.password = action.payload.password

        }
        
    }
})

export const {userConnected, saveToken, userSignOut, userRemember} = userSlice.actions;
export default userSlice.reducer;