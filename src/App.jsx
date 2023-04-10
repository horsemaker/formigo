import { useFormik } from 'formik';

const App = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  return <div></div>;
};

export default App;
