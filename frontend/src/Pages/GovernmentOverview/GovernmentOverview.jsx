import React, { useEffect, useState } from 'react';
import './GovernmentOverview.css';
import NavSearch from '../../Components/NavSearch/NavSearch';
import NavNotice from '../../Components/NavNotice/NavNotice';
import NavAvatar from '../../Components/NavAvatar/NavAvatar';
import SchoolsChart from '../../Components/SchoolsChart/SchoolsChart';
import InstitutionInspectionChart from '../../Components/InstitutionInspectionChart/InstitutionInspectionChart';
import AcademicsReportChart from '../../Components/AcademicsReportChart/AcademicsReportChart';
import AssessmentAndExaminationChart from '../../Components/AssessmentAndExaminationChart/AssessmentAndExaminationChart';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CircularProgressBarOne from '../../Components/CircularProgressBarOne/CircularProgressBarOne';
import CircularProgressBarTwo from '../../Components/CicularProgressBarTwo/CircularProgressBarTwo';
import ProfileCircularBarsOne from '../../Components/ProfileCircularBars/ProfileCircularBarsOne';
import ProfileCircularBarsTwo from '../../Components/ProfileCircularBars/ProfileCircularBarsTwo';
import AcademicsAndScoresChart from '../../Components/AcadamicsAndScoresChart/AcademicsAndScoresChart';
import IntitutionChart from '../../Components/InstitutionChart/IntitutionChart';
import axios from 'axios';




