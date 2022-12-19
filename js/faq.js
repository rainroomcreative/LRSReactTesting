'use strict';

const e = React.createElement;

let faq_data; 

class FAQCategory extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className={this.props.selected ? "faq-filter active" : "faq-filter"} onClick={() => this.props.toggle(this.props.id)}>
          <div class="faq-filter-content"><img src={this.props.iconURL ? this.props.iconURL : "images/desktop_windows.svg"} loading="lazy" alt="" class="faq-filter-icon" />
            <h4 class="faq-filter-category">{this.props.name}</h4>
          </div>
        </div>
    )
  }
}

class FAQItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      closedHeight: 60,
      answerHeight: 0
    };
  }

  componentDidMount() {
    // Fill answer div with rich text
    this.richTextDiv.innerHTML = this.props.answer;
    // Get height of answer div
    const answerHeight = this.answerDiv.clientHeight;
    this.setState({answerHeight: answerHeight});
    console.log(`${this.props.question} answer Height is: ${answerHeight}`);
  }

  render() {
    let itemStyle = {
      height: this.props.open ? `${this.state.answerHeight + this.state.closedHeight}px` : `${this.state.closedHeight}px`,
      display: this.props.isInCategory ? 'block' : 'none'
    };

    let iconStyle ={
      transform: this.props.open ? 'rotate(45deg)' : 'rotate(0deg)'
    }

    return (
    <div onClick={() => this.props.toggle(this.props.id)} class="faq-item faq-page opened" style={itemStyle}>
      <div class="category-tag">Category three</div>
      <div class="faq-question-wrap faq-page">
        <div class="faq-question">{ this.props.question }</div><img style={iconStyle} src="images/add_circle_outline.svg" loading="lazy" alt="" class="faq-plus faq-page"/>
      </div>
      <div class="faq-answer-wrap" ref={ (answerDiv) => { this.answerDiv = answerDiv } }>
        <div ref={ (richTextDiv) => { this.richTextDiv = richTextDiv } } class="body-text w-richtext">
        </div>
      </div>
    </div>
  )
  }
}

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openID: null,
      selectedCategory: null
    }
  }

  handleToggle=(id)=> {
    this.setState({openID: this.state.openID !== id ? id : null})
  }

  handleCategorySelect=(categoryID)=> {
    this.setState({selectedCategory: this.state.selectedCategory !== categoryID ? categoryID : null})
  }

  render() {
    return (
      <div>
        <div class="faq-category-section wf-section">
          <div class="boxed _900">
          <h3 class="faq-section-heading">Choose a Category</h3>
            <div class="category-btns-wrap">
              {faq_data.categories.items.map((category) => (
                <FAQCategory 
                key={category["_id"]} 
                id={category["_id"]} 
                name={category.name}
                toggle={this.handleCategorySelect}
                selected={this.state.selectedCategory === category["_id"]}
                iconURL={category["category-icon"] ? category["category-icon"].url : null}
                />
              ))}
            </div>
          </div>
        </div>
        <div class="faq-page-section wf-section">
          <div class="boxed _900">
            <h3 class="faq-section-heading"><span class="category-label">category</span> questions</h3>
            {faq_data.items.map((item) => (
              <FAQItem 
                question={item.name} 
                key={item["_id"]}
                id={item["_id"]}
                answer={item.answer} 
                toggle={this.handleToggle}
                open={item["_id"] === this.state.openID}
                isInCategory={this.state.selectedCategory === null || this.state.selectedCategory === item.category}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

fetch('https://rainroomcreative.github.io/LRSReactTesting/faq_items.json')
  .then(response => response.json())
  .then((json) => faq_data = json)
  .then(() => {
    return fetch('https://rainroomcreative.github.io/LRSReactTesting/faq_categories.json')
  })
  .then((response) => response.json())
  .then((json) => faq_data.categories = json)
  .then(() => {
    const domContainer = document.querySelector('#faq-container');
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(FAQ));
  })

