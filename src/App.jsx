import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';


export default function App() {
  //Add new Job
  const addJob = async(newJob)=>{
    const res = await fetch ('http://localhost:8000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  //Delete Job
  const deleteJob = async (id)=> {
    const res = await fetch (`http://localhost:8000/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

 

  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  )
    
}