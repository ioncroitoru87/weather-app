import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButtonCity = styled.button`
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
`;
const WeatherContainerItem = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${item.name}`);
  };
  return (
    <>
      <StyledButtonCity onClick={handleClick}>{item.name}</StyledButtonCity>
    </>
  );
};

export default WeatherContainerItem;
