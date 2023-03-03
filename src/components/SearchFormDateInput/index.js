const SearchFormDateInput = (props) => {
  const { label, name, value } = props;
  const onChange = (event) => props.onChange(event.target.value);

  return (
    <div className="SearchFormInput">
      <label className="SearchFormInput-label" htmlFor={name}>
        {label}
      </label>
      <input className="SearchFormInput-input" type="date" id={name} value={value} onChange={onChange} />
    </div>
  );
};

export default SearchFormDateInput;
