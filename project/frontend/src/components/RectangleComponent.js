import React, {Component} from 'react'

class RectangleComponent extends Component {

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  handleScroll = () => {
      let stickyBiru = document.getElementById("testDiv");
      let stickyPost = stickyBiru.offsetTop

      let stickyKuning = document.getElementById("testDiv2");
      let stickyPost2 = stickyKuning.offsetTop

      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled > stickyPost && stickyPost2 > scrolled)  {
        console.log("sticky biru diatas")
        // document.querySelector(".navbar").className = "navbar scroll"; mengganti div class
      } else if (scrolled > stickyPost2) {
        console.log("sticky Kuning diatas")
      } else {
        console.log("sticky dibawah")
      }
  };

  render(){
    return (
      <div>
        <div id="testDiv"
          style={{
            display: "inline-block",
            width: "600px",
            height: "300px",
            background: 'blue',
            marginTop: "250px"
          }}
        />
        <div id="testDiv2"
          style={{
            display: "block",
            width: "600px",
            height: "900px",
            background: 'yellow',
          }}
        />
      </div>
    )
  }
}


export default RectangleComponent
