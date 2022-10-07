
'use strict';

const e = React.createElement;

class ProgressBar extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    console.log(this.props.modalMap)
    const bubbles = this.props.modalMap.map((modal, index) => {

      if (index <= this.props.currentModal){
        <div className="progress-bubble filled"></div>
      }
      <div className="progress-bubble"></div>
    });

    return (
      <div className="progress-wrap">
        {bubbles}
      </div>
    );
  }
}

class ModalSlide extends React.Component {
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
            <h3 className="modal-heading">{this.props.title}</h3>
            <h4 className="modal-subheading">{this.props.subtitle}</h4>
            <div className="text-block-3">Check out our documentation page, it contains a more complete set of information. If that still doesn’t do it, you can also contact us. Check out our documentation page, it contains a more complete set of information. If that still doesn’t do it, you can also contact us.<br/></div>
          </div>
          <div className="user-actions">
            <ProgressBar modalMap={this.props.modalMap} currentModal={this.props.currentModal}/>
            <a onClick={this.props.nextSlide} href="#" className="button modal-button w-button">Take this Course</a>
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
      currentSlide: 0, 
      modalMap: [
        <ModalSlide nextSlide={() => this.progressSlide()} prevSlide={() => this.prevSlide()}title="Course Name 1" subtitle="Details" modalMap={this.modalMap} currentModal={this.currentModal}/>,
        <ModalSlide nextSlide={() => this.progressSlide()} prevSlide={() => this.prevSlide()}title="Course Name 2" subtitle="Details" modalMap={this.modalMap} currentModal={this.currentModal}/>,
        <ModalSlide nextSlide={() => this.progressSlide()} prevSlide={() => this.prevSlide()}title="Course Name"   subtitle="Details" modalMap={this.modalMap} currentModal={this.currentModal}/>,
        <ModalSlide nextSlide={() => this.progressSlide()} prevSlide={() => this.prevSlide()}title="Course Name 3" subtitle="Details" modalMap={this.modalMap} currentModal={this.currentModal}/>,
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