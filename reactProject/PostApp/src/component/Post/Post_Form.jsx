import  { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import Input from '../Input'
import { useNavigate } from 'react-router-dom'
//import { Logo } from '../header'
import Select from '../Select'
import service from '../../appWrite_services/dtabaseService'
import  RTE from '../Rte.jsx'
import { useSelector } from 'react-redux'
function Post_Form({post}) {
    const {register,handleSubmit,watch,setValue,control,getValues}=useForm({
        defaultValues:{
            title:post?.title||'',
            slug:post?.slug||'',
            content:post?.content||'',
            status:post?.status||'',
        }
    });
    const navigate=useNavigate();
    const userData=useSelector(state=>state.userData)
    const submit =async(data)=>{
        const file=await data.image[0]?service.upload(data.image[0]):null
        if(file){
            service.deleteFile(post.image)
        }
        const dbPost=await service.updateDatabase(post.$id,{
            ...data,image:file?file.$id :undefined
             })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
            else{
                const file= await service.upload(data.image[0])
                if(file){
                    const fileId=file.$id;
                    data.image=fileId
                    await service.createPost({...data,
                        userData:userData.$id,
                    }) 
                    if(dbPost){
                        navigate(`/post${dbPost.$id}`)
                    }

                }
            }
       
    }
    const slugTransform=useCallback((value)=>{
        if(value&& typeof value==String){
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-");
        }
        return ""
    },[])
    useEffect(()=>{
        const subscription=watch((value,{name})=>{
            if(name==='title'){
                setValue('slug',slugTransform(value.title,{shouldValidate:true}))
            }
        })
        return ()=>{
            subscription.unsubscribe
        }
    },[watch,slugTransform,setValue])
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
    <div className="w-2/3 px-2">
        <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
    </div>
    <div className="w-1/3 px-2">
        <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
        {post && (
            <div className="w-full mb-4">
                <img
                    src={service.getFilePreview(post.image)}
                    alt={post.title}
                    className="rounded-lg"
                />
            </div>
        )}
        <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
            {post ? "Update" : "Submit"}
        </Button>
    </div>
</form>
  )
}

export default Post_Form