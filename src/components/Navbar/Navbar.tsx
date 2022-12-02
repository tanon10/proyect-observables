import { AppStore } from "@/redux/store";
import { Favorite } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { CustomDialog } from "../CustomDialog";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import FavoriteTable from "./FavoriteTable/FavoriteTable";

function Navbar() {
  const favoriteStore = useSelector((store: AppStore) => store.favorite);
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "start" }}
          >
            Tanon10 App
          </Typography>
          <IconButton
            color="secondary"
            aria-label="favorites"
            onClick={handleClick}
          >
            <Favorite />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
