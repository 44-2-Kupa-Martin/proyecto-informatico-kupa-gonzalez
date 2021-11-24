import axios from "axios";
import React, {useState, useRef, useContext} from "react";
import { Context } from "../App";
import { Wrapper } from "./styles/PostAvatar.styled";

function PostAvatar(props) {
    const context= useContext(Context);
    const [selectedFile, setSelectedFile]= useState();
    const [imgSrc, setImgSrc]= useState("");
    const imgRef= useRef();
    const [errorCode, setErrorCode]= useState(null);
    const error= [
        'Image size must be lower than 1MB',
        'Image must be 300x300 pixels'
    ]
    function goBack() {
        context.setPage(context.pageContents);
    }
    function getImgSize(src) {
        return new Promise((resolve, reject)=>{
            const fakeImg= new Image()
            fakeImg.onload= ()=>{
                resolve({height: fakeImg.height, width:fakeImg.width});
            }
            fakeImg.src= src;
        });
    }
    function handleChange(e) {
        if (!e.target.files[0]) return
        if (e.target.files[0].size < 1000000) {
            //check image size
            const src= URL.createObjectURL(e.target.files[0]);
            getImgSize(src)
                .then((img)=>{
                    console.log(`${img.height}, ${img.width}`);
                    if (img.height !== 300 || img.width !== 300) {
                        console.log(`-99999999 social credit`);
                        setErrorCode(1);
                    } else {
                        console.log(`+15 social credit`);
                        setSelectedFile(e.target.files[0]);
                        setImgSrc(src);
                        setErrorCode(null);
                    }
                });
        } else {
            setErrorCode(0)
        }
    }
    function submitHandler() {
        console.log(selectedFile);
        if (selectedFile) {
            const formData = new FormData();
            formData.append("name", 'myImage');
            formData.append("myFile", selectedFile, 'myImage');
            console.log(...formData);
            axios.post('/image', formData);
        }
    }
    return (
        <Wrapper style={{height: '100vh', width: '100vw', backgroundColor: '#1E90FF'}}> {/* div */}
            <div className="PostAvatar container">
                <h3 className="PostAvatar">Change your avatar</h3>
                <form className="PostAvatar" id="submitImage" onSubmit={(e)=>e.preventDefault()}>
                    {
                        imgSrc ? 
                            <img className="PostAvatar avatar" src={imgSrc} /> : 
                            <img src="./images/olo.png" alt="" className="PostAvatar avatar" />
                    }
                    <input className="PostAvatar" type="file" id="upload" onChange={(e)=>handleChange(e)} style={{display: "none"}} />
                    <button className="PostAvatar chooseFile" type="button" onClick={() => document.getElementById('upload').click()}>Choose File</button>
                </form>
                {
                    errorCode !== null ?
                        <p className="PostAvatar err">{error[errorCode]}</p> : 
                        null
                }
                <div className="PostAvatar buttons">
                    <button className="PostAvatar goBack" onClick={()=>goBack()}>Go Back</button>
                    {
                        selectedFile && errorCode===null ? 
                            <button className="PostAvatar submit" type="submit" form="submitImage" onClick={()=>submitHandler()}>Submit</button> : 
                            <button className="PostAvatar cantSubmit" type="button">Submit</button>
                    }
                </div>
            </div>
        </Wrapper>
    )
}

export default PostAvatar;