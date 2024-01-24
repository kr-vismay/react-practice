import './Student.css'
function Student(props){
    // let things = [];
    let things = ["apple","banana","greps","orange","mango"];
    console.log(props);
return(
    <>
     <h3 className="print">{props.Name}</h3>
    </>
);
}

export default Student;