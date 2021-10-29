import Project from '../Project/Project'
import './projectList.css'
import { projects } from '../../data'

const ProjectList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My current projects</h1>   
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
                </p>
            </div> 
            <div className="pl-list">
                {projects.map((item) => (
                    <Project img={item.img} key={item.id}/>
                ))}
                      
            </div>           
        </div>

    )
}

export default ProjectList
