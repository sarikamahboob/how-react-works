import logo from './logo.svg';
import './App.css';
import Device from './Components/Device/Device';
import DeviceDetail from './Components/DeviceDetail/DeviceDetail';
import Watch from './Components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name='uphone' price='13000' ></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
