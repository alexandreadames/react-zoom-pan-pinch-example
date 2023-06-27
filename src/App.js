import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from "styled-components";
import Draggable from "react-draggable";
import { useState } from "react";


const Table = styled.div`
width:1200px;
height: 900px;
display:table;
margin-left: 20px;
margin-top:20px;
`;
const TableRow = styled.div`
display:table-row;
`;
const TableMenu = styled.div`
width:300px;
display:table-cell;
background-color: #2F80ED;
`;
const TableBoard = styled.div`
display: table-cell;
width:900px;
height: 100%;
background-color: #E8E8E8;
`;
const Box = styled.div`
  background-color: ${props => (props.selected ? "red" : "#2F80ED")};
  margin: 5px 5px 5px 5px;
  border-radius:10px;
  padding:5px;
  color: white;
  border: 1px solid white;
  text-align: center;
`;

const ListaMenu = styled.ul`
list-style-type: none; /* Remove bullets */
padding: 0; /* Remove padding */
margin: 10px; /* Remove margins */
`


function App() {

  const handleDrag = (e, ui, index) => {
    const newState = options.map((o, i)=>{
      if (i == index){
        const newOption = {
          ...o, x: ui.x, y: ui.y
        }
        if (ui.x > 284){
          return {...newOption, selected: true}
        }
        else if(ui.x<16){
          return {...newOption, selected: false}
        }
        else{
          return newOption;
        }
        
      }
      return o;
    })
    setOptions(newState);
    console.log(options);
  }

  const [options, setOptions] = useState([
    {
      label: 'Rapidez no atendimento',
      x:0,
      y:0,
      selected: false,
    },
    {
      label: 'Interesse na solução do problema',
      x:0,
      y:0,
      selected: false,
    },
    {
      label: 'Profissionais qualificados',
      x:0,
      y:0,
      selected: false,
    },
    {
      label: 'Confiança no resultado',
      x:0,
      y:0,
      selected: false,
    }
  ]);

  return (
    <Table>
      <TableRow>
        <TableMenu>
        <ListaMenu>
            {options.map((option, index) => (
              <TransformWrapper
              initialScale={1}>
                <TransformComponent>
              <Draggable key={"d"+index} onDrag={(event, data)=>handleDrag(event, data, index)}>
              <li key={index}>
                
                  
                  <Box selected={option.selected} key={"b"+index}>{option.label} x: {option.x} y: {option.y}</Box>
                  
                
              </li>
              </Draggable>
              </TransformComponent>
              </TransformWrapper>
            ))}
          </ListaMenu>
        </TableMenu>
        <TableBoard>
        </TableBoard>
      </TableRow>       
    </Table>
  );
}

export default App;
