import axios from "axios";
import { BASE_URL } from "../constants/url";

const token = localStorage.getItem('token')

export const getPostAll =(salvarPosts)=>{
    axios.get(`${BASE_URL}/post/all`)
    .them((response)=>{
        salvarPosts(response.data)
    })
    .catch((err) =>{console.log(err)})
}

export const createPost = (title, content, image, hashtag) =>{
    return new Promise((resolve, reject)=>{
        let body ={
            'title':title,
            'content': content,
            'image': image,
            'hashatag': hashtag,
        }

        axios.post(`${BASE_URL}/post/create`, body, {headers:
        {}})
    })
}