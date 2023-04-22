import styled from 'styled-components';
import SideBar from '../../../components/Side_Board/Side_Board';

const MapPage = () => {
    return (
        <Wrapper>
           <SideBar />
           <h1>MAP</h1>
        </Wrapper>
    );
}

const Wrapper = styled.div`
     width: 100%;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: 0.6fr 2fr 0.5fr;
    grid-template-rows: 1fr 1fr;
    font-family: 'Varela Round', sans-serif;
`;
export default MapPage;