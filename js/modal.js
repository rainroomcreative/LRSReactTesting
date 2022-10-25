
'use strict';

const e = React.createElement;
const PAYMENT = {
  later: 'pay-later',
  now: 'pay-now'
}

const CLASS_OPTIONS = {
  online: 'online',
  inPerson: 'in-person',
  hybrid: 'hybrid',
}

const modalSlidesContent = {
  nevada_traffic_school_for_court: {
    title: "Nevada Traffic School for Court",
    description: "This is a 5-hour Nevada DMV approved course. In this class you will learn safe driving practices to help you become a more responsible, aware, and safer driver. If you are taking this class as part of a deal with the court to reduce your charge, this is the correct class for you. If you are taking this class to reduce points already on your license with the DMV, you should take the Nevada Traffic School for NV DMV class.",
    price: "$19.99",
    learningMethods: [CLASS_OPTIONS.online, CLASS_OPTIONS.inPerson, CLASS_OPTIONS.hybrid],
    paymentMethods: [PAYMENT.now, PAYMENT.later],
  }  
}

class ProgressBar extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){

    const { currentSlide, maxSlides } = this.props;

    return (
      <div className="progress-wrap">
        {[...Array(maxSlides)].map((e, i) => {
          return <div key={i} className={(currentSlide > i) ? "progress-bubble filled" : "progress-bubble" }></div>;
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
    var progressSlide = this.props.progressSlide;

    return (
        <div className="modal-wrap">
          <div className="close-button"><img src="images/ep_close-bold.svg" loading="lazy" alt=""/></div>
          <div className="modal-info">
            <h3 className="modal-heading">{this.props.content.title}</h3>
            <h4 className="modal-subheading">Details</h4>
            <div className="text-block-3">{this.props.content.description}<br/></div>
          </div>
          <div className="user-actions">
            <ProgressBar currentSlide={this.props.currentSlide} maxSlides={this.props.maxSlides}/>
            <a onClick={() => progressSlide()} href="#" className="button modal-button w-button">Take this Course</a>
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
    var progressSlide = this.props.progressSlide;
    if(this.props.content.learningMethods.includes(CLASS_OPTIONS.online)){
      online = (<div onClick={() => progressSlide("learning-method", CLASS_OPTIONS.online)} className="modal-choice-block highlighted"><img src="../images/noun-phone-2173681-1.svg" loading="lazy" alt="" className="modal-icon"/>
                <h4 className="modal-subheading block">Online</h4>
              </div>);
    }

    if(this.props.content.learningMethods.includes(CLASS_OPTIONS.hybrid)){
      hybrid = (<div onClick={() => progressSlide("learning-method", CLASS_OPTIONS.hybrid)} className="modal-choice-block"><img src="images/zoom-icon.svg" loading="lazy" alt="" className="modal-icon"/>
                  <h4 className="modal-subheading block">Hybrid/Zoom</h4>
                </div>);
    }

    if(this.props.content.learningMethods.includes(CLASS_OPTIONS.inPerson)){
      inPerson = (<div onClick={() => progressSlide("learning-method", CLASS_OPTIONS.inPerson)} className="modal-choice-block"><img src="images/live-icon.svg" loading="lazy" alt="" className="modal-icon"/>
                    <h4 className="modal-subheading block">Live</h4>
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
          <div className="text-block-3">Choose One</div>
          <div className="choice-blocks-wrap">
            {online}
            {hybrid}
            {inPerson}
          </div>
            <ProgressBar currentSlide={this.props.currentSlide} maxSlides={this.props.maxSlides}/>
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
    var progressSlide = this.props.progressSlide;

    if(this.props.content.paymentMethods.includes(PAYMENT.now)){
      payUpFront = (<div onClick={() => progressSlide("payment-method", PAYMENT.now)} className="modal-choice-block"><img src="images/noun-credit-card-4148267-1.svg" loading="lazy" alt="" className="modal-icon"/>
                      <h4 className="modal-subheading block">Pay for Class Up-front</h4>
                    </div>);
    }

    if(this.props.content.paymentMethods.includes(PAYMENT.later)){
      payLater = (<div onClick={() => progressSlide("payment-method", PAYMENT.later)} className="modal-choice-block"><img src="images/noun-unlock-588454-1.svg" loading="lazy" alt="" className="modal-icon"/>
                  <h4 className="modal-subheading block">Sign Up &amp; Start for Free</h4>
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
          <div className="text-block-3">Choose One</div>
          <div className="choice-blocks-wrap">
            {payLater}
            {payUpFront}
          </div>
            <ProgressBar currentSlide={this.props.currentSlide} maxSlides={this.props.maxSlides}/>
            <a href="#" className="login-link">Already Have an Account? Log in</a>
          </div>
        </div>
    )
  }
}

class LiveClassSlide extends React.Component {
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
        <h3 className="modal-heading">Live / Hybrid Class Info</h3>
        <h4 className="modal-subheading">Course Name</h4>
        <div className="two-column-section">
          <div id="w-node-e29f1a48-9477-e5db-c502-d30f273a1354-067c2d21" className="full-height-column">
            <div className="w-embed">
              <table className="GeneratedTable">
                <thead>
                  <tr>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="w-node-_5aaff8e7-5c74-6431-dae3-04e7b8f54c5e-067c2d21" className="full-height-column">
            <div className="text-block-3">Have you already been through our intake interview process? Log In to the Portal<br/>‍<br/>We recommend the online version of this class, however, if you would like to attend the live class, or you are required to take the live class, contact support.<br/></div>
          </div>
        </div>
      </div>
      <div className="user-actions"></div>
    </div>
    )
  }
}

class CreateAccountSlide extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var progressSlide = this.props.progressSlide;

    return (
      <div className="modal-wrap">
        <div className="previous-button" onClick={this.props.prevSlide}><img src="images/Arrow.svg" loading="lazy" alt=""/>
          <div className="text-block-4">Previous</div>
        </div>
        <div className="close-button"><img src="images/ep_close-bold.svg" loading="lazy" alt=""/></div>
        <div className="modal-info">
          <h3 className="modal-heading">Create your LRS Account</h3>
        </div>
        <div className="form-block w-form">
          <form id="email-form" name="email-form" data-name="Email Form" method="get" className="modal-form-wrap">
            <label for="name" className="modal-field-label">Email Address</label>
            <input type="text" className="modal-field w-input" maxlength="256" name="name" data-name="Name" placeholder="example@somthing.com" id="name"/>
            <label for="email" className="modal-field-label">Choose a Password</label>
            <input type="password" className="modal-field w-input" maxlength="256" name="password" placeholder="•••••••••" id="password" required=""/>
            <label for="email-2" className="modal-field-label">Choose a Password</label>
            <input type="password" className="modal-field w-input" maxlength="256" name="password-confirm" placeholder="•••••••••" id="password-confirm" required=""/>
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <div className="user-actions">
          <ProgressBar currentSlide={this.props.currentSlide} maxSlides={this.props.maxSlides}/>
          <a href="#" onClick={() => progressSlide()} className="button modal-button w-button">{this.props.paymentMethod === PAYMENT.now ? "Proceed to Billing": "Create Account & Begin"}</a>
          <a href="#" className="login-link">Already Have an Account? Log in</a>
        </div>
      </div>
    )
  }
}

class BillingInfoSlide extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var progressSlide = this.props.progressSlide;

    return(
      <div className="modal-wrap">
      <div className="previous-button" onClick={this.props.prevSlide}><img src="images/Arrow.svg" loading="lazy" alt=""/>
        <div className="text-block-4">Previous</div>
      </div>
      <div className="close-button"><img src="images/ep_close-bold.svg" loading="lazy" alt=""/></div>
      <div className="modal-info">
        <h3 className="modal-heading">Complete Course Payment</h3>
        <h4 className="modal-subheading">{this.props.content.title}</h4>
      </div>
      <div className="form-block w-form">
        <h4 className="modal-subheading left">Billing Information</h4>
        <form id="email-form" name="email-form" data-name="Email Form" method="get" className="modal-form-wrap">
          <div className="two-column-section">
            <div id="w-node-_1e5084f8-fcae-7e18-0766-b858440d8aea-067c2d21">
              <label for="first-name-billing" className="modal-field-label">First Name</label>
              <input type="text" className="modal-field w-input" maxlength="256" name="first-name-billing" data-name="first-name-billing" placeholder="First Name" id="first-name-billing" required=""/>
            </div>
            <div id="w-node-a17b3c88-633a-c760-5414-d458fe1aaaa8-067c2d21">
              <label for="email-3" className="modal-field-label">Last Name</label>
              <input type="text" className="modal-field w-input" maxlength="256" name="last-name-billing" data-name="last-name-billing" placeholder="Last Name" id="last-name-billing" required=""/>
            </div>
          </div>
          <label for="street-address-billing" className="modal-field-label">Street Address</label>
          <input type="text" className="modal-field w-input" maxlength="256" name="street-address-billing" data-name="street-address-billing" placeholder="Street Address" id="street-address-billing" required=""/>
          <div className="two-column-section">
            <div id="w-node-ff278c64-6ee1-51b5-92ad-b267960ff352-067c2d21">
              <label for="city-billing" className="modal-field-label">City</label>
              <input type="text" className="modal-field w-input" maxlength="256" name="city-billing" data-name="city-billing" placeholder="City" id="city-billing" required=""/>
            </div>
            <div id="w-node-ff278c64-6ee1-51b5-92ad-b267960ff356-067c2d21">
              <label for="state-billing" className="modal-field-label">Expiration Year</label>
              <input type="number" className="modal-field w-input" maxlength="256" name="state-billing" data-name="state-billing" placeholder="State" id="state-billing" required=""/>
            </div>
          </div>
          <label for="zip-billing" className="modal-field-label">ZIP Code</label>
          <input type="number" className="modal-field w-input" maxlength="256" name="zip-billing" data-name="zip-billing" placeholder="ZIP Code" id="zip-billing" required=""/>
        </form>
        <div className="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <div className="user-actions">
        <ProgressBar currentSlide={this.props.currentSlide} maxSlides={this.props.maxSlides}/>
        <a href="#" onClick={() => progressSlide()} className="button modal-button w-button">Proceed to Payment</a>
        <a href="#" className="login-link">Already Have an Account? Log in</a>
      </div>
    </div>
    )
  }
}

class BillingSlide extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    var progressSlide = this.props.progressSlide;

