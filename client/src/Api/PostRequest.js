import axios from 'axios'

//base url

const API=axios.create({baseURL:"https://socialmediaserver-dqlu.onrender.com"})

//get request for fetching posts

export const getTimeLinePosts=(id)=>API.get(`/post/${id}/timeline`)


//put request for like/unlike
export const likePost=(id,userid)=>API.put(`/post/${id}/like`,{userid:userid})