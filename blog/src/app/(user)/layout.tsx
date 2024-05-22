import React from "react";
import '../globals.css';
import Header from "../components/header";
import Banner from "../components/Banner";

export default function RootLayout({
  children,
}:{
  children : React.ReactNode
}
){
  return (
    <html>
      <body>
      <Header />
      <Banner />
      {children}
      </body>
    </html>
  )
}