    return (
      <div className="modal-wrap">
      <div className="previous-button"><img src="images/Arrow.svg" loading="lazy" alt=""/>
        <div className="text-block-4">Previous</div>
      </div>
      <div className="close-button"><img src="images/ep_close-bold.svg" loading="lazy" alt=""/></div>
      <div className="modal-info">
        <h3 className="modal-heading">Payment Method</h3>
        <h4 className="modal-subheading">{this.props.content.title}</h4>
      </div>
      <div className="form-block w-form">
        <h4 className="modal-subheading left">Total Amount Due: <span className="course-price">{this.props.content.price}</span></h4>
        <h4 className="modal-subheading left">Have a coupon?</h4>
        <form id="email-form" name="email-form" data-name="Email Form" method="get" className="modal-form-wrap">
          <label for="name-3" className="modal-field-label">Promo Code</label>
          <input type="text" className="modal-field w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Enter Promo Code" id="name-2"/>
          <h4 className="modal-subheading left">Payment Info</h4>
          <label for="card-number-2" className="modal-field-label">Card Number</label>
          <input type="number" className="modal-field w-input" maxlength="256" name="card-number-2" data-name="Card Number 2" placeholder="Enter Card Number " id="card-number-2" required=""/>
          <div className="two-column-section">
            <div id="w-node-_0620a101-34bc-aa71-fe4f-aeea800e64a2-067c2d21">
              <label for="email-4" className="modal-field-label">Expiration Month</label>
              <input type="text" className="modal-field w-input" maxlength="256" name="email-3" data-name="Email 3" placeholder="mm" id="email-3" required=""/>
            </div>
            <div id="w-node-_0620a101-34bc-aa71-fe4f-aeea800e64a6-067c2d21">
              <label for="email-4" className="modal-field-label">Expiration Year</label>
              <input type="number" className="modal-field w-input" maxlength="256" name="email-3" data-name="Email 3" placeholder="yy" id="email-3" required=""/>
            </div>
            <div id="w-node-_0620a101-34bc-aa71-fe4f-aeea800e64aa-067c2d21">
              <label for="cvc-2" className="modal-field-label">Security Code (CVC)</label>
              <input type="number" className="modal-field w-input" maxlength="256" name="cvc-2" data-name="Cvc 2" placeholder="cvc" id="cvc-2" required=""/>             
            </div>
          </div>
        </form>
        <div className="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <div className="user-actions">
        <ProgressBar currentSlide={this.props.currentSlide} maxSlides={this.props.maxSlides}/>
        <a href="#" onClick={() => progressSlide()} className="button modal-button w-button">Pay for Course</a>
        <a href="#" className="login-link">Already Have an Account? Log in</a>
      </div>
    </div>
    )
  }
}

