
import React from 'react'
import './Github.css'

import GitHubCalendar from 'react-github-calendar';

export const Github = () => {
    return (
        <div style={{ padding: "50px 10% 0 10%" }} data-aos="fade-up"
        data-aos-duration="3000"  >
            <h1 style={{ textAlign: 'left', marginBottom: '0px' }}>Github</h1>
            <div style={{ borderBottom: "2px solid #00abf0", width: "70px", marginBottom: "10px", marginTop: "5px", borderBottomRightRadius: "5px", borderTopRightRadius: "5px" }}  ></div>
            <p style={{ textAlign: "left", marginTop: "0px", paddingBottom: "10px" }} >What I Contribute</p>
            <div class="react-activity-calendar" style={{padding:"2%",alignItems:"center",border:"1px solid",margin:"2%",borderRadius:"8px"}} >
                <GitHubCalendar username='LuciferGod06' colorScheme='dark' year={'2023'} fontSize={19}
                    labels={1} style={{ textAlign: "center" }}
                    blockSize={15} blockMargin={4} hideColorLegend={true} />
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",justifyContent:"right",alignItems:"center"}}>

                <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=LuciferGod06&theme=dark&border_radius=10&date_format=M%20j%5B%2C%20Y%5D" width={"50%"} alt="github-streak-stats" />
                <img id="github-top-langs" src="https://denvercoder1-github-readme-stats.vercel.app/api/top-langs/?username=LuciferGod06&langs_count=10&layout=compact&theme=react&border_color=f0ffff&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866%22%20height=%22192px%22%20width=%2249.5%%22" alt="github-top-langs" width={"50%"} />
                <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=LuciferGod06&show_icons=false&theme=dark" width={"50%"} alt="github-stats-card" />

            </div>


        </div>
    )
}
