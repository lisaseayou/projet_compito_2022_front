import MemberBadge from "./MemberBadge";

 const members = [
    {
        name : "Anaïs Jarnac", 
        role: "Developpeur Lead", 
    },
    {
        name : "Jeremy Gregoire", 
        role: "Developpeur Back"
    }, 
    {
        name : "Alexandre Feynaud", 
        role: "Developpeur React Expert"
    }, 
    {
        name : "David Martinez", 
        role: "Developpeur Front"
    }
]

const ProjectMembersList = () => {
    
    return (
        <>
         <div className="flex flex-col">
      {members.map((member, index) => (
        <MemberBadge key={index} member={member} />
      ))}
    </div>
        </>
    )
}

export default ProjectMembersList; 