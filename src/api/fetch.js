import AsyncStorage from "@react-native-async-storage/async-storage"
import { API, BASE_URL } from "."

export const fetchData = async (endPoint, setError) => {
    const accessToken = await AsyncStorage.getItem('token')
    console.log(accessToken)
    try {
        const res = await fetch(`${BASE_URL}${endPoint}`, {
            method: "get",
            headers: { authorization: `${accessToken}` },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        setError(error)
        console.log('error happen in the fetch get auth method', error);
    }
    finally {
        console.log("Final");
    }
}
