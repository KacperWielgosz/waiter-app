import { Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTableById } from "../../redux/tablesRedux";


const Table = () => {
    const { id } = useParams();
    const tableData = useSelector(state => getTableById(state, id));
    console.log(typeof parseInt(id), parseInt(id), tableData)

    return (
        <>
        <h1>Table {tableData.id} </h1>

       </>
    )
  }


export default Table;
