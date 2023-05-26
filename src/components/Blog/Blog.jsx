import React from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "./Pdf";

const Blog = () => {
    return (
        <div>
           <div className="my-5 md:mx-56 md:p-7 bg-slate-300 rounded-xl">
        <h1 className="text-4xl font-bold text-center text-stone-700">
          The Answers
        </h1>
        <hr className="mt-1 border-2 md:mx-28 border-stone-700 " />
      </div>

      <div className="my-5 md:mx-56 p-7 bg-slate-300 rounded-xl">
        <h1 className="text-2xl font-bold text-stone-700">
          The differences between uncontrolled and controlled components
        </h1>
        <hr className="my-1 border-2 md:mr-24 border-stone-500" />
        <p>
          Controlled components:
          <br />
          Data is handled by the parent component through props and callbacks.
          Parent component controls the state of the controlled component. Value
          of the controlled component always comes from the parent component's
          state. <br />
          Uncontrolled components: <br />
          Data is handled internally by the component. Component stores the data
          using refs or other internal mechanisms. Parent component can still
          access the value, but does not control the component's state.
        </p>
      </div>
      <div className="my-5 md:mx-5 p-7 bg-slate-300 rounded-xl">
        <h1 className="text-2xl font-bold text-stone-700">
        What is a custom hook, and why to create a custom hook?
        </h1>
        <hr className="my-1 border-2 md:mr-24 border-stone-500" />
        <p>
        A custom hook in React is a function that allows you to reuse stateful logic between components. Custom hooks are useful for reusing code, abstracting complex logic, separating concerns, testing, and improving performance.
        </p>
      </div>
      <div className="my-5 md:mx-5 p-7 bg-slate-300 rounded-xl">
        <h1 className="text-2xl font-bold text-stone-700">
          The difference between nodejs and express js.
        </h1>
        <hr className="my-1 border-2 md:mr-24 border-stone-500" />
        <p>
          Node.Js :
          <br />
          Node.js is a JavaScript runtime that enables the execution of JavaScript code on the server-side. It is lightweight, scalable, and non-blocking, making it efficient for building network applications. However, it does not include built-in routing and middleware capabilities. <br />
Express.Js : <br />
Express.js is a popular web application framework built on top of Node.js. It provides a higher-level abstraction with a powerful routing system and middleware pipeline for handling HTTP requests and responses. Express.js is modular, easily extendable, and simplifies the process of building web applications and APIs.
        </p>
      </div>
      <div className="my-5 md:mx-5 p-7 bg-slate-300 rounded-xl">
        <h1 className="text-2xl font-bold text-stone-700">
        How to validate React props using PropTypes?
        </h1>
        <hr className="my-1 border-2 md:mr-24 border-stone-500" />
        <p>
        React's PropTypes is a library used to validate the props passed to a component. This library allows developers to ensure that the correct data types and values are passed to the component, reducing the likelihood of errors and improving the overall stability of the application.
        </p>
      </div>
      <div className="flex justify-around my-5">
      <PDFDownloadLink document={<Pdf />} filename="FORM">
      {({loading}) => (loading ? <button className="btn btn-secondary">Loading Document...</button> : <button className="btn btn-secondary">Download Blog pdf</button> )}
      </PDFDownloadLink></div>
        </div>
    );
};

export default Blog;