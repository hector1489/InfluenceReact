import { Banner, Lottery } from '../../components/index.tsx'
import './Home.css'


const Home = () => {

  return (
    <>
      <Banner />

      <div className="divider">
        <hr />
      </div>
      <Lottery />
    </>
  )

}

export default Home