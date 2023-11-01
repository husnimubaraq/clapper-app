import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Device from 'expo-device';

const baseURL = ""
export const AUTHORIZATION = ""

export const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const extendedFormData = new FormData();

    const token = '12345'
    const deviceId = Device.osBuildFingerprint ?? ''

    for (const pairs of Object.values(config.data)) {
        for(const [key, value] of pairs as any){
            extendedFormData.append(key, value);
        }
    }
      
    let dataAuth: any = await AsyncStorage.getItem("authStore")

    if(dataAuth){
        dataAuth = JSON.parse(dataAuth).state.auth

        if(dataAuth.id){
          extendedFormData.append("data[member][id]", dataAuth.id);
          extendedFormData.append("data[member][name]", dataAuth.name);
          extendedFormData.append("data[member][nickname]", dataAuth.nickname);
          extendedFormData.append("data[member][poin]", dataAuth.poin);
          extendedFormData.append("data[member][member_card]", dataAuth.member_card);
          extendedFormData.append("data[member][token_device]", dataAuth.token_device);
        }
    }

    config.headers.Authorization = AUTHORIZATION
    config.headers['Content-Type'] = 'multipart/form-data'

    console.log('extendedFormData: ', extendedFormData)
    
    config.data = extendedFormData;
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
    (response) => {
        console.log('response: ', response.data)
        if(response.data.code !== '00'){
            return Promise.reject(response.data);
        }
        
        return response
    }
)
