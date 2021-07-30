import React, { Component } from "react";
import Listitem from "./Listitem";

class List extends Component{
   
     render(){
        const{todo,onDelete,onEdit,count}=this.props;
         return(
             <React.Fragment>
            <ul> {
                todo.map((item,index)=>{
                    return<Listitem item={item.todo}
                     key={index}
                     handleDelete={()=>{onDelete(index)}}
                     handleEdit={onEdit}
                     id={index}
                     />
                })
                
            }
          </ul>
          <h2>YoU HaVe {count} ThInGs To Do</h2>
          </React.Fragment>
        
             
         );
     };
}
export default List;