import React from 'react'
import { useState,useEffect } from 'react'
import Container from '../Container'
import service from '../../../appWrite_services/dtabaseService'
import { useNavigate, useParams } from 'react-router-dom';
import Post_Form from '../../Post/Post_Form';
function EditPost() {
    const [post ,setPost]=useState([]);
    const{slug}=useParams()
    const navigate=useNavigate()
    useEffect(() => {
        service.getPost(slug).then((post)=>post?setPost(post):navigate('/')).catch((err)=>console.log(err))
    },[slug,navigate])
  return post?<div><Container><Post_Form post={post}></Post_Form></Container></div>:null
}

export default EditPost