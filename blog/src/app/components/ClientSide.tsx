'use client'
import Link from 'next/link';
import React from 'react';

function ClientSide({children, route}
     :
    { children: React.ReactNode;
      route :string}){
  return(
      <Link href = {route}>{children}</Link>
  )
}

export default ClientSide;
