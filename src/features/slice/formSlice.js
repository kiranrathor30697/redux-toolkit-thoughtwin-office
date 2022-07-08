import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name:'form',
    initialState:{
        formData:[],
    },
    reducers:{
        form_data : (state,action) => {
            state.formData.push(action.payload);   
        },

        updt_data(state, action) {
            const { id, name, sname } = action.payload;
            const existingUser = state.formData.find((user) => user.id === id);
            console.log(JSON.parse(existingUser.id)+1)
            console.log(id)
            if (existingUser) {
              existingUser.name = name;
              existingUser.sname = sname;
            }
          },
          
        delete_data(state, action) {
            console.log(state.formData)
            const { id, name, sname } = action.payload[0];
            console.log(action.payload[0])

            const data = state.formData.find((user) => user);
            console.log(data.id)
            // console.log(JSON.parse(data.id)+1)
            // console.log(id)
            if (JSON.parse(data.id)+1 === id) {
                return state.formData.filter(user=>JSON.parse(user.id)+1 !== id);
            }
        }
    },
    
})

export default formSlice.reducer;

export const {form_data,delete_data,updt_data} = formSlice.actions

















// const { id, name, sname } = action.payload;
// const data = state.formData.find((user) => user.id === id);
// if (data) {
//         data.name = name;
//         data.sname = sname;
//         }
// if (data) {
//   return state.formData.filter(user=>user.id !== id);
// }


  // console.log('existingUser',existingUser)
            // if (existingUser) {
            //     existingUser.id = '';
            //     existingUser.name = name;
            //     existingUser.sname = sname;
            //   }

            // if (existingUser) {
            //   return state.formData.filter(user=>user.id !== id);
            // }
            // console.log('existingUser',existingUser)






























//             import { createSlice } from "@reduxjs/toolkit";

// export const formSlice = createSlice({
//     name:'form',
//     initialState:{
//         formData:[],
//     },
//     reducers:{
//         form_data : (state,action) => {
//             state.formData.push(action.payload);   
//         },

//         updt_data(state, action) {
//             const { id, name, sname } = action.payload;
//             const existingUser = state.formData.find((user) => user);
//             console.log('-=--=-=-=-updt====',existingUser.id)
//             if (existingUser) {
//               existingUser.name = name;
//               existingUser.sname = sname;
//             }
//           },
          
//         delete_data(state, action) {
//             console.log(state.formData)
//             const { id, name, sname } = action.payload;
//             console.log('++++++++++++',id)
//             const data = state.formData.find((user) => user.id === id);
//             if (data) {
//                 return state.formData.filter(user=>user.id !== id);
//             }
//         }
//     },
    
// })

// export default formSlice.reducer;

// export const {form_data,delete_data,updt_data} = formSlice.actions



