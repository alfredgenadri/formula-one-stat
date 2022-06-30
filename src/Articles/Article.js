import { Container } from 'react-bootstrap';
import img1 from './imgs/article1img1.jpg'
import img2 from './imgs/article1img2.jpg'
import Discussion from '../Forums/Discussion';


const Article = () => {
    return (  
        <Container className='py-4'>
            <h2>Mercedes: Zero complacency over F1 2022 100% finishing record</h2>
            <h3 className='py-3'>Mercedes insists it is not getting complacent about its finishing record in Formula 1 this year, despite rivals Red Bull and Ferrari having big reliability headaches.</h3>
            <hr  style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 10,
                borderColor : '#000000'
            }}/>

            <img src={img1}></img>

            <h4 className='py-4'>Lewis Hamilton and George Russell have finished every race so far in 2022 to ensure that Mercedes is the only squad without a retirement.
                On the other hand, championship contenders Red Bull and Ferrari have endured their fair share of mechanical problems in the opening phase of the campaign.
                Red Bull's Max Verstappen retired from the grands prix in Bahrain (fuel pump) and Australia (fuel leak), while Sergio Perez also failed to finish in Bahrain (fuel pump) and was forced out in Canada last week with a gearbox problem.
                Ferrari has also had race-stopping car problems beyond the incidents that put Carlos Sainz out in Australia and Imola.
                The Spaniard suffered an hydraulics failure in the Azerbaijan Grand Prix, while teammate Charles Leclerc had engine failures in Baku and Spain.
                Mercedes team boss Toto Wolff welcomed the finishing record of his squad but did not believe that it had created an invincible car.
                “It's funny that both teams keep having their cars stop,” he said. “But you can't be complacent about that because it can swing in the other direction very quickly.
                “We're happy about our reliability. Last year, when we look at how we went with the engine, we had the other phenomenon [and lots of problems]. That's why I don't want to get too excited too soon."
            </h4>

            <img src={img2}></img>

            <h4 className='py-4'>
            While Ferrari’s reliability failures have been very costly in championship terms, with Leclerc potentially losing two wins because of problems, team boss Mattia Binotto does not think that DNFs will solely decide the title fight.
            “Reliability is certainly important, as important as the performance, but I don't think will be the only factor,” he said after the Canadian Grand Prix.
            “I think development from now until the end of the season is another one, as is the budget gap, and then reliability finally.”
            While F1’s cars are all-new for this year, the power units are a carryover with the engine regulations not due to change until 2026.
            But Binotto says that Ferrari has been exposed by an overhaul during the winter, plus limitations that have been imposed on dyno running.
            “The power unit is a completely new design compared to the past, and the problem is because it's certainly a young project,” he said.
            “On top of that, there are limitations on the dynos which were not there in the past, so you cannot run much on the dyno. We are limited, which means the exercise is more complicated.
            </h4>

            <Discussion></Discussion>
            
        </Container>


    );
}
 
export default Article;