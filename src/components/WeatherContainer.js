import WeatherContainerItem from "./WeatherContainerItem";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButtonCity = styled.button`
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
`;
const WeatherContainer = ({ data, city }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${city}`);
  };
  return (
    <>
      <StyledButtonCity onClick={handleClick}>{city}</StyledButtonCity>

      {data.map((item, idx) => (
        <WeatherContainerItem key={idx} item={item} city={city} />
      ))}
    </>
  );
};

export default WeatherContainer;
