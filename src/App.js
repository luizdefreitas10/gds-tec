import { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './global.styles';
// import fetchApi from './service/fetchApi';
import * as style from './styles';

function App() {

  const [dataState, setDataState] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [filteredData, setFilteredData] = useState('');

  const notifyError = () => toast.error("Data não encontrada!");
  const notifySuccess = () => toast.success("Data disponível!");

  useEffect(() => {
    // const setDataState = fetchApi().then((response) => response.json()).then((d) => d[0].data);
    // setData(setDataState);
    // console.log(setDataState);
    const test = async () => {
      const dataApi = await fetch('https://619542f674c1bd00176c6ca2.mockapi.io/api/v1/Data');
      const response = await dataApi.json();
      const apiResponse = response[0].date;
      setDataState(apiResponse);
      // console.log(apiResponse);
    }
    test();
  }, []);

  const handleClickFilter = (event) => {
    event.preventDefault();
    // console.log(dataState);
    const dataFilter = dataState.filter((d) => d.data === textInput)[0];
    // console.log(dataFilter);
    setTextInput('');
    if (dataFilter) notifySuccess();
    if (dataFilter === undefined) {
      setFilteredData('');
      notifyError();
    }
    setFilteredData(dataFilter.data);
  };

  return (
    <style.Container>
    <div className="App">
      <GlobalStyles/>
      <style.HeaderContainerH1>GDS-TEC</style.HeaderContainerH1>
      <label htmlFor='text-id'>Indique uma data: </label>
      <input type='text' id='text-id' value={textInput} onChange={(event) => setTextInput(event.target.value)}/>
      <style.ButtonFilterContainer type='submit' onClick={(event) => handleClickFilter(event)}>Filtrar Data</style.ButtonFilterContainer>
      { filteredData ? (
        <div>{[filteredData].map((d, index) => (
          <h2 key={index}>{d}</h2>
        ))}</div>
      ) : null }
      <ToastContainer />
    </div>
    </style.Container>
  );
}

export default App;
