import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import {useSelector} from "react-redux";
export default function FormSubmitButton(props) {
    const {isSubmitting} = useSelector((state) => state.formState)
    return (
        <LoadingButton
            type="submit"
            loading={isSubmitting}
            {...props}
        >
            {props.children}
        </LoadingButton>
    );
}