class SuccessSlide extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div class="modal-wrap success">
        <div class="modal-info success">
          <h3 class="modal-heading">Success!</h3>
          <h4 class="modal-subheading">Your account has been created!</h4>
          <div class="text-block-3 centered">You may now continue taking your class. Once you are done, you will be able to download your completion cert.<br/></div>
        </div>
        <div class="user-actions">
          <a href="#" class="button modal-button w-button">Go to course</a>
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
      learningMethod: "",
      paymentMethod: "",
      step: 1, 
     };
     var progressSlide = this.progressSlide.bind(this);
  
    }

  progressSlide = (option, path) => {
    if (option === "learning-method" && path !== undefined){
      this.setState({learningMethod: path});
    }

    if (option === "payment-method" && path !== undefined){
      this.setState({paymentMethod: path});
    }
    // if(nextSlide !== undefined){
    //   this.setState({modalMap : modalMap.push(nextSlide)});
    // }
    this.setState({step: this.state.step + 1});
  }

  prevSlide = () => {
    this.setState({step: this.state.step - 1});
  }


  render() {

    switch(this.state.step){
      case 1: 
        return <CourseDescriptionSlide 
          progressSlide={this.progressSlide} 
          content={this.state.chosenCourse}
          currentSlide={this.state.step}
          maxSlides={5}
        />;
      case 2: 
        return <CourseOptionsSlide
          progressSlide={this.progressSlide}
          prevSlide={this.prevSlide}
          content={this.state.chosenCourse}
          currentSlide={this.state.step}
          maxSlides={5}
        />;
      case 3:
        if(this.state.learningMethod === CLASS_OPTIONS.online){
          return <PaymentOptionsSlide
            progressSlide={this.progressSlide}
            prevSlide={this.prevSlide}
            content={this.state.chosenCourse}
            currentSlide={this.state.step}
            maxSlides={5}

          />;
        } else {
          return <LiveClassSlide
            progressSlide={this.progressSlide}
            prevSlide={this.prevSlide}
            content={this.state.chosenCourse}
            currentSlide={this.state.step}
            maxSlides={5}

          />;
        }
      case 4:
        let slides = 5;
        if(this.state.paymentMethod === PAYMENT.now){
          slides = 6;
        }
          return <CreateAccountSlide
            prevSlide={this.prevSlide}
            progressSlide={this.progressSlide}
            content={this.state.chosenCourse}
            paymentMethod={this.state.paymentMethod}
            currentSlide={this.state.step}
            maxSlides={slides}

          />;
      case 5:
        if(this.state.paymentMethod === PAYMENT.now){
          return <BillingInfoSlide 
            prevSlide={this.prevSlide}
            content={this.state.chosenCourse}
            progressSlide={this.progressSlide}
            currentSlide={this.state.step}
            maxSlides={6}

          />;
        } else if(this.state.paymentMethod === PAYMENT.later){
          return <SuccessSlide/>;
        }
      case 6:
        if(this.state.paymentMethod === PAYMENT.now){
          return <BillingSlide
            prevSlide={this.prevSlide}
            content={this.state.chosenCourse}
            progressSlide={this.progressSlide}
            currentSlide={this.state.step}
            maxSlides={6}
          />;
        }
      case 7:
        return <SuccessSlide />;
      default:
    }
    return (
      <div className="fullscreen-modal">
        {this.state.modalMap[this.state.step]}
      </div>
    );
  }
}


const domContainer = document.querySelector('#modal-container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Modal));




// modalMap: [
//   <CourseDescriptionSlide 
//     nextSlide={this.progressSlide} 
//     prevSlide={() => this.prevSlide()} 
//     content={modalSlidesContent["nevada_traffic_school_for_court"]}
//   />,
//   <CourseOptionsSlide
//     nextSlide={this.progressSlide}
//     prevSlide={() => this.prevSlide()}
//     content={modalSlidesContent["nevada_traffic_school_for_court"]}
//   />,
// ]