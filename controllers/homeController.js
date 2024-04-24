// homeController.js
"use strict";


exports.showHome = (req, res) => {
    res.render("index");
}
exports.showCourses = (req, res) => { // 특정 라우트를 위한 콜백 함수 추가
    res.render("transportation");
};
exports.showSignUp = (req, res) => {
    res.render("contact");
};
exports.postedSignUp = (req, res) => {
    res.render("thanks");
};


var courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }
]; // 코스를 위한 배열 정의

exports.showRenderedCourses = (req, res) => {
    res.render("transportation", {
        offeredCourses: courses // 코스 배열 데이터를 뷰로 전달
    });
};