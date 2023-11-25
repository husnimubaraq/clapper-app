import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Device from 'expo-device';

const baseURL = "https://ekentongan.000webhostapp.com/dmiapi"

export const axiosInstance = axios.create({
  baseURL,
})

export const axiosPublicInstance = axios.create()

axiosInstance.interceptors.request.use(
  async (config) => {
      
    let dataAuth: any = await AsyncStorage.getItem("authStore")

    if(dataAuth){
        const token = JSON.parse(dataAuth).state.token

        if(token){
          config.params = {
            ...config.params,
            token: token
          }
        }
    }
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
      if(response.data.status !== 'success'){
          return Promise.reject(response.data);
      }
      
      return response
  },
  (error) => {

    return Promise.reject(error.response);
  }
)