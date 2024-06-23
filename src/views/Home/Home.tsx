import {
  AwardsTable,
  CardsTicket,
  Header,
  LotteryTomb,
  PersonalDescription,
  SocialIcons,
} from '../../components/index.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import './Home.css'


const Home = () => {

  return (
    <>
      <Header />
      <AwardsTable />
      <CardsTicket />
      <div className="divider">
        <hr />
      </div>
      <PersonalDescription />
      <div className="divider">
        <hr />
      </div>
      <LotteryTomb />
      <SocialIcons />
      <div className="container-arrow d-flex mt-2">
        <a href="#top" className='m-4'>
          <i className="fa-solid fa-circle-arrow-up fa-flip fa-2xl"></i>
        </a>
      </ div>
      <Footer />
    </>
  )
}

export default Home