import axios from "axios";

export const getApi = async (url: string) => {
    const result = await axios.get(url, get())
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(
                "error api get...................................................",
                error
            );
            return { statusCode: 400 };
        });
    return result;
}

export const postApi = async (url: string, data: any) => {
    const result = await axios.post(url, post(data))
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(
                "error api get...................................................",
                error
            );
            return { statusCode: 400 };
        });
    return result;
}

export const putApi = async (url: string, data: any) => {
    const result = await axios.put(url, put(data))
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(
                "error api get...................................................",
                error
            );
            return { statusCode: 400 };
        });
    return result;
}

export const deleteApi = async (url: string) => {
    const result = await axios.delete(url, remove())
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(
                "error api get...................................................",
                error
            );
            return { statusCode: 400 };
        });;
    return result;
}

const get = () => {
    return {
        headers: authHeaders(),
        method: "GET",
    };
}

const put = (data: any) => {
    return {
        method: "PUT",
        headers: authHeaders(),
        body: JSON.stringify(data),
    };
}

const post = (data: any) => {
    return {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify(data),
    };
}

const remove = () => {
    return {
        method: "DELETE",
        headers: authHeaders(),
    };
}

const authHeaders = () => {
    const headers = {
        'Content-Type': "application/json; charset=UTF-8",
        //'Authorization': "Bearer " + sessionStorage.getItem("token"),
    };
    return headers;
}