function Events(){
   // let arr = [100,200,300];
   let trainees =[{
           name:'sri',
           rollno:1234
   },{
    name:'jyo',
    rollno:5678
   },
];
    const getdata = (res) => {
        res.map((ele,i) => {
            document.write(i+1 +"."+ele.name+" "+ele.rollno +"<br>");
        });
        
        document.write(res);
        //alert("clicked");
    };
    return(
        <div>
            <h1>Events</h1>
            <button onClick={() => getdata("sri")}>Clickhere</button>
        </div>
    );
}
export default Events;