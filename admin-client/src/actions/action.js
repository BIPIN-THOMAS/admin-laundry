import axios from '../config/axiosConfig'

export const allUsers = async ()=>{
    try {
        const response = await axios.get('/list_users')
        console.log('success : ',response.data);
        return response.data
    } catch (error) {
        console.log('error : ',error.response.data);
        return error.response.data
        
    }
}



export  const createService=async(formData)=>{
    const headers = {
        'Content-Type':'multipart/form-data',
    }
    try {
        const response = await axios.post('/create_service',formData,{headers})
        console.log('success : ',response.data);
        return response.data
    } catch (error) {
        console.log('error : ',error.response.data);
        return error.response.data
        
    }
}

export const listSevice=async()=>{

    try {
        const response = await axios.get('/all_service')
        console.log('success : ',response.data);
        return response.data
    } catch (error) {
        console.log('error : ',error.response.data);
        return error.response.data
        
    }
}


export const dltservice = async (id) => {
    try {
        const response = await axios.delete(`/delete_service?id=${id}`);
        console.log('Service deleted successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Failed to delete service:', error.response.data);
        return error.response.data;
    }
}