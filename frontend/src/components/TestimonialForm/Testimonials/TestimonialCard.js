
function TestimonialCard(props) {
 
  return (
    <div className="testimonial-card">
        <div className="profile-info">
            <img src={props.clientImg} alt="" />
            <div className="profile-info-text">
              <h5>{props.clientName}</h5>
              <img src="/images/icons/rating-stars.svg" style={{borderRadius:0}}/>
            </div>
        </div>
        <p>{props.clientReview}</p>

        <div className="testimonial-card-info">
          <p>{props.count} --- {props.total}</p>
          <div className="testimonial-card-control">
            <div className="swiper-button-prev" onClick={props.handlePrevButtonClick}>
                <img src="/images/icons/arrow-left.svg"/>
            </div>
            <div className="swiper-button-next" onClick={props.handleNextButtonClick}>
                <img src="/images/icons/arrow-right.svg"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TestimonialCard