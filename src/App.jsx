import { useFormik } from 'formik';

const App = () => {
  return (
    <div className="container">
      <hgroup align="center">
        <h2>Formigo</h2>
        <h3>All about forms!</h3>
      </hgroup>
      <form>
        <div className="grid">
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
            />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </label>
        </div>
        <label for="email">
          Email address
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <small>
            We'll never share your email with anyone else.
          </small>
        </label>
        <label htmlFor="fruit">
          Fruit
          <select name="fruit" id="fruit" required>
            <option value="" disabled selected>
              Select a fruit...
            </option>
            <option value="banana">Banana</option>
            <option value="mango">Mango</option>
            <option value="orange">Orange</option>
            <option value="watermelon">Watermelon</option>
          </select>
        </label>
        <fieldset>
          <legend>Size</legend>
          <label for="small">
            <input
              type="radio"
              id="small"
              name="size"
              value="small"
              checked
            />
            Small
          </label>
          <label for="medium">
            <input
              type="radio"
              id="medium"
              name="size"
              value="medium"
            />
            Medium
          </label>
          <label for="large">
            <input
              type="radio"
              id="large"
              name="size"
              value="large"
            />
            Large
          </label>
        </fieldset>
        <fieldset>
          <label for="switch">
            <input
              type="checkbox"
              id="switch"
              name="switch"
              role="switch"
            />
            Publish on my profile
          </label>
          <label for="terms">
            <input type="checkbox" id="terms" name="terms" />I agree
            to the Terms and Conditions
          </label>
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
