import React from "react";
import '../globals.css';
import Header from "../components/header";

export default function RootLayout({
  children,
}:{
  children : React.ReactNode
}
){
  return (
    <html>
      <Header />
      {/*Banner*/}
      <body>{children}</body>
    </html>
  )
}