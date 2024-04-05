import Hero from '../Components/Hero';
import HomeCards from '../Components/HomeCards';
import Jobslisting from '../Components/JobsListing';
import ViewAllJobs from '../Components/ViewAllJobs'

export default function HomePage() {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <Jobslisting isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}
