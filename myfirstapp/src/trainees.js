import Student from "./student"
function Trainees(){
    let trainees=[{
        name:'sri',
        rollno:1234
    },{
        name:'devi',
        rollno:5678

    }]
    return(
        <>
        <h2>Trainees List</h2>
        {/* <Student name="sridevi"/>
        <Student name="jyo"/>
        <Student name="harika"/>*/} 
        {/* <table border={1} cellSpacing={0} align="center" width={"300px"}>
            <tr><th>S.NO</th><th>Name</th><th>Roll No</th></tr>
            {
                trainees.map((ele,i)=>{
                    return(<Student index={i} name={ele.name} rollno={ele.rollno} />)

                })
            }
        </table> */}


     <ol style={{listStylePosition:"inside"}}>
        <li>S.No</li>
        <li>Name</li>
        <li>RollNo</li>

     </ol>

     <ul style={{listStylePosition:"inside"}}>
        <li>sridevi</li>
        <li>jyothika</li>
        <li>harika</li>
     </ul>
     <dl style={{listStylePosition:"inside"}}>
        <li>sridevi</li>
        <li>King</li>
     </dl>
        </>
    )
}
export default Trainees