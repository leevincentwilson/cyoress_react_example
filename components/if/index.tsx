import {ReactNode, ReactElement} from "react";

interface I_If {
  condition: boolean,
  children: ReactElement  | ReactNode
}
const If = ({condition, children}:I_If): ReactElement  |null =>{
  if(condition){
    return <>{children}</>
  }
  return null

}
export default If