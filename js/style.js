const popup = {
  width: "90%",
  "background-color": "#ffffff",
  margin: "1% auto",
  padding: "5% 5%",
  overflow: "scroll",
  position: "relative",
  transition: "all ease 1s",
  "border-radius": "8px",
  "z-index": 3,
  "box-shadow":
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

const popup_h3 = {
  "text-align": "center",
  color: "#d31616",
  "font-size": "24px",
  padding: "2px 0",
  "border-bottom": "0px solid #dee0e4",
};

const popup_submit_btn = {
  "margin-right": "6px",
  "margin-top": "15%",
  padding: "3px 13px",
  border: "none",
  "border-radius": "11px",
  outline: "none",
  float: "right",
  "background-color": "#007caa",
  color: "#ffffff",
  "font-weight": "bolder",
  transition: "all ease 1s",
  "box-shadow":
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

const popup_cancle_btn = {
  "margin-left": "6px",
  "margin-top": "15%",
  padding: "3px 13px",
  border: "none",
  "border-radius": "11px",
  outline: "none",
  float: "left",
  "background-color": "#ff2100",
  color: "#ffffff",
  "font-weight": "bolder",
  transition: "all ease 1s",
  "box-shadow":
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

const popup_strong = {
  color: "#4b4b4b",
  margin: "5px 0",
  "font-size": "15px",
};

const wwindow = {
  "z-index": 3,
  display: "none",
  "padding-top": "100px",
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  overflow: "auto",
  "background-color": "rgb(0, 0, 0)",
  "background-color": "rgba(0, 0, 0, 0.4)",
};

const log_pop_okBtn = {
  "margin-right": "6px",
  width: "79px",
  "margin-top": "15%",
  padding: "5px 15px",
  border: "none",
  "border-radius": "11px",
  outline: "none",
  float: "right",
  "background-color": "#007caa",
  color: "#ffffff",
  "font-weight": "bolder",
  transition: "all ease 1s",
  "box-shadow":
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64,0.35) 0px -2px 6px 0px inset",
};

const log_pop_cancle_btn = {
  "margin-left": "6px",
  "margin-top": "15%",
  padding: "5px 13px",
  border: "none",
  "border-radius": "11px",
  outline: "none",
  float: "left",
  "background-color": "#ff2100",
  color: "#ffffff",
  "font-weight": "bolder",
  transition: "all ease 1s",
  "box-shadow":
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

const log_pop_err = {
  color: "#e34700",
  margin: "5px auto",
  "font-size": "15px",
};

const errPlace = {
  width: "100%",
};

const log_pop_img = {
  width: "80px",
  height: "80px",
  "object-fit": "cover",
  margin: "5px auto",
};

const log_pop_strong = {
  color: "#4b4b4b",
  margin: "5px 0",
  "font-size": "15px",
};

/*
@media only screen and (min-width: 500px) {
  #log_pop {
    width: 40%;
    justify-content: center;
    align-items: center;
  }
}


@media only screen and (min-width: 500px) {
  .log_pop {
    width: 50%;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 5% auto%;
  }
}
*/

var data = [];
data[0] = popup;
data[1] = log_pop_img;
data[2] = errPlace;
data[3] = log_pop_okBtn;
data[4] = log_pop_strong;
export { data };
