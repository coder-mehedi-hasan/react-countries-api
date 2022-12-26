import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Countries from './components/Countries/Countries';
import Details from './components/Country_Details/Details';
import Home from './components/Home/Home';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: (<Main></Main>),
      children:[
        {
          path: '/',
          element: (<Home/>)
        },
        {
          path: 'about',
          element: (<About/>)
        },
        {
          path:"country_details/:code",
          element: <Details></Details>,
          loader: ({params})=>{
            return fetch(`https://restcountries.com/v3.1/alpha/${params.code}`);
          }
        },
        {
          path: 'countries',
          element: (<Countries/>),
          loader: async () =>{
            return fetch('https://restcountries.com/v3.1/all')
          }
        },
        
      ]
    },
    {
      path: '*',
      element: (<div>this page is invalid</div>)
    }
  ])
  return (
    <div>
      
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
