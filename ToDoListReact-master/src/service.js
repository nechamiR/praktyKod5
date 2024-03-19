import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5096/';

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('Error:', error.response.data); 
    return Promise.reject(error);
  }
);
export default {
  getTasks: async () => {
    const result = await axios.get()    
    return result.data;
  },

  addTask: async(name)=>{
    // Console.console.log(`Error saving task with name: ${name}`);
    const result=await axios.post(`todoitems/${name}`)

    return {name};
  },

  setCompleted: async(id, isComplete)=>{
    const result=await axios.put(`todoitems/${id}/${isComplete}`)
    return {id,isComplete};
  },

  deleteTask:async(id)=>{
    
    const result=await axios.delete(`todoitems/${id}`)
return result.data;
  }
};
