import React, { useEffect} from "react";
import Router from 'next/router'
import {useAuth0} from "@auth0/auth0-react";

const ProtectedRoute = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => (props) =>{
  const { isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    if(!isAuthenticated && !isLoading ){
      Router.push('/')
    }
  },[isAuthenticated, isLoading]);
  if(!isAuthenticated || isLoading){
    return null
  }
  return <Component {...props} />
}

export default ProtectedRoute