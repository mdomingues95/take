import { Controller } from "react-hook-form";
import {
    TextField,
    MenuItem
} from "@mui/material";

export default function FormSelect(props) {

    return (
        <Controller
            control={props.control}
            name={props.name}
            defaultValue=""
            render={({ field }) => (<>
                <TextField
                    {...field}
                    fullWidth
                    select
                    label={props.label}
                    variant="outlined"
                >
                     {props.options.map((option) => (
                        <MenuItem value={option.value}>{option.label}</MenuItem>
                    ))}
                </TextField>
            </>
            )}
        />
    );
}