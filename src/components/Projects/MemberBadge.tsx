const MemberBadge = ( {member}: {member: any}) => {
    return (
        <>
        <strong className="inline-flex items-center bg-gray-100 px-5 py-1.5 rounded-full mb-4">
  <img
    className="object-cover w-6 h-6 rounded-full -ml-2.5 mr-2.5"
    src="https://www.hyperui.dev/photos/man-4.jpeg"
    alt="Simon Lewis"
  />
  <div className="flex flex-col">
  <span className="text-[12px] font-medium mr-1">
    {member.name}
  </span>
  <span className="text-[12px] font-medium">
    {member.role}
  </span>
  </div>
</strong>
        </>
    )
}

export default MemberBadge; 