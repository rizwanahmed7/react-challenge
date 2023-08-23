import Input from "./Input";
import Select from "./Select";

const Form = ({ data, onChange, onSubmit }) => {
  const { name, sector, agree } = data;
  return (
    <form>
      <p>
        Please enter your name and pick the Sectors you are currently involved
        in.
      </p>
      <Input
        value={data.name}
        onChange={(e) =>
          onChange((data) => ({ ...data, name: e.target.value }))
        }
        name={name}
        label="Name"
      />
      <Select onChange={onChange} value={sector} />
      <div>
        <input
          onChange={(e) =>
            onChange((data) => ({ ...data, agree: !data.agree }))
          }
          id="terms"
          type="checkbox"
          checked={agree}
        />
        <label htmlFor="terms">Agree to terms</label>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        Save
      </button>
    </form>
  );
};
export default Form;
