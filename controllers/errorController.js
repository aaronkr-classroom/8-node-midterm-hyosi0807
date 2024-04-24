// errorController.js
"use strict";

const httpStatus = require('http-status-codes');


exports.logErrors = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
};


exports.resNotFound = (req, res) => { // 앞에서 처리되지 못한 모든 요청 처리
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

exports.resInternalError = (err, req, res, next) => { // 내부 서버 에러의 처리
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.error(`ERROR occurred: ${err.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our app is experiencing a problem!`);
}