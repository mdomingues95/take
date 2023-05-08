import { Controller } from "react-hook-form";
import {
  Checkbox,
  FormControlLabel
} from "@mui/material";

export default function FormCheckBox(props) {

  return (
    <Controller
      control={control}
      name={props.name}
      defaultValue={false}
      render={({ field: { value, onChange, ...field } }) => (
        <FormControlLabel
          control={
            <Checkbox onChange={onChange} checked={value} {...field} />
          }
          name={props.label}
        />
      )}
    />
  );
}