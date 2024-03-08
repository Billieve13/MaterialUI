import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
// import TestFormHandling from './components_section_5/TestFormHandling';
// import TestHeader from './components_section_5/TestHeader';
// import TestTabs from './components_section_5/TestTabs';
// import TestMenu from './components_section_5/TestMenu';
// import ActionAreaCard from './components_section_6/ActionAreaCard';
// import TestDialog from './components_section_6/TestDialog';
// import TestModal from './components_section_6/TestModal';
// import TestLink from './components_section_6/TestLink';
// import TestContainer from './components_section_6/TestContainer';
// import TestList from './components_section_6/TestList';
// import TestAccordion from './components_section_6/TestAccordion';
// import TestAutoComplete from './components_section_6/TestAutoComplete';
// import TestDrawer from './components_section_6/TestDrawer';
// import TestAlert from './components_section_6/TestAlert';
// import TestSnackBar from './components_section_6/TestSnackBar';
// import TestProgressBar from './components_section_6/TestProgressBar';
// import TestRating from './components_section_6/TestRating';
// import TestImageList from './components_section_6/TestImageList';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  return (
    <div>
      <form 
        style={{
          display:'flex', 
          flexDirection: "column", 
          gap: 5, 
          border: '1px solid',
          width: "300px",
          margin: "100px auto",
        }} 
        onSubmit={handleSubmit((data) => console.log(data))}>
        <TextField 
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) ? <Typography>Invalid Email Provided</Typography> : null}
        {...register("email", {
          validate: (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
        })}/>
        <TextField 
          error={Boolean(errors.password)}
          helperText={Boolean(errors.password) ? <Typography>Invalid Password Provided</Typography> : null}
          type="password"
          {...register("password", {
          required: true,
          minLength: 8,
        })} />
        <Button disabled={Boolean(errors.email) || Boolean(errors.password)} 
          variant="contained" 
          type={"submit"}>Submit</Button>
      </form>
    </div>
  );
}

export default App;
