import axios from 'axios'

const API=axios.create({baseURL:"https://socialmediaserver-dqlu.onrender.com"})

export const getUser=(userid)=>API.get(`/user/${userid}`)