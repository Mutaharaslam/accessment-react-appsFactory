import SearchFormDateInput from "../SearchFormDateInput";
import SearchFormSelectInput from "../SearchFormSelectInput";

import "./styles.css";

const SearchForm = ({ onSubmit, onChange, locations, values }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const onChangeLocation = (locationId) => onChange({ ...values, locationId });
  const onChangeStartDate = (startDate) => onChange({ ...values, startDate });
  const onChangeEndDate = (endDate) => onChange({ ...values, endDate });
  const onChangeMinimalRating = (minimalRating) =>
    onChange({ ...values, minimalRating });

  return (
    <form onSubmit={handleSubmit}>
      <div className="SearchForm">
        <div className="SearchForm-inputs">
          <SearchFormSelectInput
            label="Location"
            name="locationId"
            value={values.locationId}
            onChange={onChangeLocation}
            options={locations.map(({ id, name }) => ({
              label: name,
              value: id,
            }))}
          />
          <SearchFormDateInput
            name="startDate"
            label="Start date"
            value={values.startDate}
            onChange={onChangeStartDate}
          />
          <SearchFormDateInput
            name="endDate"
            label="End date"
            value={values.endDate}
            onChange={onChangeEndDate}
          />
          <SearchFormSelectInput
            label="Minimal rating"
            name="minimalRating"
            value={values.minimalRating}
            onChange={onChangeMinimalRating}
            options={[...new Array(6)].map((_, index) => ({
              label: index.toString(),
              value: index,
            }))}
          />
        </div>
        <div className="SearchForm-button-background"></div>
        <button type="submit" className="SearchForm-button">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
