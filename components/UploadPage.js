import { useState } from "react";
import Header from "./Header";
import "../styles/uploadPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UploadPage = () => {
    const navigate = useNavigate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const getDate = (date) => {
        return date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear();
    }
    const getInitialData = () => {
        return {
            name: "",
            address: "",
            likes: Math.ceil(Math.random() * 1000),
            description: "",
            postimage: "",
            date: new Date()
        }
    }
    const [data, setData] = useState(getInitialData());
    const submitHandler = (e) => {
        e.preventDefault();
        const post = new FormData()
        post.append("name", data.name)
        post.append("address", data.address)
        post.append("likes", data.likes)
        post.append("description", data.description)
        post.append("date", getDate(data.date))
        post.append("postimage", data.postimage)
        axios.post("https://instaclone-nodejs.onrender.com/posts", post)
        navigate("/postview")
    }
    return <div id="uploadPage">
        <Header />
        <form id="formContainer" action="#" method="POST" onSubmit={submitHandler}>

            <div className="fieldContainer">
                <input type="file" placeholder="No file chosen"
                    onChange={(e)=>{
                        setData({...data, postimage:e.target.files[0]})
                    }} />
            </div>

            <div className="fieldContainer" id="authorLocation">
                <input id="author" type="text" placeholder="Author"
                    onChange={(e) => {
                        setData({ ...data, name: e.target.value })
                    }}
                    value={data.name}
                />

                <input type="text" placeholder="Location"
                    onChange={(e) => {
                        setData({ ...data, address: e.target.value })
                    }}
                    value={data.address}
                />
            </div>

            <div className="fieldContainer">
                <input id="description" type="text" placeholder="Description"
                    onChange={(e) => {
                        setData({ ...data, description: e.target.value })
                    }}
                    value={data.description}
                />
            </div>

            <div className="fieldContainer">
                <button type="submit">Post</button>
            </div>
        </form>
    </div>
}

export default UploadPage;
