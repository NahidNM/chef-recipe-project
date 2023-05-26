import React from 'react';
import { Page, Text,  Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });
  

const Pdf = () => {
    return (
        <Document>
        <Page style={styles.body}>
          <Text style={styles.header} fixed>The Answers</Text>
          <Text style={styles.title}>
          The differences between uncontrolled and controlled components
          </Text>
          <Text style={styles.text}>
          Data is handled by the parent component through props and callbacks.
            Parent component controls the state of the controlled component. Value
            of the controlled component always comes from the parent component's
            state.
            
          </Text>
          <Text style={styles.text}>
          Data is handled internally by the component. Component stores the data
            using refs or other internal mechanisms. Parent component can still
            access the value, but does not control the component's state.
  
          </Text>
          <Text style={styles.title}>
          How to validate React props using PropTypes?
          </Text>
          <Text style={styles.text}>
          React's PropTypes is a library used to validate the props passed to a component. This library allows developers to ensure that the correct data types and values are passed to the component, reducing the likelihood of errors and improving the overall stability of the application.
            
          </Text>
          <Text style={styles.title}>
          The difference between nodejs and express js.
          </Text>
          <Text style={styles.text}>
          Node.js is a JavaScript runtime that enables the execution of JavaScript code on the server-side. It is lightweight, scalable, and non-blocking, making it efficient for building network applications. However, it does not include built-in routing and middleware capabilities.
         
  
            
          </Text>
          <Text style={styles.text}>
          Express.js is a popular web application framework built on top of Node.js. It provides a higher-level abstraction with a powerful routing system and middleware pipeline for handling HTTP requests and responses. Express.js is modular, easily extendable, and simplifies the process of building web applications and APIs.
            
          </Text>
          <Text style={styles.title}>
          What is a custom hook, and why to create a custom hook?
          </Text>
          <Text style={styles.text}>
          A custom hook in React is a function that allows you to reuse stateful logic between components. Custom hooks are useful for reusing code, abstracting complex logic, separating concerns, testing, and improving performance.
            
          </Text>
  
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </Page>
      </Document>
    );
};

export default Pdf;