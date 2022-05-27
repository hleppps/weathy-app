import { Alert, Box, Button, TextField } from "@mui/material";
import { FormikHelpers, FormikValues, useFormik } from "formik";
import { FC, useState } from "react";
import { useAuth } from "reactfire";
import * as yup from "yup";
import { loginUser } from "../../../utils/authUtils";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export interface LoginFormValues extends FormikValues {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const auth = useAuth();
  const [errorMsg, setErrorMsg] = useState<null | string>(null);

  const onSubmitHandler = (
    { email, password }: LoginFormValues,
    helpers: FormikHelpers<LoginFormValues>,
  ) => {
    loginUser(auth, email, password)
      .then(() => {
        setErrorMsg(null);
      })
      .catch((error) => {
        setErrorMsg(error.message);
        helpers.setSubmitting(false);
      });
    helpers.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: onSubmitHandler,
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ my: 1 }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ my: 1 }}
        />
        {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ my: 1, padding: 2 }}
          disabled={formik.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
