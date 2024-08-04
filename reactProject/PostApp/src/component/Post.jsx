import React from 'react'
import {Link} from"react-router-dom"
import "../App.css"
import service from '../appWrite_services/dtabaseService'
function Post({$id,title,featureImage}) {
  return (
<Link to={`/post/${$id}`} >
<div  className='w-full bg-gray-100 rounded-xl p-4'>
    <div className='w-full justify-center mb-4'>
        <img src={service.getFilePreview(featureImage)} alt={title} className='rounded-xl'/>
    </div>
</div>
</Link> )
}

export default Post