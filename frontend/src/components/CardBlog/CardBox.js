
function CardBox(props) {
  return (
    <div className="card-box">
        <img src={props.cardImg} alt="someImage" />
        <div className="card-text-content">
          <div className="top-links">
            <div className="d-flex align-items-center justify-content-start gap-1">
              <img src="/images/icons/user-icon.svg" className="m-0"/>
              <p className="m-0">Admin</p>
            </div>
            <div className="d-flex align-items-center justify-content-start gap-1">
              <img src="/images/icons/comment-icon.svg" className="m-0"/>
              <p className="m-0">Comment</p>
            </div>
          </div>
          <h5>{props.title}</h5>
          <p>{props.content}</p>
          <a href={props.readMoreRef} className="read-more-anchor">Read More</a>
        </div>
    </div>
  )
}

export default CardBox