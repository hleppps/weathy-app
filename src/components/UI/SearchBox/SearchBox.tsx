import SearchIcon from "@mui/icons-material/Search";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import Container from "../Container";
import styles from "./SearchBox.module.scss";

interface SearchBoxProps {
  defaultValue: string;
  onSubmit: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

const SearchBox: FC<SearchBoxProps> = ({
  defaultValue,
  onSubmit,
  placeholder,
}) => {
  const [searchBoxValue, setSearchBoxValue] = useState(defaultValue);

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchBoxValue);
  };

  return (
    <Container>
      <div className={styles.searchBox}>
        <Typography color="white" variant="h3">
          WEATHER
        </Typography>
        <form
          className={styles.searchBox_input}
          onSubmit={(e) => formSubmitHandler(e)}
        >
          <TextField
            id="search-box_input"
            label={placeholder}
            variant="filled"
            className={styles.input_textField}
            value={searchBoxValue}
            onChange={(e) => setSearchBoxValue(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => onSubmit(searchBoxValue)}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
    </Container>
  );
};

export default SearchBox;
