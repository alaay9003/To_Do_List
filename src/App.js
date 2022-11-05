import { useState } from "react";
import { Container} from "react-bootstrap";
import { Buttons } from "./component/Buttons";
import { person } from "./component/data";
import { DataCount } from "./component/DataCount";
import { DatesList } from "./component/DatesList";


function App() {
  const [personData,setPersonData] = useState(person);
  const deleteData = ()=>{
    setPersonData([]);
  };
  const onView = ()=>{
    setPersonData(person)
  };
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DataCount person={personData}/>
        <DatesList person={personData} />
        <Buttons deleteData={deleteData} viewData={onView}/> 
      </Container>
    </div>
  );
}

export default App;