function GovernmentOverview() {



  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [moonClr, setMoonClr] = useState({
    color: 'rgb(155,155,155)'
  })
  const [darkSn, setDarkSn] = useState({
    color: 'rgb(147, 148, 149)',
    backgroundColor: 'white'
  })
  const [darkCom, setDarkCom] = useState({
    color: 'black',
    backgroundColor: 'white'
  })



  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setMoonClr({
        color: 'blue'
      })
      setDarkSn({
        color: 'white',
        backgroundColor: 'rgb(59, 60, 60)'
      })
      setDarkCom({
        color: 'white',
        backgroundColor: 'rgb(59, 60, 60)'
      })
    }
    else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setMoonClr({
        color: 'rgb(155,155,155)'
      })
      setDarkSn({
        color: 'rgb(147, 148, 149)',
        backgroundColor: 'white'
      })
      setDarkCom({
        color: 'black',
        backgroundColor: 'white'
      })
    }
  }



  //to hold array items
  const [allItems, setAllItems] = useState([])
  // function
  const fetchData = async () =>{
    const response = await axios.get('http://localhost:3001/Institution')
    console.log(response.data);
    setAllItems(response.data)
  }
  console.log(allItems);
  
  useEffect(()=>{
    fetchData()
  },[])
 

  



  return (
    <div className='govcontainer' style={myStyle}>

      <nav className='nav'>
        <div><NavSearch /></div>
        <div className='navparttwo'>
          <NavNotice />
          <div className='gmoondiv'>
            <button  onClick={toggleStyle} style={moonClr}><i class="fa-solid fa-moon"></i></button>
          </div>
          <NavAvatar />
        </div>
      </nav>
      <hr style={{ margin: "5px" }} />

      <div className="gtopbar">
        <div className="gtopbar1"><h3>Overview</h3></div>
        <div className="gtopbar2">
          <div className="gtopbardate">
            <p><i class="fa-regular fa-calendar"></i> 20, Dec 2024</p>
          </div>
        </div>
      </div>


      <div className="gbar1">
        <div className="gbar1comdiv">
          <div className='row gbar1com tschool'>
            <div className="col-4"><i class="fa-solid fa-users" style={darkCom}></i></div>
            <div className="col-8"><p>Total School</p><h5>145</h5></div>
          </div>
          <div className='row gbar1com tstaff'>
            <div className="col-4"><i class="fa-solid fa-user-tie" style={darkCom}></i></div>
            <div className="col-8" ><p>Total Staffs</p><h5>1,265</h5></div>
          </div>
        </div>

        <div className="gbar1comdiv">
          <div className='row gbar1com tstudents'>
            <div className="col-4"><i class="fa-solid fa-user" style={darkCom}></i></div>
            <div className="col-8" ><p>Total Students</p><h5>145</h5></div>
          </div>
          <div className='row gbar1com tparents'>
            <div className="col-4"><i class="fa-solid fa-dollar-sign" style={darkCom}></i></div>
            <div className="col-8" ><p>Total Parents</p><h5>1,265</h5></div>
          </div>
        </div>
      </div>


      <div className="gbar2">
        <div className="gbar2com1" style={myStyle}><div className='gbar2comtop'><h5>Schools</h5><i class="fa-solid fa-ellipsis"></i></div><div className="gbar2chart"><SchoolsChart/></div></div>
        <div className="gbar2com2" style={myStyle}><div className='gbar2comtop'><div><h5>Institution Inspection</h5><p>Track Institution Inspection</p></div><i class="fa-solid fa-ellipsis"></i></div><div className="gbar2chart"><InstitutionInspectionChart/></div></div>
        <div className="gbar2com3" style={myStyle}><div className='gbar2comtop'><div><h5>Academics Report</h5><p>Track Institution Inspection</p></div><i class="fa-solid fa-ellipsis"></i></div><div className='gbar2chart' style={{marginTop:"30px"}}><AcademicsReportChart/></div>
          <div className="gbar2com3bottom">
            <div><h4>John</h4><p>School</p><h5>1658,90 <i class="fa-solid fa-arrow-up" style={{color:"blue"}}></i></h5></div>
            <div><h4>Jeeva</h4><p>College</p><h5>368,90 <i class="fa-solid fa-arrow-up"  style={{color:"orange"}}></i></h5></div>
            <div><h4>Ram</h4><p>School</p><h5>1658,90 <i class="fa-solid fa-arrow-up"  style={{color:"blue"}}></i></h5></div>
          </div>
        </div>
      </div>




      <div className="gbar3">

      <div className="gbar3com1" style={myStyle}><div className='gbar3comtop'><div><h5>Assessment and examination</h5><p>Track Institution Inspection</p></div><i class="fa-solid fa-ellipsis"></i></div><div className="gbar3chart"><AssessmentAndExaminationChart/></div>
        <div className="gbar3com1bottom">

          <div className="row gbar3com1bottom1">
            <div className='col-4' style={{}}><CircularProgressBarOne/></div>
            <div className='col-8'><h5>1,235 <i class="fa-solid fa-arrow-down" style={{color:"orange"}}></i></h5><p>Examination shedules and results</p></div>
          </div>
          <div className="row gbar3com1bottom2">
            <div className='col-4' style={{}}><CircularProgressBarTwo/></div>
            <div className='col-8'><h5>456 <i class="fa-solid fa-arrow-up" style={{color:"blue"}}></i></h5><p>Marks and assessment</p></div>
          </div>

        </div>

      </div>
      
      
      <div className="gbar3com2" style={myStyle}><div className='gbar3comtop'><div><h5>Academics and Scores</h5></div><input type="month"  style={{width:"130px", padding:"0px 10px",borderRadius:"10px",color:"blue"}} /></div>
        
        <div>

          <div className='gbar3com2profile'>
            <div className='gbar3com2profileleft'><img src='https://charmingvibes4u.com/wp-content/uploads/2022/01/Lucas-Weslet-1.jpg' alt='' style={{ width: '45px', height: '45px' }} className='rounded-circle'/> <p style={{fontWeight:"600"}}>English</p> <p>Class VI A</p></div> <div className='gbar3com2profileright'><ProfileCircularBarsOne/></div>
          </div>
          <div className='gbar3com2profile'>
            <div className='gbar3com2profileleft'><img src='https://charmingvibes4u.com/wp-content/uploads/2022/01/Lucas-Weslet-1.jpg' alt='' style={{ width: '45px', height: '45px' }} className='rounded-circle'/> <p style={{fontWeight:"600"}}>English</p> <p>Class VI A</p></div> <div className='gbar3com2profileright'><ProfileCircularBarsTwo/></div>
          </div>

        </div>

        <div className="gbar3chart"><AcademicsAndScoresChart/></div>
        <div className="gbar3details">Details</div>
      </div>

      </div>



      <div className="gbar4">

        <div className="gbar4com1" style={myStyle}>
          <div className='gbar4com1top'><h5>Institution Graph</h5><p>Last 30 days <i class="fa-solid fa-caret-down" style={{color:"blue"}}></i></p></div>
          <div className='gbar4com1bottom'><IntitutionChart/></div>
        </div>

        <div className="gbar4com2" style={myStyle}>
        <div className='gbar4com2top'><h5>Institution List</h5><p>Last 30 days <i class="fa-solid fa-caret-down" style={{color:"blue"}}></i></p></div>

        <div>
          <table class="table table-sm">
            <tbody style={myStyle}>
              {
                allItems.map((item) => (
                  <tr>
                    <td><img src={item.photo} alt="" style={{width:"40px",height:"40px",borderRadius:"30px"}}/></td>
                    <td style={myStyle}><p>{item.name}</p></td>
                    <td style={myStyle}><p>{item.idnumber}</p></td>
                    <td style={myStyle}><p>{item.number}</p></td>
                    <td>
                      <div className="flex -space-x-1 overflow-hidden">
                        <img className='inline-block h-6 w-6 rounded-full' src="https://cdn.business2community.com/wp-content/uploads/2014/08/My_profile-orange-600x600.png" alt="" />
                        <img className='inline-block h-6 w-6 rounded-full' src="https://cdn.business2community.com/wp-content/uploads/2014/08/My_profile-orange-600x600.png" alt="" />
                        <img className='inline-block h-6 w-6 rounded-full' src="https://cdn.business2community.com/wp-content/uploads/2014/08/My_profile-orange-600x600.png" alt="" />
                        <img className='inline-block h-6 w-6 rounded-full' src="https://cdn.business2community.com/wp-content/uploads/2014/08/My_profile-orange-600x600.png" alt="" />
                        <img className='inline-block h-6 w-6 rounded-full' src="https://cdn.business2community.com/wp-content/uploads/2014/08/My_profile-orange-600x600.png" alt="" />
                      </div>
                    </td>
                    <td style={myStyle}><i style={{cursor:'pointer'}} class="fa-solid fa-print"></i></td>
                    <td style={myStyle}><i style={{cursor:'pointer'}} class="fa-solid fa-ellipsis"></i></td>
                  </tr>
                ))
              }
              
            </tbody>
          </table>
        </div>

        </div>

      </div>







    </div>
  )
}

export default GovernmentOverview