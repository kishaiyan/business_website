import { Slider } from './Slider';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slides from '../mock.json'; 
import '../css/Homepage.css';
export default () => {
  return (
    <div className='main-container'>
      <Slider className='slide-show' slides={slides}/>
      <div className='bottom-half'>
        <div className='about'>
          <div className='image'>
            <img src='https://5.imimg.com/data5/EL/KO/MY-479538/rubber-conveyor-belt-500x500.jpg' alt='Company Logo' />
          </div>
          <div className='paragraph'>
            <h1>Gyrating Associates</h1>
            <p>We at Gyrating Associates strategically plan and focus on delivering the best to our clients in terms of quality and dependability. This eagerness to deliver the best has made us stand distinctively among our competitors. We never miss any opportunity to serve our clients with the best services. Our Efficient planning, designing, developing and customer handling has made us achieve higher customer satisfaction. We are leading manufacturers and suppliers of Conveyor system and Conveyor Spares and are giving our best in catering to the needs of all leading Automation Industries. Our expertise has not given us any chance to look back since our journey started in 1994.</p>
          </div>
        </div>
        <div className='industries'>
        <div className='Serving'>
            <div className='heading'>
              <h1>Industries We Serve</h1>
            </div>
                <div className='text'>
                  <div className='left'>
                    <p>"Dairy conveyor belts streamline the production process, ensuring efficient transportation of products. Designed for hygiene and durability, they maintain a contamination-free environment in dairy manufacturing, enhancing operational efficiency."</p>
                  </div>
                 
                    <div class='image-left'>
                     
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVS1SxDURjl8DyBBcusI52UHGmpjCEdi-zw&usqp=CAU'/>
                  </div>
                </div>
                <div className='text'>
                <div class='image-right'>
                     
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVS1SxDURjl8DyBBcusI52UHGmpjCEdi-zw&usqp=CAU'/>
                  </div>
                    <div className='right'>
                      <p>"Conveyor belts in the bottling industry optimize production by seamlessly moving bottles through each stage. Purpose-built for reliability, they contribute to a streamlined and efficient bottling process."
                      </p>
                    </div>
                  
                </div>

                <div className='text'>
                <div className='left'>
                  <p>"Food conveyor belts revolutionize food industry logistics, facilitating seamless movement of products. Engineered for hygiene, these belts ensure a safe and efficient manufacturing environment, optimizing production processes."</p>
                </div>
                <div class='image-left'>
                     
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVS1SxDURjl8DyBBcusI52UHGmpjCEdi-zw&usqp=CAU'/>
                  </div>
                </div>

                <div className='text'>
                <div class='image-right'>
                     
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVS1SxDURjl8DyBBcusI52UHGmpjCEdi-zw&usqp=CAU'/>
                  </div>
                <div className='right'>
                  <p>"Conveyor belts in meat and seafood industries optimize processing by facilitating seamless product movement. Designed for hygiene and durability, they ensure a contamination-free and efficient manufacturing environment."</p>
                  
                </div>
                </div>
        </div>
        
      </div>
      </div>



      
      
    </div>
  );
};
