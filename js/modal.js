
'use strict';

const e = React.createElement;
const modalSlidesContent = {
  nevada_traffic_school_for_court: {
    title: "Nevada Traffic School for Court",
    description: "This is a 5-hour Nevada DMV approved course. In this class you will learn safe driving practices to help you become a more responsible, aware, and safer driver. If you are taking this class as part of a deal with the court to reduce your charge, this is the correct class for you. If you are taking this class to reduce points already on your license with the DMV, you should take the Nevada Traffic School for NV DMV class.",
    price: "$19.99",
    learningMethods: ["online", "hybrid", "in-person"],
    paymentMethods: ["pay-up-front", "pay-later"],
  }  
}

class ProgressBar extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    // console.log(this.props.modalMap)
    // const bubbles = this.props.modalMap.map((modal, index) => {

    //   if (index <= this.props.currentModal){
    //     <div className="progress-bubble filled"></div>
    //   }
    //   <div className="progress-bubble"></div>
    // });

    return (
      <div className="progress-wrap">
        {[...Array(5)].map((e, i) => {
          return <div key={i} className={(this.props.currentSlide <= i) ? "progress-bubble" : "progress-bubble filled"}></div>;
        }) }
      </div>
    );



  }
}



class CourseDescriptionSlide extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="modal-wrap">
          <div className="previous-button" onClick={this.props.prevSlide}><img src="images/Arrow.svg" loading="lazy" alt=""/>
            <div className="text-block-4">Previous</div>
          </div>
          <div className="close-button"><img src="images/ep_close-bold.svg" loading="lazy" alt=""/></div>
          <div className="modal-info">
            <h3 className="modal-heading">{this.props.content.title}</h3>
            <h4 className="modal-subheading">Details</h4>
            <div className="text-block-3">{this.props.content.description}<br/></div>
          </div>
          <div className="user-actions">
            <ProgressBar currentSlide={this.props.currentSlide}/>
            <a onClick={this.props.nextSlide} href="#" className="button modal-button w-button">Take this Course</a>
            <a href="#" className="login-link">Already Have an Account? Log in</a>
          </div>
        </div>
    )
  }
}

class CourseOptionsSlide extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    var online;
    var hybrid;
    var inPerson;

    if(this.props.content.learningMethods.includes("online")){
      online = (<div onClick={this.props.nextSlide} class="modal-choice-block highlighted"><img src="../images/noun-phone-2173681-1.svg" loading="lazy" alt="" class="modal-icon"/>
                <h4 class="modal-subheading block">Online</h4>
              </div>);
    }

    if(this.props.content.learningMethods.includes("hybrid")){
      hybrid = (<div onClick={this.props.nextSlide} class="modal-choice-block"><img src="images/zoom-icon.svg" loading="lazy" alt="" class="modal-icon"/>
                  <h4 class="modal-subheading block">Hybrid/Zoom</h4>
                </div>);
    }

    if(this.props.content.learningMethods.includes("in-person")){
      inPerson = (<div onClick={this.props.nextSlide} class="modal-choice-block"><img src="images/live-icon.svg" loading="lazy" alt="" class="modal-icon"/>
                    <h4 class="modal-subheading block">Live</h4>
                  </div>)
    }
    

    return (
        <div className="modal-wrap">
          <div className="previous-button" onClick={this.props.prevSlide}><img src="images/Arrow.svg" loading="lazy" alt=""/>
            <div className="text-block-4">Previous</div>
          </div>
          <div className="close-button"><img src="images/ep_close-bold.svg" loading="lazy" alt=""/></div>
          <div className="modal-info">
            <h3 className="modal-heading">Choose Your Learning Style</h3>
            <h4 className="modal-subheading">{this.props.content.title}</h4>
            <div className="text-block-3">{this.props.content.description}<br/></div>
          </div>
          <div className="user-actions">
          <div class="text-block-3">Choose One</div>
          <div class="choice-blocks-wrap">
            {online}
            {hybrid}
            {inPerson}
          </div>
            <ProgressBar currentSlide={this.props.currentSlide}/>
            <a href="#" className="login-link">Already Have an Account? Log in</a>
          </div>
        </div>
    )
  }
}

class PaymentOptionsSlide extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    var payUpFront;
    var payLater;

    if(this.props.content.paymentMethods.includes("pay-up-front")){
      payUpFront = (<div class="modal-choice-block"><img src="images/noun-credit-card-4148267-1.svg" loading="lazy" alt="" class="modal-icon"/>
                      <h4 class="modal-subheading block">Pay for Class Up-front</h4>
                    </div>);
    }

    if(this.props.content.paymentMethods.includes("pay-later")){
      payLater = (<div class="modal-choice-block"><img src="images/noun-unlock-588454-1.svg" loading="lazy" alt="" class="modal-icon"/>
                  <h4 class="modal-subheading block">Sign Up &amp; Start for Free</h4>
                </div>);
    }


    return (
        <div className="modal-wrap">
          <div className="previous-button" onClick={this.props.prevSlide}><img src="images/Arrow.svg" loading="lazy" alt=""/>
            <div className="text-block-4">Previous</div>
          </div>
          <div className="close-button"><img src="images/ep_close-bold.svg" loading="lazy" alt=""/></div>
          <div className="modal-info">
            <h3 className="modal-heading">How would you like to start?</h3>
            <h4 className="modal-subheading">{this.props.content.title}</h4>
            <div className="text-block-3">{this.props.content.description}<br/></div>
          </div>
          <div className="user-actions">
          <div class="text-block-3">Choose One</div>
          <div class="choice-blocks-wrap">
            {payLater}
            {payUpFront}
          </div>
            <ProgressBar currentSlide={this.props.currentSlide}/>
            <a href="#" className="login-link">Already Have an Account? Log in</a>
          </div>
        </div>
    )
  }
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      chosenCourse: modalSlidesContent["nevada_traffic_school_for_court"],
      userSelections: {
        learningMethod: "",
        paymentMethod: "",
      },
      currentSlide: 0, 
      modalMap: [
        <CourseDescriptionSlide 
          nextSlide={() => this.progressSlide()} 
          prevSlide={() => this.prevSlide()} 
          content={modalSlidesContent["nevada_traffic_school_for_court"]}
        />,
        <CourseOptionsSlide
          nextSlide={() => this.progressSlide()}
          prevSlide={() => this.prevSlide()}
          content={modalSlidesContent["nevada_traffic_school_for_court"]}
        />,
        <PaymentOptionsSlide 
          nextSlide={() => this.progressSlide()}
          prevSlide={() => this.prevSlide()}
          content={modalSlidesContent["nevada_traffic_school_for_court"]}
        />
      ]
     };
  }

  progressSlide() {
    this.setState({currentSlide: this.state.currentSlide + 1});
  }

  prevSlide(){
    this.setState({currentSlide: this.state.currentSlide - 1});
  }

  render() {
    return (
      <div className="fullscreen-modal">
        {this.state.modalMap[this.state.currentSlide]}
      </div>
    );
  }
}


const domContainer = document.querySelector('#modal-container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Modal));



