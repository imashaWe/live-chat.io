import {useSelector} from "react-redux";
import {Alert} from "@mui/material";

export default function FormMessageLabel() {
    const {isFailure, isSuccess, message} = useSelector(state => state.formState);
    if (isFailure) {
        return <Alert severity="error" sx={{marginY: 1}}>{message}</Alert>
    }
    if (isSuccess) {
        return <Alert severity="success" sx={{marginY: 1}}>{message}</Alert>
    }
    return <></>
}
