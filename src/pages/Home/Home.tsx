import { People } from "@/data/people";
import { useEffect } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { PeopleTable } from "./components";
import { addPeople } from "@/redux";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
}

export default Home;
