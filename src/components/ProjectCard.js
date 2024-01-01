const ProjectCard = ({ project }) => {

    return (
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {/* Other project details */}
      </div>
    );
  };
  
  export default ProjectCard;