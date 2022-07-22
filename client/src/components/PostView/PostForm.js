import './PostForm.css';
import Header from './Header';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PostForm = (props)=>{
    const [fileValue , setFileValue] = useState('');
    const [inputName,setInputName] = useState('');
    const [inputLocation, setInputLocation] = useState('');
    const [inputDescription,setInputDescription] = useState('');
    const [url ,setUrl] = useState('')
    const [isactive,setactive] = useState(false);
    
    const history = useHistory();
    const fileValueHandler = (e)=>{
        setFileValue(e.target.files[0]);
    }

    useEffect(()=>{
        if(fileValue.length !== 0 ){
            const data = new FormData();
            data.append('file',fileValue)
            data.append('upload_preset','insta-clone')
            data.append('cloud_name','insta-data')
            const imagefunc = async ()=>{
                    try{
                       const res = await axios.post('https://api.cloudinary.com/v1_1/insta-data/image/upload',
                       data)
                        
                        console.log(res.data.url)
                        setUrl(res.data.url) 
                        setactive(true)
                    }
                    catch(err){
                        console.log(err)
                    }
            }
                imagefunc();
        }
    },[fileValue])

    
    const nameChangeHandler = (e)=>{
        setInputName(e.target.value);
        
    }
    const locationChangeHandler = (e)=>{
        setInputLocation(e.target.value);
      
    }
    const DescriptionChangeHandler = (e)=>{
        setInputDescription(e.target.value);
        
    }
    
   
    
    const formSubmitHandler = (e)=>{
           e.preventDefault()
            const like = Math.floor(Math.random()*1000)
            const sendData = async ()=>{
                    try{
                        const res = await axios.post('https://instaclone-server-demo.herokuapp.com/addpost',
                        {
                         name:inputName,
                         location:inputLocation,
                         likes:like,
                         description:inputDescription,
                         image:url
                        }) 
                         console.log(res.data ) 
                     }
                     catch(err){
                         console.log(err)
                     }  
           history.push('/postview')           
        }
        sendData();
          
            
    }

   
    return (
        <>
        <Header/>
        <div className="box">
            <div className="head">
                <span>POST DETAILS</span>
            </div>
            <div className="inner_box">
                <form onSubmit={formSubmitHandler} encType='multipart/form-data' >
                <div className='mar browse'>
                    <input type="file" name="image" className='customfile' onChange={fileValueHandler} required/>
                </div>
                <div className='mar line-2'>
                    <input className='name' type="text" name='author' placeholder='Author' value={inputName} onChange={nameChangeHandler} required/>
                    <input className='name' type="text" name='location' placeholder='Location'  value={inputLocation} onChange={locationChangeHandler} required/>
                </div>
                <div className='mar'>
                    <input className='description' type="text" placeholder='Description'  value={inputDescription} onChange={DescriptionChangeHandler} required/>
                </div>
                <div className='mar post'>
                <button className='bt' type='submit' disabled={!isactive} >Post</button>
                </div>
                </form>
               
            
            </div>
        </div>
        </>
    )
}
export default PostForm;