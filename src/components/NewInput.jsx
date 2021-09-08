import React from "react";
import { useParams } from "react-router";

const NewInput = (props) =>
  
(
    <input {...props} />
)

function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }

  function PostView(){
      const params = useParams();
      console.log(params)
      return <div>hello world {params.postId}</div>
  }

export {NewInput, Home,About,Dashboard, PostView} ;
