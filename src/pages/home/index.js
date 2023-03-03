import React from "react";
import SearchForm from "../../components/SearchForm";
import HotelList from "../../components/HotelList";
import PageTitle from "../../components/PageTitle";
import * as Service from "../../service/";
import "./styles.css";

const Home = () => {
  const [skip] = React.useState(0);
  const [top] = React.useState(10);
  const [hotels, setHotels] = React.useState(null);

  const [locations, setLocations] = React.useState(null);
  const [searchFormValues, setSearchFormValues] = React.useState({
    startDate: "2020-09-12",
    endDate: "2020-09-13",
    minimalRating: 0,
    locationId: null
  });

  const onChangeSearchForm = (values) => setSearchFormValues(values);

  React.useEffect(() => {
    Service.getLocations().then((result) => {
      if (result.status !== 200) return;
      const locations = result.data;
      setSearchFormValues((previousState) => ({
        ...previousState,
        locationId: locations[0].id
      }));
      setLocations(locations);
    });
  }, []);

  const onSubmit = () => {
    const { locationId, startDate, endDate, minimalRating } = searchFormValues;

    Service.getHotels({
      skip,
      top,
      locationId,
      startDate,
      endDate,
      minimalRating
    }).then((result) => {
      setHotels(result);
    });
  };

  return (
    <div className="HomePage">
      <PageTitle />
      {locations && (
        <SearchForm
          locations={locations}
          onSubmit={onSubmit}
          onChange={onChangeSearchForm}
          values={searchFormValues}
        />
      )}
      {hotels && <HotelList hotels={hotels} />}
    </div>
  );
};

export default Home;
