const SearchFormSelectInput = (props) => {
  const { label, name, options, value } = props;
  const onChange = (event) => props.onChange(event.target.value);

  return (
    <div className="SearchFormInput">
      <label className="SearchFormInput-label" htmlFor={name}>
        {label}
      </label>
      <select className="SearchFormInput-input" id={name} name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFormSelectInput;
