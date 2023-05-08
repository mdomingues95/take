import { Controller } from "react-hook-form";
import {
    TextField,
} from "@mui/material";

export default function FormTextField(props) {

    return (
        <Controller
            control={props.control}
            name={props.name}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    fullWidth
                    variant="outlined"
                    label={props.label}
                />
            )}
        />
    );
}