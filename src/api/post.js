import { BASE_URL } from ".";

export const postDataEndPoint = async (endPoint = "", postData, setError = () => { }, setIsLoading = () => { }) => {
    // setError(false);
    try {
        const res = await fetch(`${BASE_URL}${endPoint}`, {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData),
        });
        const data = await res.json();
        // if (data?.success == false)
        //     setError(data.message)
        // console.log(data)
        return data;
    } catch (error) {
        // console.log('error happen in the fetch post method', error);
        // setError(error);
    } finally {
        // setIsLoading(false)
    }
};