import React from 'react';
import Header from './components/Header';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import Textfield from './components/Textfield';
import Select from './components/Select';
import DateTimePicker from './components/DataTimePicker';
// import Checkbox from './Checkbox';
import Button from './components/Button';
import areas from './components/data/areas.json';
import tags from './components/data/tags.json';
import sysCategories from './components/data/sysCat.json';
import sysIdNumbers from './components/data/sysId.json';
import criticalities from './components/data/criticality.json';
import alternateSSIs from './components/data/alternateSSI.json';
import availableSSIs from './components/data/availableSSI.json';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  tagNumber: '',
  permitNumber: '',
  systemIDNumber: '',
  systemCategory: '',
  area: '',
  criticality: '',
  ssiApproval: '',
  altSSiApproval: '',
  requestorName: '',
  forceLogDate: '',
  reasons: '',
  remarks: '',
};

const FORM_VALIDATION = Yup.object().shape({
  tagNumber: Yup.string().required('Tag Required'),
  permitNumber: Yup.number().integer().typeError('Please a Permit number').required('Required'),
  systemIDNumber: Yup.string().required('Required'),
  systemCategory: Yup.string().required('Required'),
  area: Yup.string().required('Required'),
  criticality: Yup.string().required('Required'),
  ssiApproval: Yup.string().required('Required'),
  altSSiApproval: Yup.string().required('Required'),
  requestorName: Yup.string().required('Required'),
  forceLogDate: Yup.date().required('Required'),
  reasons: Yup.string().required('Please state your Reasons'),
  remarks: Yup.string(),
});

const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values, {resetForm, setSubmitting }) => {
                setTimeout(() =>{
                  console.log(values);
                  resetForm();
                  setSubmitting(false)

                }, 3000)
              }}
            >
             
              <Form>

                <Grid container spacing={1}>

                  <Grid item xs={12}>
                    <Typography />
                  </Grid>

                  <Grid item xs={4}>
                    <Select
                      name="tagNumber"
                      label="Tag Number"
                      options={tags}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield
                      name="permitNumber"
                      label="Permit Number"
                      multiline={false}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Select
                      name="systemIDNumber"
                      label="System ID Number"
                      options={sysIdNumbers}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography/>
                  </Grid>

                  <Grid item xs={4}>
                    <Select
                      name="systemCategory"
                      label="System Category"
                      options={sysCategories}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Select
                      name="criticality"
                      label="Criticality Level"
                      options={criticalities}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Select
                      name="area"
                      label="Area"
                      options={areas}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography/>
                  </Grid>

                  <Grid item xs={6}>
                    <Select
                      name="ssiApproval"
                      label="SSI Approval"
                      options={availableSSIs}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Select
                      name="altSSiApproval"
                      label="Alternate SSI Approval"
                      options={alternateSSIs}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="requestorName"
                      label="Requestor's Name"
                      multiline={false}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name="forceLogDate"
                      label="Force Log Date"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="reasons"
                      label="Reasons"
                      multiline={true}
                      minRows={2}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="remarks"
                      label="Remarks"
                      multiline={true}
                      minRows={2}
                    />
                  </Grid>


                  <Grid item xs={4}>
                 <Button> Submit Form </Button>
                  </Grid>
            
                </Grid>
             
              </Form>
            
               
            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
