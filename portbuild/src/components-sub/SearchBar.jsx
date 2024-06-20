import {TextField} from "@mui/material";


export default function SearchBar(){



    return(
       <div style={{
           background: "linear-gradient(to right, white, gray)",
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           height: '20%',
           width: '20%',
           border: 'solid 2px blue',

       }}>
           <TextField style={{
               height: '100%',
               width: '100%',
           }} label={"Type Here"} >

           </TextField>
       </div>
    );


}